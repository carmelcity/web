import React, { useEffect, useMemo, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { DynamicIcon, showSuccessToast } from '~/elements'
import { readexPro } from '~/elements/fonts';
import { Container } from './Container';
import { FriendsList } from '~/components/friends';
import Link from 'next/link';
import { Editor } from '~/components/govern/editor';
import { Tabs } from '~/elements';
import { CarmelCard, CarmelEditCard } from '~/components/cards'
import { CarmelBox, Engagements, ActionButton, Community, Author, People, Tags, PostIntro, PostText } from '~/elements';
import { useRouter } from 'next/router';

export const NewCarmelScreen = (props: any) => {   
  const router = useRouter()

  const onDone = () => {
    router.push("/")
  }

  const onCancel = () => {
    router.push("/")
  }

  return <Container name="Create a new Carmel" icon="ShieldCheckIcon">
    <div className={`w-full flex flex-col justify-start h-auto mx-auto mb-4 pb-10 relative`}>
        <div className={`flex items-center mb-5 py-4 bg-black border border-primary/50 w-full lg:flex-row flex-col pb-4`}>
            <div className='w-full flex flex-col items-center p-4'>
                <CarmelBox title={''} text={''} onDone={onDone} onCancel={onCancel} edit={false}/>          
            </div>
        </div>
      </div>
  </Container>
}