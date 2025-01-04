import { InfiniteScrollComponent } from '../infiniteScroll';
import { QuestsPlaceholder } from '../placeholders/ListPlaceholder';
import { QuestCard } from './QuestCard';
import { QuestsProps } from './props';

export const Quests = ({ data, isLoading }: QuestsProps) => {
  if (isLoading) {
    return <QuestsPlaceholder />;
  }

  return (
    <InfiniteScrollComponent
      renderItem={data.map((element: any, elementId: any) => (
        <QuestCard
          key={elementId}
          photo={element.photo}
          title={element.title}
          reward={element.reward}
          shortDescription={element.shortDescription}
          info={element.info}
          tagText={element.tagText}
          slug={element.id}
          userPhoto={element.userPhoto}
          username={element.username}
          property={element.property}
          propertyLogo={element.propertyLogo}
        />
      ))}
      elementsNumber={4}
      loader={<QuestsPlaceholder />}
    />
  );
};
