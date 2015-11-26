var
    http = require('http'),
    fs = require('fs'),
    path = require('path'),
    conf = require('../../config'),
    //lace = require(conf.dir.dist + '/lace')['default'], //have to use default to import es6 default export
    lace = require(conf.dir.src + '/lace'),
    glace = lace();

var controllers = {
    '/index': function () {
        glace.render('<h1>Hello World</h1>');
        return '<h1>Hello World</h1>';
    }
};

http.createServer(function (req, res) {
    try {
        console.log('Request for ..... ' + req.url);
        res.writeHead(200, {"Content-Type": "text/html"});
        var controller = controllers[req.url == '/' ? '/index' : req.url];
        res.end(typeof controller === 'function' ? controller(req, res) : '');
    } catch(e) {
        console.log(e.message);
    }
}).listen(8007);

console.log("Server running at http://localhost:8007/");