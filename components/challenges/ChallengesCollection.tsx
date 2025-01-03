import { InfiniteScrollComponent } from '~/components/infiniteScroll';
import { ChallengesPlaceholder } from './ChallengesPlaceholder';
import { ChallengeCard } from './ChallengeCard';

export const ChallengesCollection = ({ data, isLoading }: any) => {
  if (isLoading) {
    return <ChallengesPlaceholder />;
  }

  return (
    <InfiniteScrollComponent
      renderItem={data.map((element: any, elementId: any) => (
        <ChallengeCard
          key={elementId}
          {...element}
        />
      ))}
      elementsNumber={4}
      loader={<ChallengesPlaceholder />}
    />
  );
};
