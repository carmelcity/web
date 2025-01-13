import { Serialize } from 'eosjs'

const fixup = (x: Uint8Array) => {
  const a = Array.from(x);
  while (a.length < 32) a.unshift(0);
  while (a.length > 32) if (a.shift() !== 0) throw new Error('Signature has an r or s that is too big');
  return new Uint8Array(a);
}

const parseAuthData = (buffer: any) => {
  let rpIdHash = buffer.slice(0, 32);
  buffer = buffer.slice(32);
  let flagsBuf = buffer.slice(0, 1);
  buffer = buffer.slice(1);
  let flagsInt = flagsBuf[0];
  let flags = {
    up: !!(flagsInt & 0x01),
    uv: !!(flagsInt & 0x04),
    at: !!(flagsInt & 0x40),
    ed: !!(flagsInt & 0x80),
    flagsInt,
  };

  let counterBuf = buffer.slice(0, 4);
  buffer = buffer.slice(4);
  let counter = counterBuf.readUInt32BE(0);

  let aaguid = undefined;
  let credID = undefined;
  let COSEPublicKey = undefined;

  if (flags.at) {
    aaguid = buffer.slice(0, 16);
    buffer = buffer.slice(16);
    let credIDLenBuf = buffer.slice(0, 2);
    buffer = buffer.slice(2);
    let credIDLen = credIDLenBuf.readUInt16BE(0);
    credID = buffer.slice(0, credIDLen);
    buffer = buffer.slice(credIDLen);
    COSEPublicKey = buffer;
  }

  return { rpIdHash, flagsBuf, flags, counter, counterBuf, aaguid, credID, COSEPublicKey };
};

const arrayBufferToHex = (view: Uint8Array) => {
  var result = '';
  var value;

  for (var i = 0; i < view.length; i++) {
    value = view[i].toString(16);
    result += value.length === 1 ? '0' + value : value;
  }

  return `0x${result}`;
};

export const supportsPasskeys = () => {
  return globalThis?.PublicKeyCredential !== undefined &&
      typeof globalThis.PublicKeyCredential === 'function'
}

export const signPublicKey = ({ rpId, challenge, allowCredentials }: any) => {
  const id = Buffer.from(allowCredentials[0].id, 'base64').buffer
  return {
    rpId,
    challenge: Buffer.from(challenge, 'base64').buffer,
    allowCredentials:[
      {
        ...allowCredentials[0],
        id
      }
    ]
  }
}

export const registerPublicKey = ({ user, siteUrl, challenge }: any) => {
    return {
      challenge: Buffer.from(challenge, 'base64').buffer,
      attestation: 'direct',
      rp: {
        name: 'Carmel',
        id: new URL(siteUrl).hostname,
      },
      user: {
        id: new ArrayBuffer(user.id),
        name: user.username,
        displayName: user.name || user.username,
      },
      pubKeyCredParams: [
        {
          type: 'public-key',
          alg: -7,
        },
      ],
      transports: ['internal'],
      authenticatorSelection: {
        authenticatorAttachment: 'platform',
        requireResidentKey: true,
        userVerification: 'preferred',
      },
      timeout: 30000,
    };
}

export const getPublicKey = async (attestation: any) => {
  const cbor = require('borc');

  const attB64 = {
    rawId: Buffer.from(attestation.rawId).toString('base64'),
    id: attestation.id,
    response: {
      attestationObject: Buffer.from(attestation.response.attestationObject).toString('base64'),
      clientDataJSON: Buffer.from(attestation.response.clientDataJSON).toString('base64')
    }
  }

  const att = await (cbor as any).decodeFirst(new Uint8Array(attestation.response.attestationObject))
  const authData = parseAuthData(att.authData);
  const { COSEPublicKey, aaguid, counter, counterBuf, credID, flags, flagsBuf, rpIdHash } = authData;
  const pubKey = await (cbor as any).decodeFirst(COSEPublicKey);

  const x = pubKey.get(-2);
  const y = pubKey.get(-3);

  if (x.length !== 32 || y.length !== 32) throw new Error('Public key has invalid X or Y size');

  return {
    _kty: 'EC',
    _crv: 'P-256',
    _att: attB64,
    _x: arrayBufferToHex(x),
    _y: arrayBufferToHex(y)
  };
};


export const getSignature = async (assertion: any, data: any) => {
  const der = new Serialize.SerialBuffer({ array: new Uint8Array(assertion.response.signature) });
  if (der.get() !== 0x30) throw new Error('Signature missing DER prefix');
  if (der.get() !== der.array.length - 2) throw new Error('Signature has bad length');
  if (der.get() !== 0x02) throw new Error('Signature has bad r marker');
  const _r = fixup(der.getUint8Array(der.get()));
  if (der.get() !== 0x02) throw new Error('Signature has bad s marker');
  const _s = fixup(der.getUint8Array(der.get()));

  let r = arrayBufferToHex(_r);
  let s = arrayBufferToHex(_s);

  const sig64 = {
      rawId: Buffer.from(assertion.rawId).toString('base64'),
      id: assertion.id,
      response: {
        authenticatorData:  Buffer.from(assertion.response.authenticatorData).toString('base64'),
        clientDataJSON: Buffer.from(assertion.response.clientDataJSON).toString('base64'),
        signature: Buffer.from(assertion.response.signature).toString('base64'),
        userHandle: Buffer.from(assertion.response.userHandle).toString('base64')
      }
  }

  return Buffer.from(JSON.stringify({
    r, s, ...sig64, ...data
  })).toString('base64')
}
