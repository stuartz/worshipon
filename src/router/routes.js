
const routes = [
  {
    path: '/',
    component: () => import('layouts/BaseMainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/todo',
    component: () => import('layouts/BaseMainLayout.vue'),
    children: [{
      path: '',
      name: 'todo',
      component: () => import('pages/Todo.vue'),
      meta: {
        requiresAuth: true
      }
    }]
  },
  {
    path: '/auth',
    component: () => import('layouts/BaseMainLayout.vue'),
    children: [{
      path: '',
      name: 'auth',
      component: () => import('pages/Auth.vue'),
      meta: {
        requiresAuth: false
      }
    }]
  },
  {
    path: '/profile',
    component: () => import('layouts/BaseMainLayout.vue'),
    children: [{
      name: 'profile',
      path: '',
      component: () => import('pages/Profile.vue'),
      meta: {
        requiresAuth: true
      }
    }]
  },
  {
    path: '/privacy',
    component: () => import('layouts/BaseMainLayout.vue'),
    children: [{
      name: 'privacy',
      path: '',
      component: () => import('pages/Privacy.vue'),
      meta: {
        requiresAuth: false
      }
    }]
  },
  {
    path: '/terms_conditions',
    component: () => import('layouts/BaseMainLayout.vue'),
    children: [{
      name: 'terms_conditions',
      path: '',
      component: () => import('pages/Terms_conditions.vue'),
      meta: {
        requiresAuth: false
      }
    }]
  },
  {
    path: '/DCMA',
    component: () => import('layouts/BaseMainLayout.vue'),
    children: [{
      name: 'dcma',
      path: '',
      component: () => import('pages/DCMA.vue'),
      meta: {
        requiresAuth: false
      }
    }]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
