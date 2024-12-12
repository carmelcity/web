import React, { useState } from 'react';
import Featured from '.';
import { Readex_Pro } from 'next/font/google';
import { useCarmelQuests } from '~/sdk';
import { QuestCard } from '~/components/quests/QuestCard';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const Quests = () => {
  const { data: quests } = useCarmelQuests();
  const [displayCounter, setDisplayCounter] = useState(3);

  const getQuests = () =>
    quests
      ? quests
          .slice(0, displayCounter)
          .map((quest: any, index: number) => (
            <QuestCard {...quest} slug={quest.id} key={index} containerClasses="w-full" />
          ))
      : [];

  return (
    <Featured
      title="FEATURED QUESTS"
      description="Web3 is the greatest opportunity for social entrepreneurs since the invention of the Internet. Leverage it. The Carmel Way.">
      <div className="flex flex-col w-full">{getQuests()}</div>
      <button
        className={`${readex_pro.className} px-6 py-3 bg-primary text-black`}
        onClick={() => setDisplayCounter(prev => prev + 3)}>
        More Quests
      </button>
    </Featured>
  );
};

export default Quests;
