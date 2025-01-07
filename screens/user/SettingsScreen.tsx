import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { DynamicIcon } from '~/elements'
import { readexPro } from '~/elements/fonts';
import { Container } from './Container';
import { SettingsList } from '~/components/settings';

export const SettingsScreen = (props: any) => {
  return <Container name="Settings" icon="Cog8ToothIcon">
    <div className={`w-full flex flex-col justify-start h-auto mx-auto mb-4 pb-10 relative`}>
        <div className={`flex items-center mb-5 py-4 bg-black border border-primary/50 w-full lg:flex-row flex-col pb-4`}>
            <SettingsList {...props}/>         
        </div>
      </div>
  </Container>
}