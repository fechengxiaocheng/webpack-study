const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = new express();
const config = require('./webpack.config');
const compile = webpack(config);

app.use(webpackDevMiddleware(compile, {
    publicPath: config.output.publicPath
}));

app.listen(8000, function() {
    console.log('listen 8000.....')
});

