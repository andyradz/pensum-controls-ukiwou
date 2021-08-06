import proxy from 'http-proxy-middleware';
const BACKEND = 'http://www.example.com';

export default app => {
  if (process.env.REACT_APP_STAGE === 'dev') {
    app.use(
      '/catalog',
      proxy({ target: BACKEND, changeOrigin: true, logLevel: 'debug' })
    );
  }
};
