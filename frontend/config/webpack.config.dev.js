const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: "development",
  // development 환경에서만 실행되어야함!
  // production 에서 실행해도 되지만, 변경 사항이 적용되는데 시간이 오래걸림.
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    // 전체 페이지 리로딩
    inline: true,
    // 부분 리로딩
    hot: true,
    host: 'localhost',
    port: 5500,
    // Enable gzip compression of generated files.
    compress: true,
    // It is important to tell WebpackDevServer to use the same "root" path
    // as we specified in the config. In development, we always serve from /.
    publicPath: '/',
    historyApiFallback: true,
  },
})