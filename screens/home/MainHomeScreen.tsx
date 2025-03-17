import React from 'react';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import { ActionButton } from '~/elements';
import Link from 'next/link';
import { readex_pro } from '~/elements';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { HomeItemCard } from '~/components/cards'
import { ListScreen } from '../ListScreen'
import { Title, DynamicIcon, InfiniteScrollComponent, readexPro } from '~/elements';
import { useRouter } from 'next/router'

export const Container = ({ children }: any) => {
    return (
      <div className="bg-dark-indigo w-full flex justify-center m-auto lg:mt-20 -mt-24 lg:mt-4 w-full">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />

         <div className='w-full px-4 py-4 lg:px-12 lg:mt-3 mt-20 lg:mb-3 flex flex-col'>
              <div className="flex flex-col justify-start items-center w-full">
                { children }
              </div>
          </div>
      </div>
  )
}

const EmptyHome = () => {
    return <Container>
        <div className="w-full flex flex-col justify-start items-center mt-64 lg:mt-10 pb-80 bg-black/0 z-50">
            <DynamicIcon name={'SquaresPlusIcon'} width={48} height={48} className='text-primary mr-3'/>
            <div className={`${readex_pro.className} text-left flex flex-row mb-8 lg:mt-0`}>
                    <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-2xl'>
                        {`Add apps and agents`}
                    </span>
            </div>
            <Link href={'/store'} key={'reg1'}>
                <button
                    className={`${readex_pro.className} text-nowrap text-sm md:text-md shrink-0 hover:opacity-80 border-cyan font-medium border text-white px-2 py-3 shadow-early-access-button shrink-0`}>
                        Browse the store
                </button>
            </Link>
        </div>
    </Container>
}

const onItemPress = (element: any, router: any) => {
    router.push(`/app/${element.username}`)
}

const HomeList = ({ home }: any) => {
    const items = Object.values(home)
    const router = useRouter()

    return <div className='w-full mb-20 min-h-screen'>
        <InfiniteScrollComponent
          containerClasses={`justify-center gap-4 mt-24 lg:mt-4 grid grid-cols-3 lg:grid-cols-4 p-2`} 
          renderItem={items.map((element: any, elementId: any) => <HomeItemCard 
            {...element} 
            onPress={() => onItemPress(element, router) }
            />)}
          elementsNumber={3}
          loader={<ListPlaceholder />}
    />
    </div>
}

export const MainHomeScreen = (props: any) => {
    const { home } = props.auth.profile

    if (!home) {
        return <EmptyHome/>
    }

    return <HomeList home={home}/>
  }
  