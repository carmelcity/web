import useSWR from 'swr';
import { storiesData as mockData } from '~/components/stories/mockData';

const storiesFetcher = async () => {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
  return mockData;
};

export const useCarmelStories = () => useSWR(['/stories'], storiesFetcher);
