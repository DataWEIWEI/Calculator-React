const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

    app.use('/api', createProxyMiddleware({
        target: 'http://localhost:3000',
        changeOrigin: true,
    }));

    app.use('/api2', createProxyMiddleware({
        target: 'https://app5593.acapp.acwing.com.cn/',
        changeOrigin: true,
        pathRewrite: { // 路径替换
            '^/api2': '/calculator', // axios 访问/api2 == target + /api
        }
    }));

};