import axios from 'axios';
import { ethers } from 'ethers';
import debug from 'debug';
import { multiaddr } from '@multiformats/multiaddr';
import { type Libp2p } from '@libp2p/interface-libp2p';
import { type PeerId } from '@libp2p/interface-peer-id';
import { toString as uint8ArrayToString } from 'uint8arrays/to-string';
import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string';
import Web3 from 'web3';
import NetworkABI from './abi/CarmelNetwork.json';
import AccountsABI from './abi/CarmelAccounts.json';
import * as config from '../config';
import * as functions from '../functions';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import { unified } from 'unified';

export const b32enc = (s: string) => ethers.encodeBytes32String(s);
export const b32dec = (s: string) => ethers.decodeBytes32String(s);
export const bytes32ToHash = (hash: any) => b32dec(hash[0]) + b32dec(hash[1]);
export const hashToBytes32 = (hash: string) => [b32enc(hash.substring(0, 31)), b32enc(hash.substring(31))];

const MAINNET_HTTPS = process.env.NEXT_PUBLIC_MAINNET_HTTPS;
const MAINNET_WSS = process.env.NEXT_PUBLIC_MAINNET_WSS;

const LOG = debug('carmel:network');

export let _web3: Web3;
export let _netCtr: any;
export let _acctCtr: any;

let _relays: any;
let _node: any;
let _peerId: string;
let _address: string;

export const hashLink = (hash: string) => {
  return `https://ipfs.carmel.io/ipfs/${hash}`;
};

export const getJsonFile = async (hash: string) => {
  try {
    const raw: any = await axios.get(hashLink(hash), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return raw.data;
  } catch (e) {
    return {};
  }
};

export const getMarkdownFile = async (hash: string) => {
  const raw: any = await axios.get(hashLink(hash));

  const md: any = await unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkFrontmatter, ['yaml', 'toml'])
    .process(raw);

  if (!md) return;

  return md.data;
};

const _getRelays = async () => {
  if (!_web3) return;

  LOG('fetching relays...');

  const all = await _netCtr.methods.getNodes(0).call();

  LOG(`found ${all.length} relays`);

  return all.map((n: any) => ({
    id: parseInt(n[0]),
    hash: bytes32ToHash([n[2], n[3]]),
    port: parseInt(n[4]),
    domain: n[7],
  }));
};

const _handleMessages = async (node: Libp2p) => {
  const services: any = node.services;
  services.pubsub.addEventListener('message', async (evt: any) => {
    try {
      const { topic, data } = evt.detail;
      LOG('received message:', topic);

      const message = JSON.parse(uint8ArrayToString(data));
      // await _executeFunction(topic, message)
    } catch {}
  });
};

const _onDisconnectFromPeer = async (peer: PeerId) => {
  const peerId = peer.toString();
  const now = `${Date.now()}`;

  LOG('disconnected from peer:', peerId);
};

const _onConnectToPeer = async (peer: PeerId) => {
  const peerId = peer.toString();
  const now = `${Date.now()}`;

  LOG('connected to peer:', peerId);
};

export const supportedEvents = () => {
  let all: any = {};

  Object.keys(functions).map((e: string) => {
    all[e] = { id: e, topic: `carmel:${e}` };
  });

  return all;
};

const _startListening = async (node: Libp2p) => {
  node.addEventListener('peer:connect', async (evt: any) => {
    const peer: PeerId = evt.detail;
    await _onConnectToPeer(peer);
  });

  node.addEventListener('peer:disconnect', async (evt: any) => {
    const peer: PeerId = evt.detail;
    await _onDisconnectFromPeer(peer);
  });

  const services: any = node.services;
  const events = supportedEvents();

  await Promise.all(
    Object.keys(events).map((e: string) => {
      LOG(`subscribing to ${events[e].topic} events`);
      return services.pubsub.subscribe(events[e].topic);
    }),
  );

  node.addEventListener('self:peer:update', async evt => {
    _address = node.getMultiaddrs()[0].toString();

    LOG(`listening on ${_address}`);
  });
};

const _disconnect = async (node: Libp2p) => {
  LOG('disconnecting from the Carmel Network ... ');

  node.removeEventListener('peer:connect');
};

const _connect = async (node: Libp2p) => {
  LOG('connecting to the Carmel Network ... ');

  await _handleMessages(node);
  await _startListening(node);
};

export const initializeNetwork = async () => {
  //   if (_web3) return
  //   _web3 = new Web3(MAINNET_HTTPS)
  //   _netCtr = new _web3.eth.Contract(NetworkABI, config.SYSTEM.NETWORK_ADDRESS)
  //   _acctCtr = new _web3.eth.Contract(AccountsABI, config.SYSTEM.ACCOUNTS_ADDRESS)
  //   _relays = await _getRelays()
  //   _node = await config.createPeerNode(_relays)
  //   try {
  //     await _node.start()
  //     _peerId = _node.peerId
  //     LOG(`peer id: ${_peerId}`)
  //     await _connect(_node)
  // } catch {
  // }
};

export const sendEvent = async (topic: string, message: any) => {
  if (!_node) return;

  const msg = JSON.stringify({
    ...message,
    address: _address,
    peerId: _peerId,
  });

  const services: any = _node.services;

  services.pubsub.publish(topic, uint8ArrayFromString(msg)).catch((err: any) => {
    LOG('could not sent message:', topic, '-> error:', err);
  });

  LOG(`sent [${topic}] message`);
};

export const state: any = () => ({
  relays: _relays,
});
