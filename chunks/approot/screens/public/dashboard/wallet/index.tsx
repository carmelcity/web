import React, { useEffect, useState } from 'react';
import { WalletStats } from '~/components/dashboard/WalletStats';
import { useCarmelAccount } from '~/sdk';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import { WalletActivity } from '~/components/dashboard/WalletActivity';
import { TopNavbar } from '~/components/layout/TopNavbar';
import { useRouter } from 'next/router';
import { Contacts } from '~/components/dashboard/Contacts/WalletSection';
import { PageNotFound } from '~/components/404';

export const Wallet = ({ user }: any) => {
  const router = useRouter();
  const username: any = router.query.slug;
  const slug: any = router.query.slug;

  const [isLoadingAccounts, setIsLoadingAccounts] = useState(true);

  const { data: accountsData = [], isLoading: isOriginalLoadingAccounts }: any = useCarmelAccount({ username, slug });
  if (!accountsData || accountsData.missing) {
    return <PageNotFound />;
  }

  useEffect(() => {
    // Simulate an additional delay of 2 seconds
    const delay = 1500;
    const timeoutId = setTimeout(() => {
      setIsLoadingAccounts(isOriginalLoadingAccounts);
    }, delay);

    return () => {
      // Clear the timeout to avoid memory leaks
      clearTimeout(timeoutId);
    };
  }, [isOriginalLoadingAccounts]);

  return (
    <div className="flex flex-col relative">
      <TopNavbar data={accountsData} />
      <Image src={spot} alt="spot" className="z-0 ml-auto absolute -top-10 -left-10" />
      <WalletStats user={user} isLoading={isLoadingAccounts} />
      <div className="hidden lg:flex">
        <WalletActivity user={user} isLoading={isLoadingAccounts} />
        <Contacts data={user} isLoading={isLoadingAccounts} />
      </div>
      <div className="flex flex-col lg:hidden">
        <Contacts data={user} isLoading={isLoadingAccounts} />
        <WalletActivity user={user} isLoading={isLoadingAccounts} />
      </div>
    </div>
  );
};
