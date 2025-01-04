import { InfiniteScrollComponent } from '~/components/infiniteScroll';
import { QuestsPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CarmelCard } from './CarmelCard';
import { QuestsProps } from './props';

export const Collection = ({ data, isLoading }: QuestsProps) => {
  if (isLoading) {
    return <QuestsPlaceholder />;
  }

  return (
    <InfiniteScrollComponent
      renderItem={data.map((element: any, elementId: any) => (
        <CarmelCard
          key={elementId}
          {...element}
        />
      ))}
      elementsNumber={4}
      loader={<QuestsPlaceholder />}
    />
  );
};
