import React, { useEffect, useMemo, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { DynamicIcon } from '~/elements'
import { readexPro } from '~/elements/fonts';
import { Container } from './Container';
import { InviteList } from '~/components/govern';
import Link from 'next/link';
import { Editor } from '~/components/govern/editor';
import { Tabs } from '~/elements';

export const AdminScreen = (props: any) => {
  const { auth } = props  
  const [selectedTab, setSelectedTab] = useState('waitinglist')

  const tabs = useMemo(
        () => [
          {
            description: `WAITING LIST`,
            value: 'waitinglist'
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


const Content = () => {
  switch(selectedTab) {
    case "waitinglist":
        return <InviteList auth={auth}/>
  }

  return <div/>
}


  return <Container name="Admin" icon="ShieldCheckIcon">
    <div className={`w-full flex flex-col justify-start h-auto mx-auto mb-4 pb-10 relative`}>
        <TabBar/>
        <div className={`flex items-center mb-5 py-4 bg-black border border-primary/50 w-full lg:flex-row flex-col pb-4`}>
            <Content/>
        </div>
      </div>
  </Container>
}