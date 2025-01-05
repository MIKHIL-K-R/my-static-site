
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
    'index.csr.html': {size: 524, hash: '8d8224f28e6937403660e709dc8fb3b1b9eea424540dce01b2ab1269a343a293', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1037, hash: '2bfe9d91cd76e60c7f1c0d07907078cff489152d7ca7fc75cddf4ae1c1872732', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14849, hash: '412991415f6b0c7b215ed23fc0d25783534c1da81950eee2ce49417c0d55abfb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
