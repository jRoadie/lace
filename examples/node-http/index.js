var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    lace = require('../../dist/lace'),
    glace = lace(),
    mylace = lace('mylace');

var routes = {
    '/index': function () {

        return "<h1>Hello World</h1>";
    }
};

http.createServer(function (req, res) {
    console.log('Request for .....\n' + req.url);
    res.writeHead(200, {"Content-Type": "text/html"});
    var controller = routes[req.url == '/' ? '/index' : req.url];
    res.end(typeof controller === 'function' ? controller(req, res) : '');
}).listen(8007);

console.log("Server running at http://localhost:8007/");