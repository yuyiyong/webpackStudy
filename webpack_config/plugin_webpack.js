const glob = require('glob');
const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin");
const purifyCssPlugin = require("purifycss-webpack");
const plugins={};
plugins.content = [
    //new uglify(),
    new htmlPlugin({
        minify: {
            removeAttributeQuotes: true
        },
        hash: true,
        template: './src/index.html'
    }),
    new extractTextPlugin("/css/index.css"),
    new purifyCssPlugin({
        paths: glob.sync(path.join("src/*.html"))
    })
];
module.exports = plugins;