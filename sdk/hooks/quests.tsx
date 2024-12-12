import useSWR from 'swr';
import { questsData as mockData } from '~/components/quests/mockData';
import { questsInProgress as mockData2 } from '~/components/quests/more/mockData';

const questsFetcher = async ([slug]: any, data: any = undefined) => {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

  return mockData;
};

const userQuestsFetcher = async ([slug]: any, data: any = undefined) => {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

  return mockData2;
};

export const useCarmelQuests = () => useSWR(['/quests'], questsFetcher);
export const useCarmelUserQuests = () => useSWR(['/user-quests'], userQuestsFetcher);
