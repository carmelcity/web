import { useCarmelFeaturedCourses } from '~/sdk';
import { TitleWithSubtitle } from '~/components/titleWithSubtitle';
import { Courses } from './Courses';

export const FeaturedCourses = ({ text }: any) => {
  const { data, isLoading } = useCarmelFeaturedCourses();

  return (
    <div className="flex flex-col items-center h-auto justify-center p-4 lg:p-8 gap-4 w-full bg-no-repeat bg-top bg-fill mb-32">
      <TitleWithSubtitle whiteTitle="Featured " primaryTitle="Courses" subtitle="" />
      <div className="2xl:w-5/6">
        <Courses data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};
