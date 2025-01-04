import { BaseCard } from './BaseCard';

export const ProjectCard = (props: any) => {
  return <BaseCard { ...props} intro={props.bio}/>
}