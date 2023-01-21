const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    https: false
    // start ngrok:
    // ngrok http https://localhost:8080 --host-header=rewrite
  }
})
