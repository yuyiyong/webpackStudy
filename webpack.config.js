const path = require('path');
const glob = require('glob');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin");
const purifyCssPlugin = require("purifycss-webpack");
let website = {
    publicPath:"http://192.168.31.26:1717/"
}
module.exports={
    entry:{
        entry:'./src/entry.js',
        //entry2:'./src/entry2.js',

    },
    output: {
        path: path.resolve('dist'),
        filename: "[name].js",
        publicPath: website.publicPath
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: extractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    { 
                        loader:"css-loader" ,
                        options: { importLoaders: 1 }
                     },
                    {
                        loader: 'postcss-loader'
                      }
                    ]
              })
            },{
               test:/\.(png|jpg|gif)/ ,
               use:[{
                   loader:'url-loader',
                   options:{
                       limit:5000,
                       outputPath:'image/',
                   }
               }]
            },{
                test:/\.(htm|html)$/i,
                use:[{
                    loader:'html-withimg-loader'
                }]
            },{
                test:/\.less$/,
               use:extractTextPlugin.extract({
                   use:[{
                       loader: "css-loader"
                   },{
                       loader:"less-loader"
                   }],
                   fallback:"style-loader"
               })
            },{
                test:/\.scss$/,
                use:extractTextPlugin.extract({
                    use:[{
                        loader:"css-loader"
                    },{
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }
          ]
    },
    plugins: [
      //new uglify(),
      new htmlPlugin({
          minify:{
              removeAttributeQuotes:true
          },
          hash:true,
          template:'./src/index.html'
      }),
      new extractTextPlugin("/css/index.css"),
      new purifyCssPlugin({
          paths:glob.sync(path.join("src/*.html"))
      })

    ],
    devServer: {
        contentBase:path.resolve('dist'),
        host:'192.168.31.26',
        compress:true,
        port:1717
    },
}