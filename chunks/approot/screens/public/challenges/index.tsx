import { Challenges } from '~/components/challenge';
import Container from '~/containers/main';

import { useCarmelChallenges } from '~/sdk';
import { TitleWithSubtitle } from '~/components/titleWithSubtitle';

export default () => {
  const { data: challengesData = [], isLoading: isLoadingChallenges } = useCarmelChallenges();

  return (
    <Container>
      <div className="flex flex-col items-center h-auto justify-center p-8 gap-4 w-full lg:w-5/6 bg-no-repeat bg-top bg-fill mb-32">
        <TitleWithSubtitle
          whiteTitle="CARMEL "
          primaryTitle="CHALLENGES"
          subtitle="Join our Challenges and take the lead."
        />
        <Challenges data={challengesData} isLoading={isLoadingChallenges} />
      </div>
    </Container>
  );
};
