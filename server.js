const http = require('http');
const path = require('path');
const seams = require('seams');

let config;
try {
	config = require('./config.json');
} catch (e) {
	config = {};
}

const server = http.createServer(
  seams({
    secret: process.env.SECRET || config.SECRET,
    dir: path.join(__dirname, 'web/dist'),
    db: process.env.DB || config.DB,
		cache: 1
  })
);

server.listen(process.env.PORT || 8080);
