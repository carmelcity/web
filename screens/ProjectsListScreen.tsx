import React from 'react';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { ProjectCard } from '~/components/cards'
import { ListScreen } from './ListScreen'

export const ProjectsListScreen = () => {
    return <ListScreen
      title="Carmel"
      onItemPress='/:username'
      actionTitle="View Project"
      subtitle="Projects"
      icon="SparklesIcon"
      name="projects"   
      placeholder={ListPlaceholder}
      shortIntro
      card={ProjectCard}
    />
  }
  