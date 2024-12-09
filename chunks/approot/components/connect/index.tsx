import React, { useRef, useEffect, useState, CSSProperties } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import { useRouter } from 'next/router';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

export default ({ carmel }: any) => {
  let [loading, setLoading] = useState(false);
  const router = useRouter();

  const username = useRef<any>();

  const onConnect = () => {
    setLoading(true);
    carmel.auth.connect({ username: `${username.current.value}` });
  };

  useEffect(() => {
    if (carmel.auth.error) {
      setLoading(false);
      return;
    }

    if (carmel.auth.account) {
      setLoading(false);
      router.push('/');
    }
  }, [carmel.auth]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center h-auto justify-center border border-primary-color p-8 gap-4 w-full lg:w-1/3 bg-primary-gradient bg-no-repeat bg-top bg-fill">
        <img src="/images/logo/logo-white.svg" className="w-20 h-20" alt="img" />
        <div className={`self-center mb-10 flex flex-col space-y-4 ${loading ? 'hidden' : ''}`}>
          <h3 className="text-2xl"> Carmel Connect </h3>
          <div className={`${carmel.auth.error ? '' : 'hidden'}`}>{carmel.auth.error}</div>
          <input
            ref={username}
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="username"
            className="text-black"
          />
          <button onClick={onConnect} className="btn bg-primary-color p-4 text-white">
            Continue
          </button>
        </div>
        <BounceLoader
          color={'#31C48D'}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading"
          data-testid="loader"
        />
      </div>
    </div>
  );
};
