import { CarmelStudio, Notification, ShoppingCart } from '~/components/icons';

export const topNavbarRoutes = [
  {
    id: 'studio',
    href: '/carmel-studio',
    icon: <CarmelStudio />,
  },
  {
    id: 'shopping',
    href: '/cart',
    icon: <ShoppingCart />,
  },
  {
    id: 'notifications',
    href: '/',
    icon: <Notification />,
  },
];
