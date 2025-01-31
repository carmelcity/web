import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { ChallengeCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const ChallengesListScreen = () => {
    return <ListScreen
      title="Carmel"
      onItemPress='/challenges/:challengeId'
      actionTitle="View Challenge"
      subtitle="Challenges"
      icon="TrophyIcon"
      name="challenges"   
      placeholder={ListPlaceholder}
      shortIntro
      containerClasses={`gap-4`}
      card={ChallengeCard}
    >
      <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-md mb-8 text-center'>
              Carmel Challenges are chunks of work commissioned and performed by communities to advance projects.
      </span>
  </ListScreen>
  }
  