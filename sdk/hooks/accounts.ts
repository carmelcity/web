import useSWR from 'swr';
import { loadAccount } from '../system/accounts';

const accountFetcher = async ([username]: any, data: any = undefined) => {
  if (!username) return;

  const account = await loadAccount({ name: username });

  if (!account || !account.username) {
    return { missing: true };
  }

  return account;
};

export const useCarmelAccount = ({ username, slug }: any) => useSWR([username, slug], accountFetcher);
