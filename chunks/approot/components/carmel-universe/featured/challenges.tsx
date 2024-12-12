import React, { useState } from 'react';
import { useCarmelChallenges } from '~/sdk/hooks/challenges';
import Featured from '.';
import { Readex_Pro } from 'next/font/google';
import { ChallengeCard } from '~/components/challenge/ChallengeCard';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const Challenges = () => {
  const { data: challenges } = useCarmelChallenges();
  const [displayCounter, setDisplayCounter] = useState(3);

  const getChallenges = () =>
    challenges
      ? challenges
          .slice(0, displayCounter)
          .map((challenge: any, index: number) => <ChallengeCard {...challenge} key={index} />)
      : [];

  return (
    <Featured
      title="FEATURED CHALLENGES"
      description="Web3 is the greatest opportunity for social entrepreneurs since the invention of the Internet. Leverage it. The Carmel Way.">
      <div className="flex flex-col w-full">{getChallenges()}</div>
      <button
        className={`${readex_pro.className} px-6 py-3 bg-primary text-black`}
        onClick={() => setDisplayCounter(prev => prev + 3)}>
        More Challenges
      </button>
    </Featured>
  );
};

export default Challenges;
