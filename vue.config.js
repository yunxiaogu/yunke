module.exports = {
  // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  devServer: {
    open: false, //是否自动弹出浏览器页面
    host: "www.yunke.com",
    port: '80',
    https: false, //是否使用https协议
    hotOnly: false, //是否开启热更新
    proxy: {
      '/api': {
        target: 'http://www.yunke.com/api', //API服务器的地址
        ws: false, // 是否启用websockets
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
