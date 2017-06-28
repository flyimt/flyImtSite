module.exports = {
  dev: {
    proxyTable: {
      '/index': {
        target: 'localhost:8080',
        changeOrigin: true
      }
    },
    port: 8080
  }
}
