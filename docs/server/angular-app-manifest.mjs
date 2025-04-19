
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
    'index.csr.html': {size: 524, hash: 'fedc76b3175b9920347f63e002dd94736ccab41e2fa96fe02d116cb89aa02e32', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1037, hash: '687af03cb5b9b4fdd65feca927b63014bf5e8bfc28a9e4b039d1b781331c9128', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'promptpay/index.html': {size: 20966, hash: 'b8c48e5982f5f37aa3084fa1f7b67bc6d56fa5244762abdf258a386460df9da0', text: () => import('./assets-chunks/promptpay_index_html.mjs').then(m => m.default)},
    'list-wishers/index.html': {size: 20976, hash: 'e83d47888d9529f695d7e656d56490307d05390c56085826c51645d538f09ef6', text: () => import('./assets-chunks/list-wishers_index_html.mjs').then(m => m.default)},
    'wishers/index.html': {size: 20961, hash: 'f13c424daef44a9c9a994ba0562b84b92c01a92c94c6365dbfc050c0cf2bbd68', text: () => import('./assets-chunks/wishers_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
