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
      card={ChallengeCard}
    />
  }
  