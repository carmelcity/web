import React from 'react';
import { InfiniteScrollComponent } from '~/components/infiniteScroll';
import { ChallengeCard } from './ChallengeCard';
import { ChallengesProps } from './props';
import { PlaceholderCard } from '../quests/questsDetails/Placeholder';

export const Challenges = ({ data, isLoading, isComplete }: ChallengesProps) => {
  if (isLoading) {
    return (
      <>
        <PlaceholderCard />
        <PlaceholderCard />
        <PlaceholderCard />
        <PlaceholderCard />
      </>
    );
  }

  return (
    <InfiniteScrollComponent
      renderItem={data?.map((challenge: any, index: any) => <ChallengeCard key={index} {...challenge} />)}
      elementsNumber={6}
      loader={<PlaceholderCard />}
    />
  );
};
