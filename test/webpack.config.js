const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // 定义输出文件所在的文件夹名
        filename: 'bundle.js' // 定义输出文件的名字
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};