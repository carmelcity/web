import React, { useEffect, useState } from 'react';
import { Readex_Pro } from 'next/font/google';

import { TopNavbar } from '~/components/layout/TopNavbar';
import { Contacts } from '~/components/dashboard/Contacts';
import { useCarmelAccount } from '~/sdk';
import { useRouter } from 'next/router';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import { PageNotFound } from '~/components/404';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const ContactsPage = () => {
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
    <>
      <TopNavbar data={accountsData} />
      <Image src={spot} alt="spot" className="z-0 ml-auto absolute -top-10 -left-10" />
      <Image src={spot} alt="spot" className="sm:hidden z-0 absolute top-32 ml-auto w-full" />
      <Contacts data={accountsData} isLoading={isLoadingAccounts} />
    </>
  );
};
