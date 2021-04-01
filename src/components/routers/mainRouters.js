import { lazy } from 'react';

export const mainRouters = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('../home/Home')),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    exact: true,
    component: lazy(() => import('../home/Home')),
  },
  {
    path: '/contacts/:id',
    name: 'ContactsId',
    exact: true,
    component: lazy(() => import('../home/Home')),
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    exact: true,
    component: lazy(() => import('../home/Home')),
  },
  {
    path: '/logIn',
    name: 'Login',
    exact: true,
    component: lazy(() => import('../home/Home')),
  },
  {
    path: 'logout',
    name: 'Logout',
    exact: true,
    component: lazy(() => import('../home/Home')),
  },
  {
    path: 'sigIn',
    name: 'SigIn',
    exact: true,
    component: lazy(() => import('../home/Home')),
  },
];
