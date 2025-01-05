
export default {
  basePath: '/my-static-site/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
