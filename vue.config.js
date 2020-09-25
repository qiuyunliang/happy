module.exports = {
  css: {
    loaderOptions: {
      less: {},
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.21.21.102:8989/v1/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
