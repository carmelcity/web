import Image from 'next/image';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { BookmarkIcon, MinusCircleIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import image from '~/images/user-64-12.jpg';

// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { useRouter } from 'next/router';
import { Tags } from '../tags';

const icons = [
  {
    id: 1,
    icon: BookmarkIcon,
    onClick: () => {},
  },
  {
    id: 2,
    icon: MinusCircleIcon,
    onClick: () => {},
  },
  {
    id: 3,
    icon: EllipsisHorizontalIcon,
    onClick: () => {},
  },
];

const Icons = ({ icons }: any) => {
  return (
    <div className="flex gap-3 justify-center align-center flex-wrap">
      {icons.map((icon: any) => (
        <icon.icon className="text-white" onClick={icon.onClick} width={28} height={28} key={icon.id} />
      ))}
    </div>
  );
};

const Author = ({ author, category, date }: any) => {
  return (
    <div className="flex flex-row items-center align-middle">
      <a href={`/${author}`} className="text-current">
        <UserCircleIcon width={30} height={30} />
      </a>
      &nbsp; &nbsp;
      <a href={`/${author}`} className="h-auto">
        {author}
      </a>
      &nbsp; &middot; &nbsp; {date.format('MMM DD')}
    </div>
  );
};

const Post = ({ category, slug, title, author, cover, body, date, tags }: any) => {
  const router = useRouter();

  const goToPost = () => router.push(`/${category}/${slug}`);

  return (
    <div
      onClick={goToPost}
      className="flex p-4 flex-col lg:max-w-screen-md w-full gap-2 bg-primary-color bg-opacity-10 mb-8 border border-primary-color transform transition duration-500 hover:scale-105 hover:opacity-100 opacity-70 cursor-pointer">
      <Author author={author} category={category} date={date} />

      <div className="flex flex-row">
        <div className="flex-1 flex flex-col justify-start pb-3 ">
          <h1 className="line-clamp-2 inline-block text-left text-[20px] w-full">{title}</h1>
          <span className="inline-block text-sm mt-2 text-left max-h-[60px] line-clamp-3">{body}</span>
          <div className="flex justify-between items-center mt-2 pt-3 border-t border-primary-color">
            <Tags tags={tags} />
            <Icons icons={icons} />
          </div>
        </div>
        <Image
          className="sm:mx-10 object-cover mx-2 max-h-[100px] max-w-[100px]"
          // src={`https://fitroot.dev/ipfs/${cover.hash}`}
          src={image}
          alt="No image"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

const Posts = ({ posts }: any) => {
  return (
    <div className="flex mt-20 flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-start items-center w-full px-4">
        {posts.map((post: any, i: number) => (
          <Post key={i} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
