import useSWR from 'swr';
import { assetsData as mockData } from '~/components/store/mockData';

const assetsFetcher = async ([slug]: any, data: any = undefined) => {
  await new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
  return mockData;
};

export const useCarmelAssets = () => useSWR(['/assets'], assetsFetcher);
