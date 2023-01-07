// Export Sidebar Const
import {
  ArchiveBoxIcon,
  TruckIcon,
  ClipboardDocumentIcon,
  WalletIcon,
  Bars3CenterLeftIcon,
} from '@heroicons/react/24/outline';

export const sidebar = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: Bars3CenterLeftIcon,
    current: false,
  },
  {
    name: 'Deliveries',
    href: '/deliveries',
    icon: TruckIcon,
    current: false,
  },
  {
    name: 'Orders',
    href: '#',
    icon: ArchiveBoxIcon,
    current: false,
  },
  {
    name: 'Payments',
    href: '#',
    icon: WalletIcon,
    current: false,
  },
  {
    name: 'Reports',
    href: '#',
    icon: ClipboardDocumentIcon,
    current: false,
  },
];
