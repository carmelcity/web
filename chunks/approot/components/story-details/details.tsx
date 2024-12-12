import React, { FC } from 'react';
import { ShareIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Tags } from '../tags';

export interface DetailProps {
  icon?: any;
  description?: string;
  onClick?: () => void;
  containerClasses?: string;
  iconClasses?: string;
  descriptionClasses?: string;
}

const Detail: FC<DetailProps> = ({ icon, description, onClick, containerClasses, iconClasses, descriptionClasses }) => {
  const Icon = icon;
  return (
    <p
      className={`flex justify-start items-stretch gap-2 m-0 align-middle ${containerClasses ?? ''}`}
      onClick={onClick}>
      {icon && (
        <span className={`w-auto ${iconClasses ?? ''}`}>
          <Icon width={28} height={28} />
        </span>
      )}
      {description && <span className={`flex items-center ${descriptionClasses ?? ''}`}>{description}</span>}
    </p>
  );
};

export const Action: FC<DetailProps> = (props: DetailProps) => {
  return (
    <Detail
      {...props}
      containerClasses="bg-[#00FFFF1F] p-1 px-3 self-stretch"
      iconClasses="text-primary"
      descriptionClasses="text-primary"
    />
  );
};

const Details = ({ details, tags, likesCount, onClickLike, onClickShare }: any) => {
  const getDetails = () => details.map((detail: DetailProps, index: number) => <Detail {...detail} key={index} />);

  return (
    <div
      className="
			flex justify-between gap-4 flex-col items-center py-5 border-y border-[#00FFFF66]
			lg:flex-row lg:gap-0">
      <div className="flex gap-4">{getDetails()}</div>
      <div className="flex items-center gap-2">
        <Tags tags={tags} />
        <Action description={likesCount} icon={HeartIcon} onClick={onClickLike} />
        <Action icon={ShareIcon} onClick={onClickShare} />
      </div>
    </div>
  );
};

export default Details;
