
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-static-site/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-static-site"
  }
],
  assets: {
    'index.csr.html': {size: 524, hash: 'a7782be2bf6ac73c40498d980e328e62aadf9d95d610aa20af0f77d17cde6591', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1037, hash: '47e30950736d86f962893188dc33b7dfd408b167436b4ef3fc73b576dc86f220', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14926, hash: '8287bad2acc97bea1598ba2f1318fd0c52dda3e914e7485c91fcceb5c354eae8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
