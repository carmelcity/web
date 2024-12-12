import moment from 'moment';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from 'react-twitter-embed';

const tags = ['hello', 'main', 'dads', 'test'];
const tweets = [{}, {}, {}];
const keywords = ['one', 'two', 'three', 'four'];

const Author = ({}: any) => {
  return (
    <div className="flex flex-row mb-2">
      <div className="avatar">
        <div className="w-8 mr-4 mask mask-hexagon bg-primary border border-primary-color">
          <img src={'https://picsum.photos/300/300'} className="mask w-8 mask-hexagon" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-sm text-primary text-left flex flex-row items-center justify-left">author</div>
        <div className="text-xs text-left">{moment.unix(Date.now() / 1000).format('MMMM Do, YYYY')}</div>
      </div>
    </div>
  );
};

const Tweet = (t: any) => {
  return (
    <div className="flex flex-col items-center align-center w-full mb-4 transform transition duration-500 hover:scale-105 cursor-pointer">
      <TwitterTweetEmbed
        options={{ theme: 'dark', chrome: 'noheader, nofooter, noborders, transparent, noscrollbar' }}
        tweetId={'933354946111705097'}
      />
    </div>
  );
};

const Tweets = ({}: any) => {
  return (
    <div className="flex lg:flex-row flex-col container justify-start items-left bg-white border border-primary-color mb-4 h-auto gap-4">
      {tweets.map((t: any, index: number) => (
        <Tweet key={index} {...t} />
      ))}
    </div>
  );
};

export default Tweets;
