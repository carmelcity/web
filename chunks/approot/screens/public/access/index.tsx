import React, { useEffect, useState } from 'react';
import Container from '~/containers/main';
import * as access from '~/components/access';
import Spinner from '~/components/spinner';
import * as strings from '~/text/access';
import { useRouter } from 'next/router';

export default ({ slug, user }: any) => {
  const [loading, setLoading] = useState(true);
  const [activated, setActivated] = useState(false);

  const router = useRouter();
  const Main: any = (access as any)[slug] || (access as any).early;
  const text: any = (access as any)[slug] ? (strings as any)[slug] : (strings as any).early;

  useEffect(() => {
    (async () => {
      const { activationToken, registrationToken, r } = router.query;

      if (r) {
        setActivated(parseInt(`${r}`) > 0);
        setLoading(false);
        return;
      }

      if (!user.account && activationToken && slug == 'activate') {
        const result = await user.auth.activate({ activationToken });
        window.location.href = `/access/activate?r=${result ? 1 : 0}`;
        return;
      }

      // if (!user.account && registrationToken && slug == "register") {
      // const result = await user.auth.activate({ activationToken })
      // window.location.href = `/access/activate?r=${result ? 1 : 0}`
      // return
      // }

      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (user.account) {
      window.location.href = '/';
    }
  }, [user.account]);

  const Content = () => {
    if (loading) {
      return (
        <div className="flex flex-col gap-4 w-full max-w-[1920px]">
          <Spinner />
        </div>
      );
    }

    if (slug == 'activate') {
      return (
        <div className="flex flex-col gap-4 w-full max-w-[1920px]">
          <Main.Hero text={activated ? text.success : text.error} />
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-4 w-full max-w-[1920px]">
        <Main.Hero text={text} user={user} />
        <Main.Content text={text} user={user}>
          <Main.Form text={text} user={user} />
        </Main.Content>
      </div>
    );
  };

  return (
    <Container removeGradient>
      <div className="w-full pb-10 items-center flex flex-col h-full min-h-screen bg-black">
        <div className="flex flex-col gap-4 w-full max-w-[1920px]">
          <Content />
        </div>
      </div>
    </Container>
  );
};
