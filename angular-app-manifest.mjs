
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5357, hash: 'd0c2c7cffc9ad15ae09bcbfcface4ef396d614f111f43d1c9df46f5c0bb42013', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1000, hash: '11c4a92de40357dc5a77d6d3d5da475fcbc8544d830a5e85bac7da9e13ccf375', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31919, hash: 'c2db43b840edfecad7b316c7e7abcf46172cc9f30a3107e7b092d1dfc161a739', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-R2UECZ3T.css': {size: 304965, hash: 'LwNRi+cA+jM', text: () => import('./assets-chunks/styles-R2UECZ3T_css.mjs').then(m => m.default)}
  },
};
