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
import { Carousel, Card } from "~/components/ui/apple-cards-carousel";
import { SparklesCore } from "~/components/ui/sparkles";
import { Vortex } from "~/components/ui/vortex";
import { TextHoverEffect } from "~/components/ui/text-hover-effect";
import { TextGenerateEffect } from "~/components/ui/text-generate-effect";
import { Button } from "~/components/ui/moving-border";
import { motion } from "motion/react";
import { LampContainer } from "~/components/ui/lamp";
import { ThreeDMarquee } from "~/components/ui/3d-marquee";
import ColourfulText from "~/components/ui/colourful-text";
import { FlipWords } from "~/components/ui/flip-words";
const words = ["better", "cute", "beautiful", "modern"];
import { ContainerTextFlip } from "~/components/ui/container-text-flip";
import { AnimatedGradientText } from "~/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";
// import { Button } from "@/components/ui/button";
import { BoxReveal } from "~/components/magicui/box-reveal";
import { WavyBackground } from "~/components/ui/wavy-background";

const Header = () => {
    return <div className={`${readexPro.className} text-left flex flex-row mb-4 border-b border-primary/20 w-full lg:mt-0 mt-20`}>
      <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-2xl flex flex-row items-center w-full'>
        <DynamicIcon name={'HomeIcon'} width={28} height={28} className="text-primary mr-2 -mt-1" />
          { 'Home' }
      </span>

      <div className='w-full text-end p-2'>
        <Link href={'/store'} key={'reg1'}>
          <button
            className={`${readexPro.className} text-nowrap text-sm md:text-md shrink-0 hover:opacity-80 border-cyan font-medium border text-white px-2 py-3 shadow-early-access-button shrink-0`}>
                { 'Browse Store' }
          </button>
        </Link>
       </div>
    </div>
  }

export const Container = ({ children, noHeader }: any) => {
    return (
      <div className="bg-dark-indigo w-full flex justify-center m-auto lg:mt-20 -mt-24 lg:mt-4 w-full">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute opacity-20" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute opacity-50" />

        <div className="w-full mb-10 flex justify-center relative z-30 mt-24 lg:mt-0">
         <div className="flex flex-col justify-start items-center pb-32 min-h-full px-4 w-full">
         { noHeader || <Header/> }
         <div className="flex flex-col justify-start items-center w-full">
              { children }
              </div>
          </div>
          </div>
      </div>
  )
}

const TopIntro = () => {
  return (
    <div className="group bg-black/80 relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
      <span
        className={cn(
          "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#053D36]/50 via-[#00796B]/50 to-[#00ACC1]/50 bg-[length:300%_100%] p-[1px]",
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      <AnimatedGradientText className="text-sm font-medium">
        Browse Carmels
      </AnimatedGradientText>
     
            <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
          <span className='text-sm text-white/70'>
            Community debates
            </span>
            <ChevronRight
        className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
      />
    </div>
  );
}

const EmptyHome = () => {
    return <WavyBackground className="w-full black/10 p-4 lg:p-24" backgroundFill='#0A0F12' colors={["#053D36", "#00796B", "#00ACC1", "#4CAF50"]}>
    <div className='w-full flex flex-col items-center'>
    <TopIntro/>
    <h1 className="text-3xl lg:text-6xl text-white font-bold inter-var text-center mt-4">
        How would you build a more human world?
      </h1>
      <h2 className="mt-4 text-white font-normal text-xl lg:text-2xl inter-var text-center">
        Please are currently debating on Carmels how to build a more human world.
      </h2> 
      <Link href={'/carmels'} key={'reg1'}>
          <button
              className={`${readex_pro.className} w-full mt-16 text-nowrap shrink-0 hover:opacity-80 border-cyan font-medium border text-white px-2 py-3 shadow-early-access-button shrink-0 rounded-md`}>
                  Join the conversation
          </button>
      </Link>
      <Link href={'/store'} key={'reg2'}>
          <button
              className={`${readex_pro.className} w-full mt-4 text-nowrap text-sm shrink-0 hover:opacity-80 font-medium text-primary px-2 py-3 `}>
                 See what the community is already building
          </button>
      </Link>
      </div>
    </WavyBackground>
}

const onItemPress = (element: any, router: any) => {
    router.push(`/${element.type === "agent" ? 'agent' : 'app'}/${element.username}`)
}

const HomeList = ({ home }: any) => {
    const items = Object.values(home)
    const router = useRouter()

    return <Container>
            <div className="w-full flex flex-col justify-start items-center pb-80 bg-black/0 z-50">
                <div className='w-full mb-20 min-h-screen'>
                    <InfiniteScrollComponent
                    containerClasses={`justify-center gap-4 grid grid-cols-3 lg:grid-cols-4 p-2`} 
                    renderItem={items.map((element: any, elementId: any) => <HomeItemCard 
                        {...element} 
                        onPress={() => onItemPress(element, router) }
                        />)}
                    elementsNumber={3}
                    loader={<ListPlaceholder />}
                />
                </div>
            </div>
    </Container>
}

export const MainHomeScreen = (props: any) => {
    const { home } = props.auth.profile

    if (!home) {
        return <EmptyHome/>
    }

    return <HomeList home={home}/>
  }
  