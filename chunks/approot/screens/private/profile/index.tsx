import Container from '~/containers/main';
import Image from 'next/image';
import eth from '../../../images/eth.webp';
import usdc from '../../../images/usdc.webp';
import carmel from '../../../images/carmel.webp';
import { useRouter } from 'next/navigation';

const Stat = (props: any) => {
  return (
    <div className="lg:w-1/4 w-1/3 h-full bg-base-100 shadow-xl gap-4 bg-primary-gradient bg-no-repeat bg-top bg-fill border border-primary-color flex flex-col items-center">
      <p className="text-xl text-center pt-4">
        <Image src={props.image} height={80} width={80} alt="logo" />
      </p>
      <div className="lg:text-2xl pb-4 text-md text-center flex lg:flex-row flex-col">
        <div>{props.amount}</div>
        <div className="text-primary-color pl-2 pr-2">{props.currency}</div>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="mb-10 flex flex-row justify-center items-center h-auto flex-wrap">
      <Stat amount="0.0000" currency="ETH" image={eth} />
      <Stat amount="0.0000" currency="CARMEL" image={carmel} />
      <Stat amount="0.0000" currency="USDC" image={usdc} />
    </div>
  );
};

const ProfilePage = (props: any) => {
  const router = useRouter();

  const signOut = () => {
    props.carmel.auth.disconnect();
    location.reload();
  };

  const sign = () => {
    props.carmel.auth.sign();
  };

  return (
    <div className="flex flex-col lg:m-4 mt-4 h-auto w-full">
      <div className="mt-20">
        <Stats />
        <button onClick={signOut} className="btn p-4">
          Sign out
        </button>
        <button onClick={sign} className="btn p-4">
          Sign
        </button>
      </div>
    </div>
  );
};

export default () => (
  <Container>
    <ProfilePage />
  </Container>
);
