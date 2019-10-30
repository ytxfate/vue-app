/**
 * npm i webpack webpack-dev-server -D
 * npm i html-webpack-plugin -D
 * npm i -D webpack-cli
 * npm i style-loader css-loader -D
 * npm i less less-loader -D // 若需要则安装
 * npm i sass-loader node-sass -D
 * npm i url-loader file-loader -D
 * npm i -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties
 * npm i vue-loader vue-template-compiler -D
 */

var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/main.js'), // 入口文件
  output: {
    path: path.join(__dirname, './dist'), // 输出目录
    filename: 'bundle.js' // 输出文件名
  },
  plugins: [ // 所有 webpack 插件的配置节点
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'), // 模板文件路径
      filename: 'index.html', // 生成的内存中页面的名称
      favicon: path.join(__dirname, './public/favicon.ico')
    }),
    new VueLoaderPlugin(),
    new CompressionPlugin({
      test: /.js$|.html$|.css/, // 匹配文件名
      threshold: 10240, // 对超过10k的数据进行压缩
      deleteOriginalAssets: false // 是否删除原文件
    })
  ],
  module: { // 配置第三方 loader 模块
    rules: [ // 配置第三方模块的匹配规则
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 处理 css 文件
      // { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 处理 less 文件
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 处理 sass 文件
      { test: /\.(jpg|png|gif|bmp|jpeg|ioc)$/, use: 'url-loader?limit=10000&name=[name]-[hash:8].[ext]' }, // 处理图片路径
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: ['url-loader'] }, // 处理字体文件
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 处理 js 文件
      { test: /\.vue/, use: 'vue-loader' } // 处理 vue 文件
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js',
      '@': path.join(__dirname, './src/')
    }
  }
}
