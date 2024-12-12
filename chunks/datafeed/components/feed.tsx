'use client';

import Card from './card';
import React, { useState } from 'react';
import Placeholder from './placeholder';
import { DataItem } from '../types/data';
import { useParams } from 'next/navigation';
import useDataList from '../hooks/useDataList';
import { motion, AnimatePresence } from 'framer-motion';
import InfiniteScroll from 'react-infinite-scroll-component';
import Icon from './icon';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

/**
 *
 * @returns
 */
const Feed = ({
  base,
  filter,
  tabs,
  title,
  icon,
}: {
  base: string;
  title: string;
  icon?: string;
  tabs?: string[];
  filter?: string;
}) => {
  const [tab, setTab] = useState(0);
  const params = useParams();
  const list = useDataList({ base });

  const onTabChange = (e: any) => {
    setTab(parseInt(e.target.role));
  };

  if (!list.isReady) {
    let all = [<Placeholder key={9} />];

    if (!params.id) {
      for (let i = 0; i < 3; i++) {
        all.push(<Placeholder key={i} />);
      }
    }

    return <div className="flex flex-col items-center">{all}</div>;
  }

  const all =
    filter && tabs ? list.all.filter((item: DataItem) => (item as any)[filter] === tabs[tab].split('/')[1]) : list.all;
  const first = all[0];

  return (
    <div className="transition-all duration-500 opacity-100 items-center flex flex-col">
      <div className="flex flex-col w-full">
        <span className="lg:text-xl text-md flex flex-row text-left w-full p-2 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green">
          {icon ? (
            <Icon width={24} height={24} name={icon} className="text-cyan mr-2 text-lg" />
          ) : (
            <img src="/images/logo.png" className="lg:w-7 w-6 lg:h-7 h-6 mr-2 text-cyan" />
          )}
          {title}
        </span>

        {/* <Tabs defaultValue="account" className="bg-primary bg-zinc-950 w-full text-center">
  <TabsList className='bg-black border'>
    <TabsTrigger value="account" className='bg-primary bg-black'>Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
</Tabs>
         */}
        {tabs && (
          <div className="tabs tabs-bordered" onClick={onTabChange}>
            {tabs.map((t: string, i: number) => (
              <a
                role={`${i}`}
                key={`tab-${i}`}
                className={`text-grey tab ${i === tab ? 'tab-active text-primary' : ''} text-xs lg:text-md`}>
                {t.split('/')[0]}
              </a>
            ))}
          </div>
        )}
        {first && first.descriptor && (
          <span className="text-md text-grey flex flex-row text-left w-full ml-2 mt-4">{first.descriptor}</span>
        )}
      </div>

      <AnimatePresence>
        <motion.div
          transition={{ duration: 3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}>
          <InfiniteScroll
            dataLength={all.length || 0}
            next={list.refresh}
            hasMore={false}
            loader={<Placeholder />}
            className="pt-2">
            <div className="flex flex-col p-2 items-center">
              {(all || []).map((item: any, i: number) => (
                <Card key={i} data={item} />
              ))}
            </div>
          </InfiniteScroll>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Feed;
