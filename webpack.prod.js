var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var ManifestPlugin = require('webpack-manifest-plugin');

webpackConfig.output.filename = 'react-semantic-datatable.min.js';
webpackConfig.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            screw_ie8: true, // React doesn't support IE8
            warnings: false
        },
        mangle: {
            screw_ie8: true
        },
        output: {
            comments: false,
            screw_ie8: true
        }
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    })
];

module.exports = webpackConfig;