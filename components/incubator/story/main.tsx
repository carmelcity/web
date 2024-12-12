import React from 'react';
import { Tags } from '../../tags';
import { Readex_Pro } from 'next/font/google';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const Presentation = ({ logo, title, image, tags, hideTags, hideHeader }: any) => {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 py-5 bg-secondary">
      <div className="flex flex-wrap justify-between w-full">
        {!hideHeader && (
          <div className="flex items-center gap-4">
            <img src={logo} width={24} height={24} className="max-h-6 max-w-6" />
            <div className={`${readex_pro.className} text-2xl text-primary`}>{title}</div>
          </div>
        )}
        {!hideTags && (
          <Tags
            tags={tags}
            tagClass="!text-primary bg-secondary border-[#00FFFF3D] border-[1px]"
            containerClass="justify-start"
          />
        )}
      </div>
      <div className="flex items-center h-full">
        <img src={image} className="w-full h-auto" />
      </div>
    </div>
  );
};

const Description = ({ title, description, price }: any) => {
  return (
    <div
      className="
		flex flex-col justify-between items-start
		w-full md:w-[400px] p-6 backdrop-blur-md
		bg-gradient-to-r from-[#04615a] to-secondary
		">
      <div>
        <h2 className={`${readex_pro.className} text-3xl text-left mb-6`}>{title}</h2>
        <div className={`${readex_pro.className} text-left leading-8 text-secondary-grey`}>{description}</div>
      </div>
      <div className="flex flex-col items-start gap-4">
        <div className={`${readex_pro.className} text-primary text-lg`}>{price} $Carmel</div>
        <button className={`${readex_pro.className} bg-[#00FFFF] text-black py-2 px-6`} onClick={() => {}}>
          Available Now
        </button>
      </div>
    </div>
  );
};

const Main = ({
  logo,
  titlePresentation,
  image,
  tags,
  titleDescription,
  description,
  price,
  reverse,
  hideTags,
  hideHeader,
}: any) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'flex-row-reverse md:flex-row-reverse' : ''}`}>
      <Presentation
        logo={logo}
        title={titlePresentation}
        image={image}
        tags={tags}
        hideTags={hideTags}
        hideHeader={hideHeader}
      />
      <Description title={titleDescription} description={description} price={price} />
    </div>
  );
};

export default Main;
