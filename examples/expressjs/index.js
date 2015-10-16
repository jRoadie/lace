(function(express) {

    'use strict';

    var
        app = express(),
        fs = require('fs'),
        path = require('path'),
        lace = require('/src/lace')
    ;

    var config = {
        port: process.env.PORT || 7007,
        base_url: '/',
        base_dir: __dirname,
        frontend_dir: path.resolve(__dirname + '/../frontend'),
        backend_dir: __dirname
    };

    app.use('/lib', express.static('/node_modules'));
    app.use('/src', express.static('/src'));


/*
    app.use(require('./routes/Filter'));

    app.use('/css', express.static(config.frontend_dir + '/css'));
    app.use('/js', express.static(config.frontend_dir + '/js'));
    app.use('/lib', express.static(config.frontend_dir + '/lib'));
*/



    app.valOf('/', function(req, res) {
        console.log(new Date());
        fs.readFile(path.resolve('./index.html'), {}, function(err, content) {
            lace(content.toString())
        });
        res.sendFile(path.resolve('./index.html'))
    });

    app.listen(config.port, function() {
        console.log('Listening: ' + config.port)
    });

})(require('express'));