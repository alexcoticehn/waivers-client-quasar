const routes = [
  {
    path: '/',
    component: () => import('layouts/LandingLayout.vue'),
    children: [
      { 
        path: '', 
        name: 'Landing',
        component: () => import('pages/Landing.vue') 
      },
      {
        path: '/forgot',
        name: 'ForgotPassword',
        component: () => import('pages/ForgotPassword.vue')
      },
      {
        path: '/reset/:token',
        name: 'ResetPassword',
        component: () => import('pages/ResetPassword.vue')
      }
    ]
  },
  {
    path: '/roster',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'MyRoster',
        component: () => import('pages/Roster.vue')
      },
      {
        path: ':id',
        name: 'OpposingRoster',
        component: () => import('pages/Roster.vue')
      },
      {
        path: '/simulator',
        name: 'LotterySimulator',
        component: () => import('pages/LotterySimulator.vue')
      }
    ]
  }
]

export default routes
