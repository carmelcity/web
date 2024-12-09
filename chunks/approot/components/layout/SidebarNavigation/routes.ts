import dashboardActiveIcon from '../../../images/Dashboard.svg';
import dashboardIcon from '../../../images/dashboardGray.svg';
import profileIcon from '../../../images/WalletIcon.svg';
import userIconActive from '../../../images/UsersActive.png';
import contentIcon from '../../../images/ContentIcon.svg';
import contentActive from '../../../images/ContentActiveIcon.svg';
import hub from '../../../images/dashboard/Hub.webp';
import wallet from '../../../images/dashboard/Wallet.webp';
import walletActive from '../../../images/dashboard/walletActive.png';
import marketplace from '../../../images/dashboard/Marketplace.webp';
import marketplaceActive from '../../../images/dashboard/marketplaceActive.png';
import assetsIcon from '../../../images/AssetsIcon.svg';
import assetsActive from '../../../images/AssetsActive.svg';
import assets from '../../../images/dashboard/Assets.webp';
import achievmentsIcon from '../../../images/Achievments.svg';
import achievmentsActive from '../../../images/AchievmentsActive.svg';
import contactsActive from '../../../images/dashboard/ContactsActive.png';
import contactsInactive from '../../../images/dashboard/ContactsIconInactive.png';

export const sidebarRoutes = [
  {
    name: 'Profile',
    href: `/`,
    iconActive: userIconActive,
    icon: profileIcon,
    current: false,
  },
  {
    name: 'Marketplace',
    href: '/marketplace',
    iconActive: marketplaceActive,
    icon: marketplace,
    current: false,
  },
  {
    name: 'Wallet',
    href: '/wallet',
    iconActive: walletActive,
    icon: wallet,
    current: false,
  },
  {
    name: 'Contacts',
    href: '/contacts',
    iconActive: contactsActive,
    icon: contactsInactive,
    current: false,
  },
  {
    name: 'Assets',
    href: '/assets',
    iconActive: assetsActive,
    icon: assetsIcon,
    current: false,
  },
];
