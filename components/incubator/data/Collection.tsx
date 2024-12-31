import { InfiniteScrollComponent } from '~/components/infiniteScroll';
import { QuestsPlaceholder } from '~/components/placeholders/Quests';
import { MainCard } from './MainCard';
import { SecondaryCard } from './SecondaryCard';

export const Collection = ({ data, isLoading, filter }: any) => {
  if (isLoading || !data) {
    return <QuestsPlaceholder />;
  }

  const getItems = () => {
    return data.filter((post: any) => post.type === filter).map((p: any, i: number) => {
      if (p.type === "community" || p.type === "project") {
        return <MainCard key={i} {...p}/>
      }
      return <SecondaryCard key={i} {...p}/>
    })
  }

  return <div className={`w-full flex flex-col gap-4 mb-4 mt-4`}>{
    getItems()
  }</div>

};
