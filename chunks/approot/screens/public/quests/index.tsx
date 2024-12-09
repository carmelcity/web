import { Quests } from '~/components/quests';
import Container from '~/containers/main';

import { useCarmelQuests } from '~/sdk';
import { TitleWithSubtitle } from '~/components/titleWithSubtitle';

export default () => {
  const { data: questsData = [], isLoading: isLoadingQuests } = useCarmelQuests();

  return (
    <Container>
      <div className="flex flex-col items-center h-auto justify-center p-4 lg:p-8 gap-4 w-full lg:w-5/6 bg-no-repeat bg-top bg-fill mb-32">
        <TitleWithSubtitle whiteTitle="CARMEL " primaryTitle="QUESTS" subtitle="Join our Quests and take the lead." />
        <div className="2xl:w-5/6">
          <Quests data={questsData} isLoading={isLoadingQuests} />
        </div>
      </div>
    </Container>
  );
};
