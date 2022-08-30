import proxy from 'http-proxy-middleware';
 
export default function (app) {
  app.use(
      proxy(
          '/api/v1',
          {
            target: 'http://51.250.65.73',
            changeOrigin: true
          }
      )
  );
}
