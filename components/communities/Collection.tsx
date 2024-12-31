import { CollectionPlaceholder } from './CollectionPlaceholder';
import { Card } from './Card';

export const Collection = ({ data, isLoading }: any) => {
  if (isLoading || !data) {
    return <CollectionPlaceholder />
  }

  const getItems = () => {
    return data.map((p: any, i: number) => <Card key={i} {...p}/>)
  }

  return <div className={`w-full flex flex-col gap-4 mb-4 mt-4`}>{
    getItems()
  }</div>

};
