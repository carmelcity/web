import useSWR from 'swr';
// import { appsData as mockData } from '~/components/channel/apps/mockData';
import { appData as mockData2 } from '~/components/channel/mockData';

// const appsFetcher = async ([slug]: any, data: any = undefined) => {
//   await new Promise(resolve => {
//     setTimeout(resolve, 1000);
//   });
//   return mockData;
// };

// export const useCarmelApps = () => useSWR(['/marketplace'], appsFetcher);

const appFetcher = async ([slug]: any, data: any = undefined) => {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
  return mockData2;
};

export const useCarmelApp = (appName: string) => useSWR(['marketplace', appName], appFetcher);
