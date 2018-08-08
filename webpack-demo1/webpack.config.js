const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpachPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    // 使用source map为了更容易地追踪错误和警告,具体在哪个文件，而不是只在最终编译之后的bundle中
    devtool: 'inline-source-map',
    // 开启一个localhost:8080的本地服务，自动监听代码变化
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        // 每次逗清除掉原来的dist中的内容
        new CleanWebpachPlugin(['dist']),
        // 生成默认模板index.html，替换掉原有的
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedChunksPlugin(),
        new webpack.HotModuleReplacementPlugin()
        
    ],
    // 配置输出文件bundle的name，跟entry中的对应
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    },
}