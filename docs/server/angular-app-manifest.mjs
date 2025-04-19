
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/book-for-well-wishers/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/book-for-well-wishers/wishers",
    "route": "/book-for-well-wishers"
  },
  {
    "renderMode": 2,
    "route": "/book-for-well-wishers/wishers"
  },
  {
    "renderMode": 2,
    "route": "/book-for-well-wishers/list-wishers"
  },
  {
    "renderMode": 2,
    "route": "/book-for-well-wishers/promptpay"
  },
  {
    "renderMode": 2,
    "route": "/book-for-well-wishers/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 524, hash: '3ee0bf5a983724b1064f2558d4b9d4268cfd14e16e26f4b816542f6b034545af', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1037, hash: '20dbb28088b8c42728eac79a3fc91fbc174b608e707ee20d57e9340f79be9400', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'list-wishers/index.html': {size: 20982, hash: 'a946da9ad0d6d9e0a3d161de2177d41850e4a377fe1c058b9f5038c7931f907b', text: () => import('./assets-chunks/list-wishers_index_html.mjs').then(m => m.default)},
    'promptpay/index.html': {size: 20982, hash: 'a946da9ad0d6d9e0a3d161de2177d41850e4a377fe1c058b9f5038c7931f907b', text: () => import('./assets-chunks/promptpay_index_html.mjs').then(m => m.default)},
    'wishers/index.html': {size: 20982, hash: 'a946da9ad0d6d9e0a3d161de2177d41850e4a377fe1c058b9f5038c7931f907b', text: () => import('./assets-chunks/wishers_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
