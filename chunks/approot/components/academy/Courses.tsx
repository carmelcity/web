import { InfiniteScrollComponent } from '../infiniteScroll';
import { CoursesPlaceholder } from '../placeholders/Courses';
import { CourseCard } from './CourseCard';

export const Courses = ({ data, isLoading }: any) => {
  if (isLoading) {
    return <CoursesPlaceholder />;
  }

  return (
    <InfiniteScrollComponent
      renderItem={data.map((element: any, elementId: any) => (
        <CourseCard
          key={elementId}
          photo={element.photo}
          title={element.title}
          community={element.community}
          reward={element.reward}
          shortDescription={element.shortDescription}
          info={element.info}
          level={element.level}
          tagText={element.tagText}
          slug={element.id}
          userPhoto={element.userPhoto}
          username={element.username}
          property={element.property}
          propertyLogo={element.propertyLogo}
        />
      ))}
      elementsNumber={4}
      loader={<CoursesPlaceholder />}
    />
  );
};
