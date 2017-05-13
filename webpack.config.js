'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: './src/SemanticDatatable.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'react-semantic-datatable.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};
