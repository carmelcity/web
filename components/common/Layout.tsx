"use client";

// import React from 'react';
// import Background from '@/components/Background';
// import NavigationBar from '@/components/NavigationBar'
// import LeftBar from './LeftBar';
// import RightBar from './RightBar';
// import TabBar from './TabBar';
// import SideMenu from './SideMenu';
// import Image from 'next/image';
// import spot from '@/public/images/spot.webp';
// import wire1 from '@/public/images/wire1.webp';
// import wire2 from '@/public/images/wire2.webp';

// export default ({ children } : {
//     children: React.ReactNode
//   }) => {
//     // return (<div className="flex flex-col">
//     //             <Background/>

//     //             <div className="flex h-screen ov w-full xl:w-[1280px] lg:w-[1024px] md:w-[768px] mx-auto justify-center z-10">
//     //                 <LeftBar/>
//     //                 <div className="flex flex-col w-full border-l border-r min-h-screen -mt-1 border-primary-color/40 mt-20 p-4 pb-14 pt-2 z-10">
//     //                     {/* { children} */}
//     //                 </div>
//     //                 {/* <RightBar/> */}

//     //             </div> 
//     //             <NavigationBar/>
//     //             <TabBar/>
//     //         </div>)
//     return (<div className="flex">
//                 <div className='z-0'>
//                     <Image src={spot} alt="spot" className="top-0 z-0 left-0 fixed h-screen object-fit"/>
//                     <Image src={wire1} alt="spot" className="top-0 z-0 left-0 fixed w-screen object-fit opacity-30"/>
//                     <Image src={wire2} alt="spot" className="top-0 z-0 left-0 fixed w-screen object-fit opacity-30"/>
//                     <Image src={wire1} alt="spot" className="bi-0 z-0 left-0 fixed w-screen object-fit opacity-30"/>
//                     <Image src={wire2} alt="spot" className="top-0 z-0 left-0 fixed w-screen object-fit opacity-30"/>
//                 </div>

//                 <aside className="h-screen sticky top-0 bg-black/30">
//                     <div className="w-64 hidden md:flex lg:flex justify-start items-center sticky top-0 p-4 pt-4 flex z-10 grow relative flex-col">
//                         <SideMenu/>
//                     </div>
//                 </aside>

//                 <div className="flex flex-col bg-black/30 w-full border-l border-r min-h-screen -mt-1 border-primary-color/40 p-4 pb-4 z-10">
//                     { children}
//                 </div>
// </div>)
// }


import React from 'react';
import NavigationBar from '@/components/common/NavigationBar'
import TabBar from './TabBar';
import SideMenu from './SideMenu';
import Image from 'next/image';
import spot from '@/public/images/spot.webp';
import wire1 from '@/public/images/wire1.webp';
import wire2 from '@/public/images/wire2.webp';
// import { useMyProfile } from '@/hooks/useProfile'

export default ({ children } : {
    children: React.ReactNode
  }) => {
    // const myProfile = useMyProfile()

    return (<div className='flex flex-col w-full items-center'>
        <NavigationBar/>

        <div className="flex lg:w-[1024px] md:w-[768px] w-full">
                <div className='z-0'>
                    <Image src={spot} alt="spot" className="top-0 z-0 left-0 fixed h-screen object-fit"/>
                    <Image src={wire1} alt="spot" className="bottom-0 z-0 left-0 fixed w-screen object-fit opacity-30"/>
                    <Image src={wire2} alt="spot" className="bottom-0 z-0 left-0 fixed w-screen object-fit opacity-80"/>
                </div>

                <aside className="h-screen sticky top-0 bg-black/30">
                    <div className="w-48 hidden md:flex lg:flex justify-start items-center sticky top-0 p-4 pt-24 flex z-10 grow relative flex-col">
                        <SideMenu/>
                    </div>
                </aside>

                {/* <div className="flex flex-col bg-black/30 w-full border-l border-r min-h-screen -mt-1 border-primary-color/40 p-4 pb-20 pt-24 z-10">
                    { React.Children.map(children, (child: any) => {
                        return React.cloneElement(child, { myProfile })
                    }) }
                </div> */}

                <aside className="h-screen sticky top-0 bg-black/30">
                    <div className="w-48 hidden md:flex lg:flex justify-start items-center sticky top-0 p-4 pt-24 flex z-10 grow relative flex-col">
                        
                    </div>
                </aside>

                <TabBar/>
        </div>
</div>)
}


