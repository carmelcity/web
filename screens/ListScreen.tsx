import React from 'react';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import { Title, DynamicIcon, InfiniteScrollComponent } from '~/elements';
import { useCarmelList } from '~/sdk/hooks';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { BaseCard } from '~/components/cards'
import { useRouter } from 'next/router'
import logo from '~/public/images/logo/logo-white.svg';

const List = ({ items, shortIntro, card, onItemPress, actionTitle, placeholder, auth }: any) => {
  const ListPlaceholder = placeholder
  const Card = card
  
  if (items.isLoading) {
    return <ListPlaceholder />
  }

  return (
    <div className='w-full'>
    <InfiniteScrollComponent
      renderItem={items.all.map((element: any, elementId: any) => <Card 
        actionTitle={actionTitle}
        key={elementId} 
        shortIntro
        onPress={() => onItemPress(element)}
         {...element} 
      />)}
      elementsNumber={3}
      loader={<ListPlaceholder />}
    />
    </div>
  )
}

export const ListScreen = ({ name, children, shortIntro, onItemPress, actionTitle, icon, title, subtitle, card, placeholder }: any) => {
  const items = useCarmelList(name)
  const router = useRouter()

  const onPress = (item: any) => {
    const parts = onItemPress.split(":")
    const link = `${parts[0]}${item[parts[1]]}`

    router.push(link)
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
              isLoading={items.isLoading}
            />
            <Title
              decription={subtitle}
              moreClasses={`text-center lg:text-lg text-sm text-white uppercase mb-4`}
              isLoading={items.isLoading}
            />
            { children }
            <List 
              items={items}
              card={card}
              shortIntro
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
