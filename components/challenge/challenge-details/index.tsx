import React, { useEffect, useState } from 'react';
import Title from '~/components/title';
import { Orbitron } from 'next/font/google';
import HorizontalStepper from '~/components/horizontalStepper';
import { ChallengeDetailsCard } from './ChallengeDetailsCard';
import { Readex_Pro } from 'next/font/google';
import { useRouter } from 'next/router';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

const orbitron = Orbitron({
  subsets: ['latin'],
});

export const ChallengeDetails = (details: any) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = details.details[0].details;
  const challengeDetails = details.details[0].data;

  const handleNextChallenge = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleQuizz = () => {
    const url = {
      pathname: `${router.query.uri}/quizz`,
      query: { title: data.title },
    };
    router.push(url);
  };

  return (
    <div className="w-5/6 mb-32">
      <Title decription={data.title} moreClasses={`${orbitron.className} text-white uppercase text-sm sm:text-4xl`} />
      <div className="flex justify-center items-center m-10">
        <HorizontalStepper stepsNumber={challengeDetails.length || 0} currentIndex={currentIndex} />
      </div>
      <ChallengeDetailsCard
        photo={challengeDetails[currentIndex].image}
        title={challengeDetails[currentIndex].title}
        type={challengeDetails[currentIndex].type}
        author={challengeDetails[currentIndex].author}
        source={challengeDetails[currentIndex].source}
        link={challengeDetails[currentIndex].link}
      />
      {currentIndex < challengeDetails.length - 1 && (
        <button
          className={`${readexPro.className} bg-cyan text-black p-3 w-full lg:w-60`}
          onClick={handleNextChallenge}>
          Next
        </button>
      )}
      {currentIndex === challengeDetails.length - 1 && (
        <button className={`${readexPro.className} bg-cyan text-black p-3 w-full lg:w-60`} onClick={handleQuizz}>
          Take the Quizz
        </button>
      )}
    </div>
  );
};
