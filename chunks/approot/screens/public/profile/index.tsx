import React, { useEffect, useMemo, useState } from 'react';
import { Header } from '~/components/profile';
import Container from '~/containers/main';
import { Challenges } from '~/components/challenge';
import { useRouter } from 'next/router';
import { useCarmelChallenges, useCarmelQuests } from '~/sdk';
import { Quests } from '~/components/quests';
import { Tabs } from '~/components/tabs';
import TabPanel from '~/components/profile/tabs/tabpanel';
import { useCarmelAccount } from '~/sdk/hooks'; // REAL DATA
// import { useCarmelAccounts } from '~/sdk/hooks'; // FAKE DATA
import { InfiniteScrollComponent } from '~/components/infiniteScroll';
import { StoryGridItem } from '~/components/stories/story-grid/StoryGridItem';
import Badges from '~/components/profile/components/badges';
import Actions from '~/components/profile/components/actions';
import Stories from '../stories';
import { useCarmelStories } from '~/sdk/hooks/stories';
import { StoriesGrid } from '~/components/stories/story-grid';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import { Orbitron, Readex_Pro } from 'next/font/google';
import { PageNotFound } from '~/components/404';

const readex_pro = Readex_Pro({ subsets: ['latin'] });
const orbitron = Orbitron({ subsets: ['latin'] });

const DISPLAY_ITEMS = 9;

export default ({ user }: any) => {
  const router = useRouter();
  const username: any = router.query.id;
  const slug: any = router.query.slug;

  // const account: any = useCarmelAccount({ username, slug }); // TO BE RESTORED - system/accounts.ts
  const { data: accountsData = [], isLoading: isLoadingAccounts }: any = useCarmelAccount({ username, slug });
  const { data: storiesData, isLoading: isLoadingStories }: any = useCarmelStories();

  // const { data: questsData = [], isLoading: isLoadingQuests } = useCarmelQuests();
  // const { data: challengesData = [], isLoading: isLoadingChallenges } = useCarmelChallenges();
  // // const ready = !!account.data;
  // const ready = true;

  // const [tabs, setTabs] = useState<any[]>([]);

  // useEffect(() => {
  //   if (ready) {
  //     setTabs([
  //       {
  //         title: 'Posts',
  //         count: account.data?.user.stories.length,
  //         panel: (
  //           <TabPanel
  //             title="Posts"
  //             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tincidunt dui. Nullam nec neque diam. Ut a quam iaculis, lobortis magna ut, pretium neque."
  //             icon={'/images/icons/diamond.png'}>
  //             {/* <InfiniteScrollComponent
  //               // renderItem={account.data?.user.stories.map((post: any) => <StoryGridItem {...post} ready={true} />)}
  //               renderItem={}
  //               containerClasses="grid md:grid-cols-3 grid-cols-1 gap-2 "
  //               elementsNumber={3}
  //             /> */}<Stories />
  //           </TabPanel>
  //         ),
  //       },
  //       {
  //         title: 'Challenges',
  //         count: challengesData?.length ?? 0,
  //         panel: (
  //           <TabPanel
  //             title="Challenges"
  //             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tincidunt dui. Nullam nec neque diam. Ut a quam iaculis, lobortis magna ut, pretium neque."
  //             icon={'/images/icons/swords.png'}>
  //             <Challenges data={challengesData} isLoading={isLoadingChallenges} isComplete />
  //           </TabPanel>
  //         ),
  //       },
  //       {
  //         title: 'Quests',
  //         count: questsData.length ?? 0,
  //         panel: (
  //           <TabPanel
  //             title="Quests"
  //             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tincidunt dui. Nullam nec neque diam. Ut a quam iaculis, lobortis magna ut, pretium neque."
  //             icon={'/images/icons/trophy.png'}>
  //             <Quests data={questsData} isLoading={isLoadingQuests} />
  //           </TabPanel>
  //         ),
  //       },
  //       {
  //         title: 'Achievements',
  //         count: account.data?.system.achievements.length ?? 0,
  //         panel: (
  //           <TabPanel
  //             title="Badges"
  //             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tincidunt dui. Nullam nec neque diam. Ut a quam iaculis, lobortis magna ut, pretium neque."
  //             icon={'/images/icons/star-medal.png'}
  //             childrenClasses="flex flex-col justify-start items-start">
  //             <Actions
  //               actions={[
  //                 {
  //                   description: 'Skill',
  //                   onClick: () => {},
  //                   render: <Badges badges={account.data?.system.achievements} />,
  //                 },
  //                 {
  //                   description: 'Description',
  //                   onClick: () => {},
  //                   render: <Badges badges={account.data?.system.achievements} />,
  //                 },
  //               ]}
  //             />
  //           </TabPanel>
  //         ),
  //       },
  //       { title: 'Assets', count: account.data?.assets, disabled: true },
  //       { title: 'Friends', count: account.data?.friends, disabled: true },
  //     ]);
  //   }
  // }, [ready]);

  // if (loading) {
  //   //TODO show loading
  //   return <Container></Container>;
  // }

  const tabs = useMemo(
    () => [
      {
        description: 'All Articles',
        value: 'all',
      },
      {
        description: 'NFT Update',
        value: 'NFT Update',
      },
      {
        description: 'Crypto World',
        value: 'Crypto World',
      },
      {
        description: 'Collector Stories',
        value: 'Collector Stories',
      },
      {
        description: 'Tips & Tricks',
        value: 'Tips & Tricks',
      },
      {
        description: 'Community',
        value: 'Community',
      },
    ],
    [],
  );

  const [selectedTab, setSelectedTab] = useState('all');
  const [displayCounter, setDisplayCounter] = useState(0);

  const stories = useMemo(() => {
    return selectedTab !== 'all'
      ? storiesData?.filter(
          (post: any) => post.data.tags.includes(selectedTab) && post.username.toLowerCase() === username.toLowerCase(),
        )
      : storiesData?.filter((post: any) => post.username.toLowerCase() === username.toLowerCase());
  }, [selectedTab, storiesData]);

  console.log({
    accountsData,
  });

  if (!accountsData || !accountsData.username) {
    return <PageNotFound />;
  }

  return (
    <Container>
      <div className="bg-dark-indigo w-full flex justify-center m-auto">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <div className="w-full md:w-3/4 pt-16 lg:pt-20 min-h-screen max-w-[1920px] relative z-30 text-left">
          <Header data={accountsData} user={user} isLoading={isLoadingAccounts} />
          <div className="text-left mx-auto w-11/12 sm:w-full">
            {/* <Tabs tabs={tabs} ready={ready} /> */}
            <span className={`${orbitron.className} text-left mr-auto text-2xl tracking-widest uppercase`}>
              Stories
            </span>
            <Tabs
              isLoading={isLoadingStories}
              tabs={tabs}
              selectedTab={selectedTab}
              onClickTab={(value: string) => {
                setSelectedTab(value);
              }}
            />
            <StoriesGrid data={stories?.slice(0, 9 + displayCounter) || []} isLoading={isLoadingStories} />
            {stories?.length > DISPLAY_ITEMS && stories.length > displayCounter + DISPLAY_ITEMS && (
              <button
                className={`bg-[#00FFFF] text-black p-4 ${readex_pro.className}`}
                onClick={() => setDisplayCounter(prev => prev + 6)}>
                More Articles
              </button>
            )}
            {stories?.length > DISPLAY_ITEMS && stories.length < displayCounter + DISPLAY_ITEMS && (
              <button
                className={`bg-[#00FFFF] text-black p-4 ${readex_pro.className}`}
                onClick={() => setDisplayCounter(0)}>
                Collapse
              </button>
            )}
            {stories?.length === 0 && (
              <span
                className={`${readex_pro.className} flex text-white justify-center  w-full h-10 rounded bg-cyan bg-opacity-30 items-center`}>
                No articles yet.
              </span>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
