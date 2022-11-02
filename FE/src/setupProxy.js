const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://15.164.251.234',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};
