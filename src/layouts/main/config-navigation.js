// routes
import { paths } from 'src/routes/paths';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Find mentor',
    icon: <Iconify icon="eva:search-fill" />,
    path: '/search-mentor',
  },
  {
    title: 'Favorites',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/favorites',
  },
  {
    title: 'History',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: '/history',
  },
  
];
