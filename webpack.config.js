var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/client.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                },
            },
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.html$/, loader: 'html' }
        ]
    },
    devServer: {
        publicPath: 'http://127.0.0.1:8082/',
        contentBase: "./src/",
        hot: true,
        inline: true,
        headers: { 'Access-Control-Allow-Origin': '*' }
    },
    output: {
        path: __dirname + "/src/",
        filename: "client.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};
