var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

webpackConfig.output.filename = 'react-semantic-datatable.min.js';
webpackConfig.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
];

module.exports = webpackConfig;
