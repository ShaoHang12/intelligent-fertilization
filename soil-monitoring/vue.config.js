module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://semghh.xyz:10086/content1-2.0/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}