import { BaseCard } from './BaseCard';

export const CommunityCard = (props: any) => {
  return <BaseCard { ...props} intro={props.bio}/>
}