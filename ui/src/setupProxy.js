const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');

dotenv.config();

const ip = process.env.IP || 'localhost';
const port = process.env.PORT || 3001;

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://${ip}:${port}`,
      changeOrigin: true,
    })
  );
};