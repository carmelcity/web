import React, { useState } from 'react';
import { useCarmelStories } from '~/sdk/hooks/stories';
import Featured from '.';
import { StoryGridItem } from '~/components/stories/story-grid/StoryGridItem';
import { Readex_Pro } from 'next/font/google';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const Stories = () => {
  const { data: storiesData }: any = useCarmelStories();
  const [displayCounter, setDisplayCounter] = useState(3);
  const ready = !!storiesData;

  const getStories = () =>
    storiesData
      ? storiesData
          .slice(0, displayCounter)
          .map((post: any, index: number) => <StoryGridItem ready={ready} {...post} {...post.data} key={index} />)
      : [];

  return (
    <Featured
      title="FEATURED STORIES"
      description="Web3 is the greatest opportunity for social entrepreneurs since the invention of the Internet. Leverage it. The Carmel Way.">
      <div className="grid lg:grid-cols-3 gap-4">{getStories()}</div>
      <button
        className={`${readex_pro.className} px-6 py-3 bg-primary text-black`}
        onClick={() => setDisplayCounter(prev => prev + 3)}>
        More Stories
      </button>
    </Featured>
  );
};

export default Stories;
