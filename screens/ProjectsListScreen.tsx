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
      name="accounts"
      wide
      filter={(item: any) => item.type === "project"}   
      placeholder={ListPlaceholder}
      shortIntro
      card={ProjectCard}
    >
       <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-md mb-8 text-center'>
                Carmel Projects are innovation initiatives owned, funded and developed by communities.
        </span>
    </ListScreen>
  }
  