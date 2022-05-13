const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/signup', component: () => import('pages/SignupPage.vue') },
      { path: '/verify', component: () => import('pages/VerifyPage.vue') },
      {
        path: '/dashboard',
        component: () => import('pages/DashboardPage.vue'),
      },
      {
        path: '/edit',
        component: () => import('pages/EditPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
