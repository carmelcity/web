import React, { useState } from 'react';
import { Readex_Pro } from 'next/font/google';

import { useCarmelAchievements, useCarmelUserChallenges, useCarmelUserQuests } from '~/sdk';
import { MerakiPointsCard } from '~/components/dashboard/MerakiPointsCard';
import { Badges } from '~/components/dashboard/Badges';
import { Tabs } from '~/components/dashboard/Tabs/Tabs';
import { ChallengesIcon, QuestsIcon } from '~/components/icons';
import { Quests } from '~/components/quests';
import { Challenges } from '~/components/challenge';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

enum TABS {
  QUESTS = 'quests',
  CHALLENGES = 'challenges',
}

export const Achievements = () => {
  const { data: achievementsData = [], isLoading: isLoadingAchievements } = useCarmelAchievements();
  const { data: challengesData = [], isLoading: isLoadingChallenges } = useCarmelUserChallenges();
  const { data: questsData = [], isLoading: isLoadingQuests } = useCarmelUserQuests();
  const [selectedTab, setSelectedTab] = useState<TABS>(TABS.CHALLENGES);

  const handleTabChange = (selectedIndex: number) => {
    (selectedIndex === 1 && setSelectedTab(TABS.QUESTS)) || (selectedIndex === 0 && setSelectedTab(TABS.CHALLENGES));
  };

  const handleCreateChallenge = () => {
    // TO BE DEFINED
  };

  const handleCreateQuest = () => {
    // TO BE DEFINED
  };

  return (
    <>
      <div>
        <div className="block 2xl:flex flex-wrap m-4 lg:m-10">
          <MerakiPointsCard data={achievementsData} isLoading={isLoadingAchievements} />
          <Badges data={achievementsData} isLoading={isLoadingAchievements} />
        </div>
        <div className="m-4">
          <Tabs
            onTabChange={handleTabChange}
            questsNumber={questsData.length}
            challengesNumber={challengesData.length}
          />
          {selectedTab === TABS.CHALLENGES && (
            <div className="block text-left mt-10">
              <div className="flex items-center">
                <ChallengesIcon />
                <span className={`${readexPro.className} text-xl font-light ml-3`}>Challenges</span>
                <button
                  className={`${readexPro.className} lg:hidden lg:flex ml-auto font-light text-md text-cyan w-48 h-10 text-black px-4`}
                  onClick={handleCreateChallenge}>
                  + Create Challenge
                </button>
              </div>
              <div className="flex">
                <span className={`${readexPro.className} block mt-2 text-gray-400 lg:w-1/2 text-md font-light`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tincidunt dui. Nullam nec neque
                  diam. Ut a quam iaculis, lobortis magna ut, pretium neque.
                </span>
                <button
                  className={`${readexPro.className} hidden lg:flex items-center justify-center ml-auto font-medium text-lg w-48 h-10 bg-cyan text-black px-4`}
                  onClick={handleCreateChallenge}>
                  Create Challenge
                </button>
              </div>
              <div className="mt-5">
                <Challenges data={challengesData} isLoading={isLoadingChallenges} isComplete />
              </div>
            </div>
          )}
          {selectedTab === TABS.QUESTS && (
            <div className="block text-left mt-10">
              <div className="flex items-center">
                <QuestsIcon />
                <span className={`${readexPro.className} text-lg font-light ml-3`}>Quests</span>
                <button
                  className={`${readexPro.className} lg:hidden lg:flex ml-auto font-light text-md w-48 h-10 text-cyan text-black px-4`}
                  onClick={handleCreateQuest}>
                  + Create Quest
                </button>
              </div>
              <div className="flex">
                <span className={`${readexPro.className} block mt-2 text-gray-400 lg:w-1/2 text-md font-light`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tincidunt dui. Nullam nec neque
                  diam. Ut a quam iaculis, lobortis magna ut, pretium neque.
                </span>
                <button
                  className={`${readexPro.className} hidden lg:flex items-center justify-center ml-auto font-medium text-lg w-48 h-10 bg-cyan text-black px-4`}
                  onClick={handleCreateQuest}>
                  Create Quest
                </button>
              </div>
              <div className="mt-5">
                <Quests data={questsData} isLoading={isLoadingQuests} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
