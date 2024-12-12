import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GA_MEASUREMENT_ID: string;
      NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: string;
      NEXT_PUBLIC_GOOGLE_MAP_ID: string;
      NEXT_PUBLIC_API_ENV: string;
      PASSWORD_PROTECT_ENABLED: boolean;
      PASSWORD: string;
      EVENT_MUTATION_KEY: string;
    }
  }

  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
    ethereum: MetaMaskInpageProvider;
  }
}

export {};
