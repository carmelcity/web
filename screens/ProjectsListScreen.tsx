import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { ProjectCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const ProjectsListScreen = () => {
    return <ListScreen
      title="Projects"
      onItemPress='/:username'
      actionTitle="View Project"
      subtitle="Carmel Projects are innovation initiatives owned, funded and developed by communities."
      icon="SparklesIcon"
      name="accounts"
      wide
      filter={(item: any) => item.type === "project"}   
      placeholder={ListPlaceholder}
      shortIntro
      card={ProjectCard}
    />
  }
  