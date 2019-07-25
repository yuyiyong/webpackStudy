const entry = require('./webpack_config/entry_webpack');
const output = require('./webpack_config/output_webpack');
const moduls = require('./webpack_config/module_webpack');
const plugins = require('./webpack_config/plugin_webpack');
const devServer = require('./webpack_config/devServer_webpack');
console.log(encodeURIComponent("dui______"+output.content));
var website = {
    publicPath: "http://192.168.1.102:1717/"
}

module.exports = {
    devtool:'eval-source-map' ,
    entry: entry.path,
    output: output.content,
    module:moduls.content ,
    plugins: plugins.content,
    devServer:devServer.content
};