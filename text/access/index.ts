export const reserve = {
  intro: 'Get early access',
  title: 'Reserve Your Username',
  subtitle: 'Be among the first to create your account and unlock early adopter benefits',
  actionTitle: 'Reserve Now',
  actionSubtitle: '*Early access is invite-only',
  form: {
    title: 'Reserve your account now',
    footer: '*You will need an invite code',
    startImage: '/images/reserve.png',
    startAnimation: {
      id: 'start',
      width: 240,
      height: 80,
      loop: true,
    },
    endSubtitle: 'Check your email to complete the reservation',
    finishAnimation: {
      id: 'success',
    },
    steps: [
      {
        title: 'Enter an invite code',
        key: 'invite',
        placeholder: 'Enter Your Invite Code',
        error: 'That looks like an invalid invite code',
        animation: { id: 'lock', width: 200, height: 200 },
      },
      {
        title: 'Select a username',
        placeholder: 'Username',
        key: 'username',
        error: 'That username is already taken',
        animation: { id: 'account' },
      },
      {
        title: 'Enter your email address',
        key: 'email',
        error: 'The reservation failed',
        animation: { id: 'email', width: 200, height: 200 },
      },
    ],
  },
  benefitsIntro: 'Get on the Early Adopters list',
  benefitsTitle: 'Unlock Early Adopters Benefits',
  benefits: [
    'Choose the username you really want',
    'Get early private access to new features',
    'Claim one of the first digital access cards',
    'Go down in history as one of the first Carmel users',
  ],
};

export const register = {
  intro: "Let's get you up and running",
  title: 'Register This Device',
  subtitle: "It's time to setup your account and start taking Carmel for a spin",
  actionTitle: 'Register Now',
  actionSubtitle: '',
  form: {
    title: 'Set up your account',
    footer: '',
    startImage: '/images/user.png',
    endActionTitle: 'Go to your dashboard',
    endActionTarget: true,
    startAnimation: {
      id: 'start',
      width: 240,
      height: 80,
      loop: true,
    },
    finishAnimation: {
      id: 'success',
    },
    steps: [
      {
        title: 'Confirm your username',
        placeholder: 'Enter your username',
        key: 'username',
        error: "That's not the right username",
        animation: { id: 'account', width: 200, height: 200 },
      },
      {
        title: 'Confirm your email',
        placeholder: 'Enter your email',
        key: 'email',
        error: "That's not the right email",
        disableNextInput: true,
        animation: { id: 'email', width: 200, height: 200 },
      },
      {
        title: 'Secure your account with biometrics',
        key: 'biometric',
        error: 'The registration failed',
        animation: { id: 'biometric', width: 200, height: 200 },
      },
    ],
  },
  benefitsIntro: 'You are on the Early Adopters list',
  benefitsTitle: 'Get Access Now',
  benefits: [
    'Customize your personal profile',
    'Get your own secure digital asset wallet',
    'Secure your account with biometrics',
    'No need to worry about passwords or security keys',
  ],
};

export const login = {
  intro: 'Welcome back',
  title: 'Sign Back In',
  subtitle: "If you already have an active account, you're almost there",
  actionTitle: 'Sign In',
  actionSubtitle: '',
  form: {
    title: 'Sign back in to your account',
    footer: '',
    startImage: '/images/user.png',
    endSubtitle: 'Check your email to continue the sign in process',
    startAnimation: {
      id: 'start',
      width: 240,
      height: 80,
      loop: true,
    },
    finishAnimation: {
      id: 'success',
    },
    steps: [
      {
        title: 'Confirm your username',
        placeholder: 'Enter your username',
        key: 'username',
        error: "That's an invalid username",
        animation: { id: 'account', width: 200, height: 200 },
      },
    ],
  },
  benefitsIntro: 'You should already be on the Early Adopters list',
  benefitsTitle: 'Welcome Back',
  benefits: [
    'Your account should be active',
    'You should have access to the email you used to activate it',
    'No passwords or keys are needed to sign back in',
  ],
};

export const activate = {
  success: {
    intro: 'Congratulations!',
    title: 'Your account is now reserved',
    subtitle: 'You are now on the Early Adopters list. Keep an eye on your email inbox for next steps.',
  },
  error: {
    intro: 'Something went wrong',
    title: 'The reservation could not be completed',
    subtitle: 'Try to give it another shot.',
  },
};
