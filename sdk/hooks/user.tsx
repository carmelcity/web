// import useSWR from 'swr';
// import { userData as mockData } from '~/components/dashboard/mockData';

// const userFetcher = async ([slug]: any, data: any = undefined) => {
//   await new Promise(resolve => {
//     setTimeout(resolve, 1000);
//   });
//   return mockData;
// };

// export const useCarmelUser = () => useSWR(['/user'], userFetcher);

import { useEffect, useState } from 'react';
import { auth, data } from '@fitroot/sdk';

export const useCarmelUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [account, setAccount] = useState<any>('');
  const [error, setError] = useState('');
  const [dataState, setDataState] = useState<any>('');
  const [pools, setPools] = useState<any>([]);

  const refresh = async () => {
    const _loggedIn = auth.hasAccount();

    if (!_loggedIn) {
      setIsLoading(false);
      return;
    }

    const _account = auth.getAccount();
    const res = await data.sync({ network: 'polygon', tokens: ['CARMEL', 'WETH'] });
    const _pools = await data.fetchPools({ network: 'polygon', pairs: ['CARMEL/WETH', 'WETH/DAI'] });

    setPools(_pools);
    setAccount(_account);
    setDataState(res);
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      await refresh();
    })();
  }, []);

  return {
    account,
    isLoading,
    error,
    dataState,
    pools,
    auth,
    data,
  };
};
