import { Orbitron } from 'next/font/google';
import { Readex_Pro } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
});

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const TitleWithSubtitle = ({ whiteTitle, primaryTitle, subtitle }: any) => {
  return (
    <div className="z-10">
      <h2
        className={`whitespace-nowrap text-xl md:text-5xl tracking-[0.4em] ${orbitron.className} font-normal leading-58 tracking-widest text-center`}>
        {whiteTitle}
        <span
          className={`${orbitron.className} tracking-[0.4em] text-xl md:text-5xl font-normal leading-58 tracking-widest text-center text-primary`}>
          {primaryTitle}
        </span>
      </h2>
      <p className={`${readexPro.className} font-thin text-center`}>{subtitle}</p>
    </div>
  );
};
