import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Readex_Pro } from 'next/font/google';
import Container from '~/containers/main';
import Link from 'next/link';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

const Header = () => {
  return (
    <div className="flex flex-col justify-center gap-1 w-full">
      <p className={`${readexPro.className} font-light text-primary font-light`}>TAGLINE HERE</p>
      <p className={`${readexPro.className} text-[56px] font-bold tracking-tight text-white sm:text-3xl`}>
        Our pricing
      </p>
      <p className={`${readexPro.className} mx-auto max-w-2xl text-center font-light text-xl`}>
        Web3 is the greatest opportunity for social entrepreneurs since the invention of the Internet. Leverage it. The
        Carmel Way.
      </p>
      <p className={`${readexPro.className}`}>
        Do you need custom pricing?{' '}
        <Link href="/" className="text-primary">
          Click here
        </Link>
      </p>
    </div>
  );
};

const BestDeal = () => {
  return (
    <div
      className={`${readexPro.className} bg-gradient-to-r from-[#00FFF0] to-[#ADFFAB] text-[#022A27] font-normal text-base absolute top-0 right-0 py-2 px-4`}>
      BEST DEAL
    </div>
  );
};

export const Pricing = () => {
  const wrapElementsInSpan = (array: any) => {
    return array.map((item: any, index: number) => {
      if (item.bold === '') {
        return (
          <span key={item.id + index.toString()} className={`${readexPro.className} font-light text-left`}>
            {item.text}
          </span>
        );
      }
      const parts = item.text.split(item.bold); // Split the text based on the word to be bolded

      return (
        <span key={index} className={`${readexPro.className} font-light text-left`}>
          {parts.map((part: any, i: number) => (
            <React.Fragment key={item.id + i.toString()}>
              {i > 0 && <span className={`${readexPro.className} font-bold text-cyan`}>{item.bold}</span>}{' '}
              {/* Bold the specific word */}
              {part}
            </React.Fragment>
          ))}
        </span>
      );
    });
  };

  const cardsData = [
    {
      price: '$ Pricing option 1',
      title: 'Standard',
      id: 'starter-card',
      tab1: 'Development',
      tab2: 'Marketing',
      tab3: 'Sales',
      service1: wrapElementsInSpan([
        { text: 'Custom graphics, illustrations and code', bold: '' },
        { text: 'Limited revisions', bold: 'Limited' },
        { text: '2-3 day turnaround', bold: '2-3 day' },
      ]),
      features1: wrapElementsInSpan([
        { text: 'Real time app preview', bold: '' },
        { text: 'Access to standard templates and components', bold: 'standard' },
        { text: 'Standard hosting', bold: 'Standard' },
      ]),
      service2: wrapElementsInSpan([
        { text: 'Unlimited professional copy', bold: '' },
        { text: 'Standard audience engagement strategies', bold: 'Standard' },
        { text: 'Standard custom marketing campaigns', bold: 'Standard' },
      ]),
      features2: wrapElementsInSpan([
        { text: 'Early adopters waiting list', bold: '' },
        { text: 'Standard predictive writing prompts', bold: 'Standard' },
        { text: 'Standard intelligent user analytics', bold: 'Standard' },
      ]),
      service3: wrapElementsInSpan([
        { text: 'Sales pipeline growth', bold: '' },
        { text: 'Standard sales funnel optimization', bold: 'Standard' },
        { text: 'Standard customer retention strategies', bold: 'Standard' },
      ]),
      features3: wrapElementsInSpan([
        { text: 'In-app purchases', bold: '' },
        { text: 'Standard customer relationship dashboard', bold: 'Standard' },
        { text: 'Standard digital collectables', bold: 'Standard' },
      ]),
    },
    {
      price: '$ Pricing option 2',
      title: 'Pro',
      id: 'pro-card',
      tab1: 'Development',
      tab2: 'Marketing',
      tab3: 'Sales',
      service1: wrapElementsInSpan([
        { text: 'Custom graphics, illustrations and code', bold: '' },
        { text: 'Unlimited revisions', bold: 'Unlimited' },
        { text: '1-2 days turnaround', bold: '1-2 days' },
      ]),
      features1: wrapElementsInSpan([
        { text: 'Real time app preview', bold: '' },
        { text: 'Access to Pro templates and components', bold: 'Pro' },
        { text: 'Pro hosting', bold: 'Pro' },
      ]),
      service2: wrapElementsInSpan([
        { text: 'Unlimited professional copy', bold: '' },
        { text: 'Pro audience engagement strategies', bold: 'Pro' },
        { text: 'Pro custom marketing campaigns', bold: 'Pro' },
      ]),
      features2: wrapElementsInSpan([
        { text: 'Early adopters waiting list', bold: '' },
        { text: 'Pro predictive writing prompts', bold: 'Pro' },
        { text: 'Pro intelligent user analytics', bold: 'Pro' },
      ]),
      service3: wrapElementsInSpan([
        { text: 'Sales pipeline growth', bold: '' },
        { text: 'Pro sales funnel optimization', bold: 'Pro' },
        { text: 'Pro customer retention strategies', bold: 'Pro' },
      ]),
      features3: wrapElementsInSpan([
        { text: 'In-app purchases', bold: '' },
        { text: 'Pro customer relationship dashboard', bold: 'Pro' },
        { text: 'Pro digital collectables', bold: 'Pro' },
      ]),
      bestDeal: true,
    },
    {
      price: '$ Pricing option 3',
      title: 'Ultimate',
      id: 'ultimate-card',
      tab1: 'Development',
      tab2: 'Marketing',
      tab3: 'Sales',
      service1: wrapElementsInSpan([
        { text: 'Custom graphics, illustrations and code', bold: '' },
        { text: 'Unlimited revisions', bold: 'Unlimited' },
        { text: 'Same day updates', bold: 'Same day' },
      ]),
      features1: wrapElementsInSpan([
        { text: 'Real time app preview', bold: '' },
        { text: 'Access to Ultimate templates and components', bold: 'Ultimate' },
        { text: 'Ultimate hosting', bold: 'Ultimate' },
      ]),
      service2: wrapElementsInSpan([
        { text: 'Unlimited professional copy', bold: '' },
        { text: 'Ultimate audience engagement strategies', bold: 'Ultimate' },
        { text: 'Ultimate custom marketing campaigns', bold: 'Ultimate' },
      ]),
      features2: wrapElementsInSpan([
        { text: 'Early adopters waiting list', bold: '' },
        { text: 'Ultimate predictive writing prompts', bold: 'Ultimate' },
        { text: 'Ultimate intelligent user analytics', bold: 'Ultimate' },
      ]),
      service3: wrapElementsInSpan([
        { text: 'Sales pipeline growth', bold: '' },
        { text: 'Ultimate sales funnel optimization', bold: 'Ultimate' },
        { text: 'Ultimate customer retention strategies', bold: 'Ultimate' },
      ]),
      features3: wrapElementsInSpan([
        { text: 'In-app purchases', bold: '' },
        { text: 'Ultimate customer relationship dashboard', bold: 'Ultimate' },
        { text: 'Ultimate digital collectables', bold: 'Ultimate' },
      ]),
    },
  ];
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const handleCardHover = (id: any) => {
    setHoveredCardId(id);
  };

  return (
    <Container containerClasses="min-h-[calc(100vh-350px)]">
      <div className="block m-auto bg-transparent bg-opacity-20 mb-20 w-full h-full pt-28">
        <Header />
        <div className="flex justify-center items-center flex-wrap flex-1 max-w-full h-auto">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={
                'w-[360px] border h-full p-5 pt-12 duration-300 relative block mx-5 mt-10 backdrop-blur-md z-20 border-cyan border-opacity-20 hover:scale-110  hover:border-cyan hover:border-opacity-90'
              }
              onMouseEnter={() => handleCardHover(card.id)}
              onMouseLeave={() => handleCardHover(null)}>
              {card.bestDeal && <BestDeal />}
              <h3
                id={card.id}
                className={`${readexPro.className} text-left text-3xl font-semibold leading-7 text-cyan`}>
                {card.title}
              </h3>
              <span className={`${readexPro.className} flex text-2xl font-normal tracking-tight text-white`}>
                {card.price}
              </span>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10">
                {card.features1.map((feature: any, index: number) => (
                  <li key={feature + index.toString()} className="flex gap-x-3 text-white">
                    <CheckIcon
                      className="h-5 w-5 flex-none text-cyan bg-cyan bg-opacity-20 rounded-full"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-10 mb-5 border-[2px] border-[#00FFFF3D] border-opacity-20 h-10 w-full ${
                  hoveredCardId == card.id ? 'bg-cyan text-black' : 'bg-[#11362B29]'
                }`}>
                Buy Now
              </button>
            </div>
          ))}
        </div>
        <img className="block absolute w-full bottom-[10%]" src={'/images/vector-3.webp'} />
        <img className="block absolute w-full bottom-[10%]" src={'/images/vector-4.webp'} />
      </div>
    </Container>
  );
};
