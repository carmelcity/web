import useSWR from 'swr';
import { _acctCtr, b32dec, hashLink, b32enc, getJsonFile } from './core';

export const loadAccount = async ({ name }: any) => {
  const acct = await _acctCtr.methods.accounts(b32enc(name)).call();

  const id = acct.id;
  const username = b32dec(acct.username);
  const group = b32dec(acct.group);
  const sysMeta = b32dec(acct.sysmeta0) + b32dec(acct.sysmeta1);
  const userMeta = b32dec(acct.umeta0) + b32dec(acct.umeta1);
  const totalAddresses = acct.total_addresses;
  const totalKeys = acct.total_keys;

  const system = await getJsonFile(sysMeta);
  const user = await getJsonFile(userMeta);

  const account = {
    id,
    username,
    group,
    totalAddresses,
    totalKeys,
    user: {
      ...user,
      avatarImage: hashLink(user.avatarHash),
      bannerImage: hashLink(user.bannerHash),
    },
    system,
  };

  console.log(user);

  return account;
};
