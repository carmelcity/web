import React, { useEffect, useMemo, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { DynamicIcon } from '~/elements'
import { readexPro } from '~/elements/fonts';
import { Container } from './Container';
import { FriendsList } from '~/components/friends';
import Link from 'next/link';
import { Editor } from '~/components/govern/editor';
import { Tabs } from '~/elements';

const Content = () => {
    // return <div className='p-4 text-white'>
    //     {`There's nothing for you to govern. You are not a Carmel Governor yet.`}
    //     <div className='flex flex-col mt-4'> 
    //         <div className='flex text-gray-500 text-start items-start'>
    //             Use
    //             <Link href={'/store/shields'} className='ml-1 mr-1 text-primary text-nowrap'>
    //                 Carmel Shields
    //             </Link>              
    //             to apply.
    //         </div>
    //     </div>
    // </div>
    return <div className='w-full'>
        <Editor/>
    </div>
}

export const GovernScreen = (props: any) => {
  const { auth } = props  
    const [selectedTab, setSelectedTab] = useState('carmels')

  const tabs = useMemo(
        () => [
          {
            description: `CARMELS`,
            value: 'carmels'
          }
  ],[])

    const TabBar = () => {
      return <div className='mb-8 mt-8 border-b w-full pb-4 border-primary/40'>
          <Tabs
            isLoading={false}
            tabs={tabs}
            selectedTab={selectedTab}
            onClickTab={(value: string) => {
              setSelectedTab(value);
            }}
          />
      </div>
    }

  return <Container name="Govern" icon="ShieldCheckIcon">
    <div className={`w-full flex flex-col justify-start h-auto mx-auto mb-4 pb-10 relative`}>
        <TabBar/>
        <div className={`flex items-center mb-5 py-4 bg-black border border-primary/50 w-full lg:flex-row flex-col pb-4`}>
            <Content/>
        </div>
      </div>
  </Container>
}