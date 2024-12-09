import React from 'react';
import { useCarmelStories } from '~/sdk/hooks/stories';
import Post from './post';

const LatestBlogs = () => {
  const { data: posts = [] }: any = useCarmelStories();

  return (
    <div className="flex flex-col gap-4 mt-10 relative">
      <div className="w-full tracking-wider md:scale-x-125 font-medium font-rocGrotesk text-[42px] text-primary mt-10 mb-6 md:mt-20 z-20">
        Featured Articles
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
        {posts.slice(0, 4).map((post: any, index: number) => (
          <Post key={index} {...post} ready={!!posts.length} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
