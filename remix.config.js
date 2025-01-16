/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  // ignoredRouteFiles: ["**/.*"],
  ignoredRouteFiles: ['.*', '**/__tests__/**'],
  server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
  serverBuildPath: "api/index.js",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  tailwind: true,
  future: {
    v2_errorBoundary: true,
    v2_headers: true,
    // v2_meta: false,
    v2_normalizeFormMethod: true,
    v2_routeConvention: false,
  },
};