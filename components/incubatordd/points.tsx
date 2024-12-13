import { Orbitron, Readex_Pro } from 'next/font/google';
import React from 'react';
import { HexagonalCard } from '~/components/cards';

const readex_pro = Readex_Pro({ subsets: ['latin'] });
const orbitron = Orbitron({ subsets: ['latin'] });

const Hexagon = ({ icon, title }: any) => {
  return (
    <div
      className="border-primary border-[1px] relative flex flex-col justify-center items-center gap-3 p-10"
      style={{
        clipPath: 'polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)',
      }}>
      <img src={icon} width={40} height={40} className="max-h-[40px] max-w-[40px]" />
      <div className={`${readex_pro.className} font-semibold tex-[18px]`}>{title}</div>
      <div
        className="absolute top-1 left-1"
        style={{
          clipPath: 'polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)',
        }}></div>
    </div>
  );
};

const Points = () => {
  return (
    <div className="flex flex-col">
      <div
        className={`${readex_pro.className} font-light text-2xl`}
        style={{
          backgroundImage: 'linear-gradient(45deg, #00FFFF, #03664E)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
        Do meaningful work.
      </div>
      <div className={`${readex_pro.className} font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px]`}>
        Contribute. Collect. Earn.
      </div>
      {/* <div className="flex flex-col xl:flex-row justify-center items-center gap-2 xl:gap-5">
        <div className={`${orbitron.className} font-medium text-4xl md:text-5xl text-light-primary`}>
          {'['}mA-'rak-E{']'}
        </div>
        <div className={`${readex_pro.className} text-2xl font-light text-primary px-6 xl:px-0`}>
          {'('}adv.{')'} to do something with soul; to put something of yourself into your work
        </div>
      </div> */}
      <div className="flex justify-center items-center gap-3">
        {/* <HexagonalCard
          icon={{ src: '/images/icons/trophy.png', width: 40, height: 40 }}
          title="Quests"
          small
          titleStyles="normal-case"
        />
        <HexagonalCard
          icon={{ src: '/images/icons/swords.png', width: 40, height: 40 }}
          title="Challenges"
          small
          titleStyles="normal-case"
        /> */}
      </div>
    </div>
  );
};

export default Points;
