"use strict";

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");    //独立打包出CSS
const HtmlWebpackPlugin = require("html-webpack-plugin");

let etxcss = new ExtractTextPlugin('./[name].css');
let etxhtml = new HtmlWebpackPlugin({
    template: './template.html',
});

module.exports = {
    entry: "./src/main.js",   //多文件{ }
    output: {
        path: __dirname + "/dist/",  //打包输出路径
        filename: "bundle.js",       // 打包输出文件  多文件[xx: [name].js, xx2: [name].js]
        //publicPath: 'http://localhost:8080/js/'  //启动本地服务后的根目录
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract("style", "css!less")
            },
            {test: /.(png|jpg)$/, loader: "url-loader?limit=8192"} //图片
        ]
    },
    resolve: {
        // 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee']
    },
    plugins: [
        etxcss, etxhtml
    ]
};