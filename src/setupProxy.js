const proxy = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
      proxy(
          '/api/v1',
          {
            target: 'http://51.250.65.73',
            changeOrigin: true
          }
      )
  );
};
