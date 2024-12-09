import React from 'react';
import FirstChapter from '~/components/the-carmel-way/first-chapter';
import LatestBlogs from '~/components/the-carmel-way/latest-blogs';
import Container from '~/containers/main';

const Header = () => {
  const row = (text: string) => (
    <div
      className="font-[750] font-rocGroteskWide text-left text-[32px] md:text-[48px] xl:text-[60px] 2xl:text-[80px] 2xl:leading-[6rem]"
      style={{ fontStyle: 'normal' }}>
      {text}
    </div>
  );

  return (
    <div className="w-full lg:mt-14 md:w-2/3 lg:w-2/3 flex flex-col justify-center md:items-start z-20">
      {row('Redefining')}
      {row('Human Work in')}
      {row('the Machine Era.')}
      <FirstChapter />
    </div>
  );
};

export default () => {
  return (
    <Container useFontGrotesk removeGradient>
      <div className="w-full relative mx-auto flex items-center justify-center pt-36 bg-black 5xl:h-screen lg:w-screen max-w-[1920px]">
        <img
          src="/images/the-carmel-way-gradient-top.webp"
          className="w-full h-auto object-cover absolute top-0 z-20"
        />
        <img src="/images/the-carmel-way-gradient-bottom.webp" className="w-screen h-auto absolute left-0 bottom-0" />
        <div className="md:w-11/12 lg:w-10/12 flex flex-col justify-center gap-20 items-center m-0 mb-32 px-3 md:px-0">
          <div className="flex flex-col items-center lg:flex-row md:justify-around lg:justify-center">
            <Header />
            <img
              src="/images/banner-the-carmel-way.webp"
              className="w-auto h-[300px] md:h-[450px] xl:h-[600px] lg:-mt-48 z-30 md:-ml-24"
            />
          </div>
          <LatestBlogs />
        </div>
        <img className="block absolute 3xl:h-1/2 w-screen top-[22%] xs:top-[17%]" src={'/images/vector-5.webp'} />
        <img className="block absolute 3xl:h-1/2 w-screen top-[22%] xs:top-[17%]" src={'/images/vector-6.webp'} />
      </div>
    </Container>
  );
};
