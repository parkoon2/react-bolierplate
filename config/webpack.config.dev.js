const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  name: "boilerpate",
  mode: "development",
  entry: ['@babel/polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        // 오른쪽에서 왼쪽으로 순으로 실행된다. 순서에 유의!
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        // 실제로 scss 파일을 css로 트랜스파일링 하는것은 node-sass 모듈이다.
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    // CSS 파일이 방대해지면 자바스크립트 파일에서 분리하는 것이 효율적일 수 있다.
    // bundle.js에 포함시키지 말고, 별도의 css 파일로 분리해서 하나의 파일로 번들링하자.
    new MiniCssExtractPlugin({
      // output 경로에 생성된다.
      filename: 'style.css'
    }),
    new CleanWebpackPlugin(),
  ]
};
