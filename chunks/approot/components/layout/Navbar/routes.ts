type NavbarRoute = {
  path: string;
  name: string;
  current: boolean;
  isDashboard: boolean;
  isPublic?: boolean;
  type: 'inverted_link' | 'link' | 'button';
};

export const publicRoutes = [
  // {
  //   path: '/market',
  //   name: 'Marketplace',
  //   current: false,
  //   type: 'link',
  // },
  // {
  //   path: '/academy',
  //   name: 'Academy',
  //   current: false,
  //   type: 'link',
  // },
  // {
  //   path: '/price',
  //   name: 'Pricing',
  //   current: false,
  //   type: 'link',
  // },
  // {
  //   path: '/stories',
  //   name: 'Articles',
  //   current: false,
  //   type: 'link',
  // },
  // {
  //   path: '/philosophy',
  //   name: 'Philosophy',
  //   current: false,
  //   type: 'link',
  // },
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
    name: 'Reserve Your Account',
    current: false,
    type: 'button',
  },
];
