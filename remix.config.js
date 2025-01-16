/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['.*', '**/__tests__/**'],
  serverBuildPath: "build/index.js",
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  server: undefined,
  tailwind: true,
  future: {
    v2_errorBoundary: true,
    v2_headers: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: false,
  },
};