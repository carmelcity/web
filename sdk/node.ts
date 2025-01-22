import { identify } from '@libp2p/identify'
import { noise } from '@chainsafe/libp2p-noise'
import { webSockets } from '@libp2p/websockets'
import { yamux } from '@chainsafe/libp2p-yamux'
import * as filters from '@libp2p/websockets/filters'
import { circuitRelayTransport } from '@libp2p/circuit-relay-v2'
import { webRTC } from '@libp2p/webrtc'
import { gossipsub } from '@chainsafe/libp2p-gossipsub'
import { ping } from '@libp2p/ping'
import { dcutr } from '@libp2p/dcutr'
import type { Libp2pOptions } from 'libp2p'
import { IDBBlockstore } from 'blockstore-idb'
import { createLibp2p } from 'libp2p'
import { createHelia } from 'helia'
import debug from 'debug'
// import { session } from "@carmel/core"

const logger = debug('carmel')

const makeConfig = async (): Promise<any|undefined> => {  
  return {
    p2p: {
      start: true,
      addresses: {
          listen: [
            '/webrtc',
          ]
      },
      transports: [
          webSockets({
            filter: filters.all
          }),
          webRTC(),
          circuitRelayTransport({
            discoverRelays: 1
          })
      ],
      connectionEncrypters: [noise()],
      streamMuxers: [yamux()],
      connectionManager: {
        maxConnections: 10,
        inboundUpgradeTimeout: 10000
      },
        services: {
          ping: ping(),
          identify: identify(),
          pubsub: gossipsub(),
          dcutr: dcutr()
      }
    }
  }
}

export const start = async () => {
  // if (session.instance()) return 

  // const config = await makeConfig()
  // const libp2p: any = await createLibp2p(config.p2p)  
  // const instance = await createHelia({ libp2p })

  // await session.start(instance, "web", logger)
}

export default { start }