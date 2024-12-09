import React from 'react';
import { Header } from '~/components/profile';
import { useRouter } from 'next/router';
import { useCarmelAccount } from '~/sdk/hooks';
import spot from '~/images/stories/Background.webp';
import spotXXS from '~/images/dashboard/MobileSpot.webp';
import Image from 'next/image';
import { TopNavbar } from '~/components/layout/TopNavbar';
import { PageNotFound } from '~/components/404';

export const Profile = ({ user }: any) => {
  const router = useRouter();
  const username: any = router.query.slug;
  const slug: any = router.query.slug;

  console.log(user);
  // const { account, dataState } = user

  // const userData = {
  //   username: account.username,
  //   email: account.email,
  //   status: ""//dataState.data.status
  // }

  // if (userData.status !== "initialized") {
  //   // TODO improve UI here
  //   return <div className="bg-dark-indigo w-full flex justify-center m-auto pt-28 lg:pt-0">
  //       <h1> Pending approval </h1>
  //     </div>
  // }

  const { data: accountsData = [], isLoading: isLoadingAccounts }: any = useCarmelAccount({ username, slug });
  if (!accountsData || accountsData.missing) {
    return <PageNotFound />;
  }

  return (
    <>
      <div className="bg-dark-indigo w-full flex justify-center m-auto pt-28 lg:pt-0">
        <Image src={spot} alt="spot" className="hidden sm:flex z-0 ml-auto absolute -top-10 -left-10" />
        <Image src={spotXXS} alt="spot" className="sm:hidden z-0 absolute w-full h-full" />
        <div className="w-full min-h-screen max-w-[1920px] relative z-30 text-left pt-2 lg:pt-0">
          <TopNavbar data={accountsData} />
          <Header data={accountsData} user={user} isLoading={isLoadingAccounts} isEditable />
        </div>
      </div>
    </>
  );
};
