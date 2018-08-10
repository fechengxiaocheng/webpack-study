const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js',
        another: './src/another-module.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '热模块替换+生产环境部署+代码分离'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ],
    optimization: {
        splitChunks: {
        chunks: 'all'
        }
    },
    // optimization: {
    //     splitChunks: {
    //       chunks: "all", 
    //       minSize: 0,   
    //       name: 'common',      
    //       minChunks: 1,             
    //     },
    //     minimizer: [
    //         new UglifyJsPlugin({
    //           cache: true,
    //           parallel: true,
    //           sourceMap: true // set to true if you want JS source maps
    //         }),
    //         new OptimizeCSSAssetsPlugin({
    //             assetNameRegExp: /\.css\.*(?!.*map)/g,  //注意不要写成 /\.css$/g
    //             cssProcessor: require('cssnano'),
    //             cssProcessorOptions: {
    //                 discardComments: { removeAll: true },
    //                 autoprefixer: false
    //             },
    //             canPrint: true
    //         })
    //       ]
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    }
}