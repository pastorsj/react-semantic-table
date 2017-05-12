var path = require('path');
var webpack = require('webpack');

module.exports = {
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
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    },
};