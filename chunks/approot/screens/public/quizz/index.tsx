import { Quizz } from '~/components/challenge/quizz';
import Container from '~/containers/main';
import { useRouter } from 'next/router';
import { useCarmelQuizz } from '~/sdk';
import { useEffect, useState } from 'react';
import { PlaceholderCard } from '~/components/quests/questsDetails/Placeholder';

export default () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const slug: any = router.query.uri;

  const quizz: any = useCarmelQuizz({ slug });

  useEffect(() => {
    if (!quizz.data) return;

    if (quizz.data && quizz.data.missing) {
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
      <Quizz quizz={quizz.data} />
    </Container>
  );
};
