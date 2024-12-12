import Container from '~/containers/main';
import Connect from '~/components/connect';
import Connecting from '~/containers/connecting';

export default () => (
  <Container>
    <Connecting>
      <Connect />
    </Connecting>
  </Container>
);
