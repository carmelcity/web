import { Serialize } from 'eosjs';

export const enum UserPresence {
  none = 0,
  present = 1,
  verified = 2,
}

export const enum AttestationFlags {
  userPresent = 0x01,
  userVerified = 0x04,
  attestedCredentialPresent = 0x40,
  extensionDataPresent = 0x80,
}

export const utf8StringToBuffer = (value: string): ArrayBuffer => {
  return new TextEncoder().encode(value);
};

export const parseAuthData = (buffer: any) => {
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

export const bufferToUTF8String = (value: ArrayBuffer): string => {
  return new TextDecoder('utf-8').decode(value);
};

export const fixup = (x: Uint8Array) => {
  const a = Array.from(x);
  while (a.length < 32) a.unshift(0);
  while (a.length > 32) if (a.shift() !== 0) throw new Error('Signature has an r or s that is too big');
  return new Uint8Array(a);
};

export const stringToBase64 = (str: string): string => {
  return btoa(str);
};

export const base64ToString = (str: string): string => {
  return atob(str);
};

export const bufferToBase64URLString = (buffer: ArrayBuffer): string => {
  const bytes = new Uint8Array(buffer);
  let str = '';

  for (const charCode of bytes) {
    str += String.fromCharCode(charCode);
  }

  const base64String = btoa(str);

  return base64String.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
};

export const base64URLStringToBuffer = (base64URLString: string): ArrayBuffer => {
  const base64 = base64URLString.replace(/-/g, '+').replace(/_/g, '/');
  const padLength = (4 - (base64.length % 4)) % 4;
  const padded = base64.padEnd(base64.length + padLength, '=');

  const binary = atob(padded);
  const buffer = new ArrayBuffer(binary.length);
  const bytes = new Uint8Array(buffer);

  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return buffer;
};

// export const flagsToPresence = (flags: number) => {
//   if (flags & AttestationFlags.userVerified)
//       return UserPresence.verified;
//   else if (flags & AttestationFlags.userPresent)
//       return UserPresence.present;
//   else
//       return UserPresence.none;
// }

export const getJWK = async (attestation: any) => {
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

// export const isLoggedIn = () => {
//   if (!localStorage) return
//   return localStorage.getItem('carmel.session')
// }

// export const isRegistered = () => {
//   if (!localStorage) return
//   return localStorage.getItem('carmel.account')
// }

// export const loadAccount = () => {
//   if (!localStorage) return
//   const account = localStorage.getItem('carmel.account')

//   if (!account) {
//     return
//   }

//   return JSON.parse(atob(account))
// }

// export const loadSession = () => {
//   if (!localStorage) return
//   const sessionToken = localStorage.getItem('carmel.token')

//   if (!sessionToken) {
//     return;
//   }

//   const { account, digest, sig } = JSON.parse(atob(sessionToken))
//   const { username, id, jwk } = JSON.parse(atob(account))

//   return {
//     username,
//     id,
//     jwk: JSON.parse(jwk),
//     digest,
//     sig
//   }
// }

export const getDigest = async (assertion: any) => {
  const { authenticatorData, clientDataJSON } = assertion.response;
  const clientDataHash = new Uint8Array(await crypto.subtle.digest('SHA-256', clientDataJSON));
  const signatureBase = Buffer.concat([new Uint8Array(authenticatorData), clientDataHash]);
  const hash = '0x' + Buffer.from(await crypto.subtle.digest('SHA-256', signatureBase)).toString('hex');
  const authData = '0x' + Buffer.from(authenticatorData).toString('hex');

  return {
    hash,
    authData,
  };
};

export const arrayBufferToHex = (view: Uint8Array) => {
  var result = '';
  var value;

  for (var i = 0; i < view.length; i++) {
    value = view[i].toString(16);
    result += value.length === 1 ? '0' + value : value;
  }

  return `0x${result}`;
};

export const getSignature = async (assertion: any) => {
  const der = new Serialize.SerialBuffer({ array: new Uint8Array(assertion.response.signature) });
  if (der.get() !== 0x30) throw new Error('Signature missing DER prefix');
  if (der.get() !== der.array.length - 2) throw new Error('Signature has bad length');
  if (der.get() !== 0x02) throw new Error('Signature has bad r marker');
  const _r = fixup(der.getUint8Array(der.get()));
  if (der.get() !== 0x02) throw new Error('Signature has bad s marker');
  const _s = fixup(der.getUint8Array(der.get()));

  let r = arrayBufferToHex(_r);
  let s = arrayBufferToHex(_s);

  return { r, s };
};

export const loginOptions = ({ attestationId, challenge }: any) => {
  return {
    rpId: 'localhost',
    challenge: Buffer.from(challenge),
    allowCredentials: [
      {
        id: base64URLStringToBuffer(attestationId),
        type: 'public-key',
        transports: ['internal'],
      },
    ],
  };
};

export const registerOptions = ({ user, challenge }: any) => {
  return {
    challenge: new ArrayBuffer(challenge),
    attestation: 'direct',
    rp: {
      name: 'Carmel',
      id: 'localhost',
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
};
