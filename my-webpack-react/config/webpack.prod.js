const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].js',
    },
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.BannerPlugin('版权必究，程小程！'),
    ]
});