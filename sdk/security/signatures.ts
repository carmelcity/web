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

export const registerPublicKey = ({ user, siteUrl, challenge }: any) => {
    return {
      challenge: new ArrayBuffer(challenge),
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

export const getSignatureJWK = async (attestation: any) => {
  const cbor = require('borc');

  const att = await (cbor as any).decodeFirst(new Uint8Array(attestation.response.attestationObject));
  const authData = parseAuthData(att.authData);
  const { COSEPublicKey, aaguid, counter, counterBuf, credID, flags, flagsBuf, rpIdHash } = authData;
  const pubKey = await (cbor as any).decodeFirst(COSEPublicKey);

  const x = pubKey.get(-2);
  const y = pubKey.get(-3);

  if (x.length !== 32 || y.length !== 32) throw new Error('Public key has invalid X or Y size');

  return {
    kty: 'EC',
    crv: 'P-256',
    x: arrayBufferToHex(x),
    y: arrayBufferToHex(y),
  };
};
