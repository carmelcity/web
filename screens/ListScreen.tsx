import React from 'react';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import { Title, DynamicIcon, InfiniteScrollComponent } from '~/elements';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { BaseCard } from '~/components/cards'
import { useRouter } from 'next/router'
import logo from '~/public/images/logo/logo-white.svg';
import { useCarmel } from '~/sdk';

const List = ({ items, wide, isLoading, card, section, shortIntro, onItemPress, actionTitle, placeholder, highlight }: any) => {
  const ListPlaceholder = placeholder
  const Card = card
    
  if (isLoading || !items) {
    return <ListPlaceholder />
  }

  return (
    <div className='w-full'>
    <InfiniteScrollComponent
      containerClasses={wide ? `w-full` : `lg:flex lg:gap-0 lg:flex-wrap justify-center`}
      renderItem={items.map((element: any, elementId: any) => <Card 
        actionTitle={actionTitle}
        section={section}
        highlight={highlight}
        key={elementId} 
        wide={wide}
        shortIntro={shortIntro}
        onPress={() => onItemPress(element)}
         {...element} 
      />)}
      elementsNumber={3}
      loader={<ListPlaceholder />}
    />
    </div>
  )
}

export const ListScreen = ({ auth, wide, filter, name, children, highlight, onItemPress, actionTitle, icon, title, subtitle, card, placeholder }: any) => {
  const router = useRouter()
  const carmel = useCarmel()

  const onPress = (item: any) => {
    const parts = onItemPress.split(":")
    const link = `${parts[0]}${item[parts[1]]}`

    router.push(link)
  }

  const getItems = () => {
    if (!carmel.data[name]) return []
    return carmel.data[name].filter(filter || (() => true)).sort((a: any, b: any) => a.order - b.order)

  }

  return (
    <div>
      <div className="bg-dark-indigo w-full flex justify-center m-auto lg:mt-4 mt-24">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />
        <div className="w-full mb-10 flex justify-center relative z-30">
          <div className="flex flex-col justify-start items-center pb-32 min-h-full px-8 w-full">
            { icon ? <DynamicIcon name={icon} width={64} height={64} className="text-primary" />
            : <Image
                    src={logo}
                    alt="card"
                    className={`object-fit w-24 h-24`}
                />
            }
            <Title
              decription={title}
              moreClasses={`text-center text-xl text-primary uppercase mb-0`}
              isLoading={carmel.isLoading}
            />
            <Title
              decription={subtitle}
              moreClasses={`text-center lg:text-lg text-sm text-white uppercase mb-4`}
              isLoading={carmel.isLoading}
            />
            { children }
            <List 
              items={getItems()}
              wide={wide}
              highlight={highlight}
              isLoading={carmel.isLoading}
              card={card}
              shortIntro
              section={name}
              onItemPress={onPress}
              actionTitle={actionTitle}
              placeholder={placeholder}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const SimpleListScreen = ({ name, onItemPress, actionTitle, icon, title, subtitle }: any) => {
  return <ListScreen
    name={name}
    onItemPress={onItemPress}
    actionTitle={actionTitle}
    icon={icon}
    title={title}
    subtitle={subtitle}
    placeholder={ListPlaceholder}
    card={BaseCard}
  />
}
