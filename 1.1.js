var http = require('http');
var server = http.createServer(function (req, res) {
    console.log('req was made at' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain '});
    res.write('success i am listenig frm port 3000');
    res.end();
});
server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');