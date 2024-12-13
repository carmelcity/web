import React from 'react';
import App from './app';
import ScrollContainer from 'react-indiana-drag-scroll';

const Apps = ({ apps }: any) => {
  const getApps = () => apps.map((app: any, index: number) => <App {...app} key={index} />);

  return (
    <ScrollContainer horizontal className="scroll-container whitespace-nowrap overflow-auto" hideScrollbars={false}>
      {getApps()}
    </ScrollContainer>
  );
};

export default Apps;
