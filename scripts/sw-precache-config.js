module.exports = {
  staticFileGlobs: [
    "build/static/css/*.css",
    "build/static/js/*.js",
    "build/shell.html",
    "build/index.html"
  ],
  stripPrefix: "build",
  publicPath: ".",
  runtimeCaching: [
    {
      urlPattern: /api/,
      handler: "fastest"
    }
  ],
  navigateFallback: "/200.html"
};
