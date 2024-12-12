import dashboardActiveIcon from '~/images/Dashboard.svg';
import dashboardIcon from '~/images/dashboardGray.svg';
import profileIcon from '~/images/WalletIcon.svg';
import userIconActive from '~/images/UsersActive.png';
import contentIcon from '~/images/ContentIcon.svg';
import contentActive from '~/images/ContentActiveIcon.svg';
import hub from '~/images/dashboard/Hub.webp';
import wallet from '~/images/dashboard/Wallet.webp';
import walletActive from '~/images/dashboard/walletActive.png';
import marketplace from '~/images/dashboard/Marketplace.webp';
import marketplaceActive from '~/images/dashboard/marketplaceActive.png';
import assetsIcon from '~/images/AssetsIcon.svg';
import assetsActive from '~/images/AssetsActive.svg';
import assets from '~/images/dashboard/Assets.webp';
import achievmentsIcon from '~/images/Achievments.svg';
import achievmentsActive from '~/images/AchievmentsActive.svg';
import contactsActive from '~/images/dashboard/ContactsActive.png';
import contactsInactive from '~/images/dashboard/ContactsIconInactive.png';
import logo from '~/public/images/logo/logo-white.svg';
import { BeakerIcon } from '@heroicons/react/24/solid';

export const sidebarRoutes = [
  {
    name: 'Carmels',
    href: `/`,
    iconActive: logo,
    icon: logo,
    current: false,
  },
  {
    name: 'Communities',
    href: '/communities',
    img: 'UserGroupIcon',
    iconActive: marketplaceActive,
    icon: marketplace,
    current: false,
  },
  {
    name: 'Projects',
    href: '/projects',
    img: 'FireIcon',
    iconActive: walletActive,
    icon: wallet,
    current: false,
  },
  {
    name: 'Store',
    href: '/store',
    img: 'CurrencyDollarIcon',
    iconActive: assetsActive,
    icon: assetsIcon,
    current: false,
  },
];


/**
 * Stories
 * Tutorials
 * Challenges
 * 
 * 
 * The Carmel Way
 *    Manifesto
 *    Principles
 *    
 */
