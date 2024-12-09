import { QuestsDetails } from '~/components/quests/questsDetails';
import Container from '~/containers/main';
import { useRouter } from 'next/router';
import { useCarmelQuestsDetails } from '~/sdk';
import { useEffect, useState } from 'react';
import { PlaceholderCard } from '~/components/quests/questsDetails/Placeholder';

export default () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const slug: any = router.query.uri;

  const details: any = useCarmelQuestsDetails({ slug });

  useEffect(() => {
    if (!details.data) return;

    if (details.data && details.data.missing) {
      router.push('/');
      return;
    }

    setLoading(false);
  });

  if (loading) {
    return (
      <Container>
        <PlaceholderCard />
        <PlaceholderCard />
        <PlaceholderCard />
        <PlaceholderCard />
      </Container>
    );
  }

  return (
    <Container>
      <QuestsDetails details={details.data} />
    </Container>
  );
};
