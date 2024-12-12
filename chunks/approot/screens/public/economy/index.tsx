import Container from '~/containers/main';
import Hero from '~/components/hero';
import * as highlights from '~/components/highlights';

export default () => {
  return (
    <Container>
      <Hero />
      <highlights.right image="/images/city-1.png" title="Cities" />
      <highlights.left image="/images/tokens-1.png" title="Tokens" />
      <highlights.right image="/images/card-1.png" title="Cards" />
      <highlights.left image="/images/shield-1.png" title="Shields" />
      <highlights.right image="/images/land-1.png" title="Lands" />
      <highlights.left image="/images/gem-1.png" title="Gems" />
    </Container>
  );
};
