import useSWR from 'swr';
import { storiesData as mockData } from '~/components/incubator/mockData';

const fetcher = async () => {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
  return mockData;
};

export const useIncubator = () => useSWR(['/incubator'], fetcher);
