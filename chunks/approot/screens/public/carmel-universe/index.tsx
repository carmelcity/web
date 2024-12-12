import Banner from '~/components/carmel-universe/banner';
import { apps1, assets1, assets2, stories } from '~/components/carmel-universe/mockData';
import Story from '~/components/carmel-universe/story';
import Meraki from '~/components/carmel-universe/meraki';
import Stories from '~/components/carmel-universe/featured/stories';
import Challenges from '~/components/carmel-universe/featured/challenges';
import Quests from '~/components/carmel-universe/featured/quests';
import Creators from '~/components/carmel-universe/featured/creators';
import Container from '~/containers/main';

const CarmelUniverse = () => {
  return (
    <Container>
      <div className="w-full mx-auto items-center flex justify-center bg-black">
        <div
          className="flex flex-col items-center lg:w-screen max-w-[1920px] 3xl:max-w-1/3 gap-4 mb-32 pt-20 5xl:w-1/2 bg-black"
          style={{
            backgroundImage: "url('/images/background-carmel-universe.webp')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}>
          <Banner />
          <Story
            reverse
            story={stories[0]}
            assets={assets1}
            upperTitle="FEATURED CITY"
            appsTitle="OTHER CITIES"
            apps={apps1}
            hideTags
            hideHeader
          />
          <Story
            story={stories[1]}
            assets={assets2}
            upperTitle="FEATURED APP"
            appsTitle="OTHER APPS"
            apps={apps1}
            hideTags
          />
          <Meraki />
          <Quests />
          <Challenges />
          <Stories />
          <Creators />
        </div>
      </div>
    </Container>
  );
};

export default CarmelUniverse;
