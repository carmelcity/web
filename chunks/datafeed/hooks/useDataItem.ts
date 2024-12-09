'use client';

import useSWR from 'swr';
import { useEffect, useState } from 'react';

const URL = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/carmel`;

/**
 *
 * @returns
 */
const postFetch = async (props: string[]) => {
  const isNumber = !isNaN(parseInt(`${props[1]}`));

  if (isNumber) {
    return;
  }

  return fetch(`${URL}/${props[0]}/${props[1]}`, { method: 'POST', body: JSON.stringify({}) }).then(res => res.json());
};

/**
 *
 * @returns
 */
const useDataItem = ({ base, id }: any) => {
  const [isReady, setIsReady] = useState(false);
  const [details, setDetails] = useState<any>(undefined);

  const { data, error, mutate } = useSWR([base, id], postFetch);

  const refresh = async () => {
    await mutate();
  };

  useEffect(() => {
    if (!data || !data.data) return;
    setDetails(data.data);

    setIsReady(true);
  }, [data]);

  return { details, isReady, refresh };
};

export default useDataItem;
