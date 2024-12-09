import Container from '~/containers/main';
import { Readex_Pro } from 'next/font/google';
import { EyeIcon, ChatBubbleBottomCenterTextIcon, ClockIcon } from '@heroicons/react/24/outline';
import Details from '~/components/story-details/details';
import moment from 'moment';
import Newsletter from '~/components/story-details/newsletter';
import Popular from '~/components/story-details/popular';
import { StoriesGrid } from '~/components/stories/story-grid';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkBreaks from 'remark-breaks';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import { defaultPlaceholderStyles, primary } from '~/utils/constants';
import { useCarmelStories } from '~/sdk/hooks/stories';
import { useRouter } from 'next/router';
import { useCarmelStory } from '~/sdk/hooks/story';
import { useEffect, useState } from 'react';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const StoryDetails = () => {
  const {
    query: { slug },
  } = useRouter();
  const { data: story, fetcher }: any = useCarmelStory(slug ? slug.toString() : slug);
  const { data: storiesData }: any = useCarmelStories();
  const [ready, setReady] = useState(!!story);

  useEffect(() => {
    setReady(!!story);
  }, [story, slug]);

  const formatter = Intl.NumberFormat('en', { notation: 'compact' });

  const getDetails = () => [
    {
      icon: EyeIcon,
      description: formatter.format(story?.views ?? 0),
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      description: formatter.format(story?.comments ?? 0),
    },
    {
      icon: ClockIcon,
      description: moment(story?.date ?? moment()).format('MMMM D, YYYY'),
    },
  ];

  return (
    <Container containerClasses="pt-20">
      <div className="lg:w-1/2 md:w-2/3 w-11/12 flex flex-col gap-6 pt-10 mb-32">
        <h2 className={`text-5xl text-left ${readex_pro.className}`}>
          <ReactPlaceholder
            showLoadingAnimation
            ready={ready}
            type="rect"
            style={{ ...defaultPlaceholderStyles, width: '100%', height: 40 }}>
            {story?.data?.title}
          </ReactPlaceholder>
        </h2>
        <ReactPlaceholder
          showLoadingAnimation
          ready={ready}
          type="rect"
          style={{ width: '100%', height: 60, ...defaultPlaceholderStyles }}>
          <Details
            details={getDetails()}
            tags={story?.data?.tags}
            likesCount={formatter.format(story?.likes ?? 0)}
            onClickLike={() => {}}
          />
        </ReactPlaceholder>
        <ReactPlaceholder
          showLoadingAnimation
          ready={ready}
          type="rect"
          style={{ width: '100%', height: '30vh', ...defaultPlaceholderStyles }}>
          <img src={story?.imageLink ?? ''} className="w-full h-auto" />
        </ReactPlaceholder>
        <ReactPlaceholder showLoadingAnimation ready={ready} type="text" rows={10} color={primary}>
          <div className="content break-words text-left">
            <ReactMarkdown children={story?.data?.description} remarkPlugins={[remarkBreaks]} />
          </div>
        </ReactPlaceholder>
        {ready && (
          <>
            <Newsletter />
            <Popular likesCount={formatter.format(story?.likes ?? 0)} tags={story?.popularTags ?? []} />
            <h2 className={`text-left m-0 ${readex_pro.className}`}>Popular Posts</h2>
            <StoriesGrid data={storiesData?.slice(1, 5) ?? []} isLoading={ready} />
          </>
        )}
      </div>
    </Container>
  );
};

export default StoryDetails;
