import moment from 'moment';
import { FC } from 'react';
import { Tags } from '~/components/tags';
import { Readex_Pro } from 'next/font/google';

const readex_pro = Readex_Pro({ subsets: ['latin'] });

const Details = ({ title, date, tags, slug, property, large, moreClasses, isArticle }: any) => (
  <div
    className={`h-auto justify-between p-2 lg:p-5 flex w-full
    ${isArticle ? 'flex-col-reverse' : 'flex-col'}
    ${moreClasses ?? ''}
    ${large ? 'flex-1' : ''}
  `}>
    <h2 className={`line-clamp-2 text-${large ? '3xl' : 'xl'} tracking-wide text-left m-0 ${readex_pro.className}`}>
      {title}
    </h2>
    <div className="flex flex-row gap-2 items-center content-center">
      <p className={`m-0 mr-4 ${readex_pro.className}`}>{moment(date).format('MMMM D, YYYY')}</p>
      <Tags tags={tags || []} />
    </div>
  </div>
);

export default Details;
