import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { ChallengeCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const ChallengesListScreen = () => {
    return <ListScreen
      title="Challenges"
      onItemPress='/challenges/:challengeId'
      actionTitle="View Challenge"
      subtitle="Carmel Challenges are chunks of work commissioned and performed by communities to advance projects."
      icon="TrophyIcon"
      name="challenges"   
      placeholder={ListPlaceholder}
      shortIntro
      sections={[
        { id: "open",icon: "PlayIcon", title: "Open", filter: { key: "status", value: "open" } }, 
        { id: "closed", icon: "CheckCircleIcon", title: "Closed", filter: {  key: "status", value: "closed"} } 
      ]}
      containerClasses={`gap-4`}
      card={ChallengeCard}
    />
  }
  