// 向外部暴露一个打包的配置对象，webpack 基于Node 构建得，所以 webpack 支持所有Node API 和 语法
 
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') // 导入在内存中自动生成 index 页面插件

// 创建一个插件得实例对象
const htmlPlugin = new HtmlWebPackPlugin ({
    template : path.join(__dirname, './src/index.html'),// 源文件 
    filename : 'index.html' // 生成内存中的首页名称

})

module.exports = {
    mode : 'development', // development production
    // 在webpack 4.x 中，有一个很大的特性，就是约定大于配置， 约定，默认的打包入口路径 src -> index.js
    plugins : [
        htmlPlugin
    ]
} 