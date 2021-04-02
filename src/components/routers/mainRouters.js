import { lazy } from 'react';

export const mainRouters = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() => import('../pages/home/Home')),
    private: false,
    restricted: false,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    exact: true,
    component: lazy(() => import('../pages/tacks/Tasks')),
    private: true,
    restricted: false,
  },

  {
    path: '/profile/:id',
    name: 'Profile',
    exact: false,
    component: lazy(() => import('../pages/profile/Profile')),
    private: true,
    restricted: true,
  },
  {
    path: '/signIn',
    name: 'Login',
    exact: true,
    component: lazy(() => import('../pages/sigiIn/SignIn')),
    private: false,
    restricted: true,
  },

  {
    path: '/signUp',
    name: 'LogOut',
    exact: true,
    component: lazy(() => import('../pages/signUp/SignUp')),
    private: false,
    restricted: true,
  },
];
