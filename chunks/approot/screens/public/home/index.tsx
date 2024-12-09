import Container from '~/containers/main';
import Dashboard from '~/screens/private/dashboard';

import StoryWay from '~/components/story/way';
import StoryNetwork from '~/components/story/network';
import StoryAccess from '~/components/story/access';
import StoryBenefits from '~/components/story/benefits';
import StoryHero from '~/components/story/hero';
import StoryEconomy from '~/components/story/economy';
import StoryTop from '~/components/story/top';

const Landing: any = () => {
  return [
    <StoryHero />,
    <StoryBenefits />,
    <StoryAccess />,
    <StoryNetwork />,
    <StoryWay />,
    // <StoryEconomy/>
  ];
};

const Main = ({ carmel }: any) => {
  const { auth } = carmel;

  if (auth.account) {
    return <Dashboard carmel={carmel} />;
  }

  return <Landing />;
};

export default () => {
  return (
    <Container>
      <Main />
    </Container>
  );
};

// features={[
//   {
//     name: "Biometric authentication.",
//     description: "Use your face or your fingerprint to authenticate.",
//   },
//   {
//     name: 'High-grade security.',
//     description: 'Your private key are stored in your device and nowhere else.',
//   },
//   {
//     name: 'Passwordless & keyless.',
//     description: 'No need to keep track of a password, private keys or anything to remember at all.',
//   }
// ]}

// Currently, many people view work negatively, and disengagement in the global workplace is rampant. Therefore, we share one mission: to redefine work, to make it more meaningful. Only then can we work together in a meaningful way to create the human-centric world we desire.
// At the heart of this transformation is a new approach to work - The Carmel Way. This philosophy makes work more meaningful.
// Traditionally, pleasure and power are seen as primary motivators at work. Pleasure often comes from financial success, and power from titles, promotions, and accolades. However, the wealthiest and most influential individuals aren't necessarily the most fulfilled.
// The Carmel Way introduces a third perspective: meaning. We crave meaning in our work, more so than the pleasure from financial success or the power from promotions. The Carmel Way guides us towards meaningful work, offering experiences of freedom, creativity, and openness, instead of the typical dread, uniformity, and fear in workplaces devoid of meaning.
