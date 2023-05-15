const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  //app.use는 미들웨어를 사용할 떄, 사용한다.
  // '/api/v1'으로 요청이 오면, proxy 미들웨어를 실행해라.
  app.use('/api/v1', createProxyMiddleware({
    // 스프링부트 포트가 8080 포트이니까
    target: 'http://localhost:8080',
       changeOrigin: true,
  }))
};
