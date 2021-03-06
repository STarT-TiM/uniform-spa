function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'home', component: page('home.vue') },

  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  { path: '/home', name: 'home', component: page('home.vue') },

  { path: '/category', name: 'category', component: page('category.vue') },

  { path: '/product', name: 'product', component: page('product.vue') },

  { path: '/studio', name: 'studio', component: page('catalog/studio/index.vue') },

  { path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
    ] },

  { path: '/admin',
    component: page('admin/index.vue'),
    children: [
      { path: '', redirect: { name: 'admin.home' } },
      { path: 'home', name: 'admin.home', component: page('admin/home.vue') },
      { path: 'product', name: 'admin.product', component: page('admin/product/index.vue') },
      {
        path: 'category',
        component: page('admin/index.vue'),
        children: [
          {
            path: '',
            name: 'admin.category',
            component: page('admin/category/index.vue')
          },
          {
            path: 'create',
            name: 'category.create',
            props: { isEdit: false },
            component: page('admin/category/edit.vue')
          },
          {
            path: ':id(\\d+)/edit',
            name: 'category.edit',
            props: { isEdit: true },
            component: page('admin/category/edit.vue')
          }
        ]
      }
    ] },

  { path: '*', component: page('errors/404.vue') }
]
