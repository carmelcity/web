import useSWR from 'swr';
import { challengeData as mockData } from '~/components/challenge/mockData';
import { challengesInProgress as mockData2 } from '~/components/incubator/featured/mockData';

const challengesFetcher = async ([slug]: any, data: any = undefined) => {
  await new Promise(resolve => {
    setTimeout(resolve, 1500);
  });

  return mockData;
};

const userChallengesFetcher = async ([slug]: any, data: any = undefined) => {
  await new Promise(resolve => {
    setTimeout(resolve, 1500);
  });

  return mockData2;
};

export const useCarmelChallenges = () => useSWR(['/challenges'], challengesFetcher);
export const useCarmelUserChallenges = () => useSWR(['/user-challenges'], userChallengesFetcher);
