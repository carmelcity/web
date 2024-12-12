import useSWR from 'swr';
import { storiesData as mockData } from '~/components/carmels/mockData';

const fetcher = async () => {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
  return mockData;
};

export const useCarmels = () => useSWR(['/carmels'], fetcher);
