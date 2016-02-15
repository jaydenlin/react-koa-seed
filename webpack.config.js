var path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        'index': './src/index.jsx'
    },
    output: {
        path: path.join(__dirname, 'dist/client'),
        publicPath: '/',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.jsx$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }, {
            test: /.*\.(gif|png|jpg)$/,
            loaders: ['image?optimizationLevel=7&interlaced=false']
        }]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css")

    ],
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //        //but get it from a global 'React' variable
        //'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};