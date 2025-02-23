import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import { Title, DynamicIcon, InfiniteScrollComponent, readexPro } from '~/elements';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { BaseCard } from '~/components/cards'
import { useRouter } from 'next/router'
import logo from '~/public/images/logo/logo-white.svg';
import { useCarmel } from '~/sdk';
import Link from 'next/link';
import { Tabs } from '~/elements';

const List = ({ items, wide, isLoading, card, section, containerClasses, shortIntro, onItemPress, actionTitle, placeholder, highlight }: any) => {
  const ListPlaceholder = placeholder
  const Card = card

  if (isLoading || !items) {
    return <ListPlaceholder />
  }

  return (
    <div className='w-full'>
    <InfiniteScrollComponent
      containerClasses={wide ? `w-full` : `lg:flex lg:flex-wrap justify-center ${containerClasses || ''}`}
      renderItem={items.map((element: any, elementId: any) => <Card 
        actionTitle={actionTitle}
        section={section}
        highlight={highlight}
        key={elementId} 
        wide={wide}
        shortIntro={shortIntro}
        {...element} 
        onPress={() => onItemPress(element) }
        />)}
      elementsNumber={3}
      loader={<ListPlaceholder />}
    />
    </div>
  )
}

export const ListScreen = ({ auth, nodes, sections = [], mainAction, onItemPress, wide, name, containerClasses, filter, children, highlight, actionTitle, icon, title, subtitle, card, placeholder }: any) => {
  const router = useRouter()
  const carmel = useCarmel()
  const [selectedTab, setSelectedTab] = useState(sections.length > 0 ? sections[0].id : '')

  const tabs = useMemo(
    () => sections.map((s: any) => ({
        description: s.title,
        value: s.id,
        icon: s.icon
  })),[])

  const section = () => sections.find((s: any) => s.id === selectedTab)

  const TabBar = () => {
  
    if (sections.length === 0) {
      return <div/>
    }

    return <div className='mb-8 border-b w-full pb-4 border-primary/40'>

          <Tabs
            isLoading={false}
            tabs={tabs}
            selectedTab={selectedTab}
            onClickTab={(value: string) => {
              setSelectedTab(value);
            }}
          />
      </div>
  }

  const onPress = (item: any) => {
    const parts = (item.onItemPress || onItemPress).split(":")
    const link = `${parts[0]}${item[parts[1]]}`  
    router.push(link.toLowerCase())
  }

  const MainSection = () => {
    let sec = section()
    return sec && sec.section || "accounts"
  }

  const MainCard = () => {
    let sec = section()

    return card || sec.card
  }

  const getItems = () => {
    if (name) {
      if (!carmel.data[name]) return []
      let sec = section()
      let f = filter || (() => true)
      f = sec ? (i: any) => i[sec.filter.key] === sec.filter.value : f 
      return carmel.data[name].filter(f).sort((a: any, b: any) => a.order - b.order)
    }

    let sec = section()
    if (!carmel.data[sec.node]) return []
    let f = filter || (() => true)
    f = sec && sec.filter ? (i: any) => i[sec.filter.key] === sec.filter.value : f 
    return carmel.data[sec.node].filter(f).sort((a: any, b: any) => a.order - b.order).map((item: any) => ({ ...item, onItemPress: sec.onItemPress }))
  }

  const Header = ({ text, icon }: any) => {
    return <div className={`${readexPro.className} text-left flex flex-row mb-4 border-b border-primary/20 w-full`}>
      <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-2xl flex flex-row items-center w-full'>
          { icon ? <DynamicIcon name={icon} width={28} height={28} className="text-primary mr-2 -mt-1" />
                : <Image src={logo} alt="card" className={`w-10 h-10 mr-2`}/>
          }
          { text }
      </span>

      { mainAction && <div className='w-full text-end p-2'>
        <Link href={mainAction.link} key={'reg1'}>
          <button
            className={`${readexPro.className} text-nowrap text-sm md:text-md shrink-0 hover:opacity-80 border-cyan font-medium border text-white px-2 py-3 shadow-early-access-button shrink-0`}>
                { mainAction.title }
          </button>
        </Link>
       </div> }
    </div>
  }

  return (
    <div>
      <div className="bg-dark-indigo w-full flex justify-center m-auto lg:mt-4 mt-24">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute opacity-20" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute opacity-20" />
        <div className="w-full mb-10 flex justify-center relative z-30">
          <div className="flex flex-col justify-start items-center pb-32 min-h-full px-4 w-full">
            <Header text={title} icon={icon}/>
            <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-md mb-4 w-full'>
              { subtitle }
            </span>
            <TabBar/>
            <List 
              nodes={nodes}
              items={getItems()}
              wide={wide}
              highlight={highlight}
              isLoading={carmel.isLoading}
              card={MainCard()}
              containerClasses={containerClasses}
              shortIntro
              section={MainSection()}
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
