type NavbarRoute = {
  path: string;
  name: string;
  current: boolean;
  isDashboard: boolean;
  isPublic?: boolean;
  type: 'inverted_link' | 'link' | 'button';
};

export const publicRoutes = [
  {
    path: '/manifesto',
    name: 'Manifesto',
    current: false,
    type: 'link',
  },
  {
    path: '/principles',
    name: 'Principles',
    current: false,
    type: 'link',
  },
  {
    path: '/book',
    name: 'Book',
    current: false,
    type: 'link',
  },
  {
    path: '/pricing',
    name: 'Pricing',
    current: false,
    type: 'link',
  },
  {
    path: '/stories',
    name: 'Stories',
    current: false,
    type: 'link',
  },
  // {
  //   path: '/carmel-universe',
  //   name: 'Universe',
  //   current: false,
  //   type: 'link',
  // },
  // {
  //   path: '/use-cases',
  //   name: 'Use Cases',
  //   current: false,
  //   type: 'link',
  // },
  // {
  //   path: '/the-carmel-way',
  //   name: 'The Carmel Way',
  //   current: false,
  //   type: 'link',
  // },
  {
    path: '/access/reserve',
    name: 'Get Early Access',
    current: false,
    type: 'button',
  },
];
