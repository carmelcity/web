import React from 'react';
import { SocialImpact } from '~/components/landing/SocialImpact/SocialImpact';
import Container from '~/containers/main';
import Businesses from '~/components/landing/businesses/Businesses';
import { HOME_TEXT } from '../../../text/home';
import Hero from '~/components/hero';

const Landing = () => {
  return (
    <Container>
      <Hero />
      <div className="w-full mx-auto items-center flex justify-center bg-dark-indigo">
        <div className="flex flex-col">
          <SocialImpact text={HOME_TEXT} />
          <Businesses />
        </div>
      </div>
    </Container>
  );
};

export default Landing;
