const path = require('path')

module.exports = {
  publicPath: './',
  outputDir: process.env.NODE_ENV === 'development' ? 'devdist' : 'dist',
  css: {
    loaderOptions: {
      sass: {
        //引入scss minxis全局样式方法
        prependData: `@import "@/assets/style/minxis.scss";`,
      },
    },
  },
  lintOnSave: false,
  productionSourceMap: true,
  devServer: {
    port: 3000,
    open: true,
    https: false,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  //将文件打包到static目录下
  //assetsDir: "static",
  configureWebpack: {
    // 覆盖webpack默认配置的都在这里
    resolve: {
      // 配置解析别名
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@a': path.resolve(__dirname, './src/assets'),
        '@s': path.resolve(__dirname, './src/assets/style'),
        '@i': path.resolve(__dirname, './src/assets/images'),
      },
    },
  },
}
