const http = require('http');
const { listen } = require('./App');

const app = require('./App');
const config = require('./configs/default');

const port = config.port;

const server = http.createServer(app);
server.listen(port);

console.log('App is running on 127.0.0.1:' + port);