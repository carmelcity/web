import { floodsub } from '@libp2p/floodsub';
import { createLibp2p as create } from 'libp2p';
import { noise } from '@chainsafe/libp2p-noise';
import { yamux } from '@chainsafe/libp2p-yamux';
import { bootstrap } from '@libp2p/bootstrap';
import { mplex } from '@libp2p/mplex';
import { webRTC, webRTCDirect } from '@libp2p/webrtc';
import { identifyService } from 'libp2p/identify';
import { webSockets } from '@libp2p/websockets';
import { circuitRelayTransport } from 'libp2p/circuit-relay';
import * as filters from '@libp2p/websockets/filters';

export const createPeerNode = async (relays: any) => {
  const relayAddresses = relays.map((r: any) => `/dns4/${r.domain}/tcp/${r.port}/wss/p2p/${r.hash}`);

  const opts: any = {
    addresses: {
      listen: ['/webrtc'],
    },
    transports: [
      webSockets({
        filter: filters.all,
      }),
      webRTC(),
      circuitRelayTransport({
        discoverRelays: 1,
      }),
    ],
    peerDiscovery: [
      bootstrap({
        list: relayAddresses,
      }),
    ],
    connectionEncryption: [noise()],
    streamMuxers: [mplex(), yamux()],
    services: {
      pubsub: floodsub(),
      identify: identifyService(),
    },
  };

  const libp2p: any = await create(opts);

  return libp2p;
};
