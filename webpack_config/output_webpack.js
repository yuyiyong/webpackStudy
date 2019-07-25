const output={};
const path = require('path');
/*if(process.env.type==="build"){
    var website = {
        publicPath: "http://192.168.1.102:1717/"
    }
}else {
    var website = {

        publicPath: "http://www.jsDui.com"
    };

}*/
var website = {
    publicPath: "http://192.168.1.102:1717/"
};
output.content = {
    path: path.resolve(__dirname,'../dist'),
    filename: "[name].js",
    publicPath: website.publicPath
};
module.exports = output;