const modules={};
const uglify = require('uglifyjs-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin");
modules.content = {
    rules: [
        {
            test: /\.css$/,
            use: extractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            })
        }, {
            test: /\.(png|jpg|gif)/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 5000,
                    outputPath: 'image/',
                }
            }]
        }, {
            test: /\.(htm|html)$/i,
            use: [{
                loader: 'html-withimg-loader'
            }]
        }, {
            test: /\.less$/,
            use: extractTextPlugin.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }],
                fallback: "style-loader"
            })
        }, {
            test: /\.scss$/,
            use: extractTextPlugin.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                fallback: "style-loader"
            })
        },{
            test:/\.jsx|js/,
            use:{
                loader:'babel-loader',
            },
            exclude:/node_modules/
        }
    ]
};
module.exports = modules;