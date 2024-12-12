import type { FC } from 'react';
import Link from 'next/link';
import Details from '~/components/stories/details';
import ReactPlaceholder from 'react-placeholder';
import { defaultPlaceholderStyles } from '~/utils/constants';

const StoryItem: FC = ({ ready, imageLink, slug, data, date, moreClasses = '', large }: any) => {
  return (
    // <ReactPlaceholder
    //   showLoadingAnimation
    //   ready={ready}
    //   type="rect"
    //   className="flex basis-3/6 h-[100vw] animate-pulse"
    //   style={{ ...defaultPlaceholderStyles }}>

    // </ReactPlaceholder>
    <Link
      className={`flex basis-3/6 flex-${large ? 'col' : 'row'} bg-[#00BCD414] ${moreClasses}`}
      href={`/stories/${slug}/`}>
      <img src={imageLink} className={large ? 'w-full h-auto' : 'object-contain w-1/3 h-auto'} alt="no image found" />
      <Details {...data} date={date} large={large} />
    </Link>
  );
};

export default StoryItem;
