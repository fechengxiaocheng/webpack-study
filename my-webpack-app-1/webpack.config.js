const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                   'style-loader',
                   'css-loader' 
                ]
            },
            {
                test: /\.(png|svg|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff2|woff|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}