const path = require('path');
const devServer = {};
devServer.content = {
    contentBase: path.resolve('dist'),
    host: '192.168.1.102',
    compress: true,
    port: 1717
};
module.exports = devServer;
