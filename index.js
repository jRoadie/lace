(function(express) {

    'use strict';

    var
        app = express()
        , path = require('path')
        , jsdom = require('jsdom')
        , window = jsdom.jsdom().parentWindow
        , $ = require('jquery')(window)
        , lace = require('./src/lace')
    ;

    var config = {
        port: process.env.PORT || 7007,
        base_url: '/',
        base_dir: __dirname,
        frontend_dir: path.resolve(__dirname + '/../frontend'),
        backend_dir: __dirname
    };

/*
    app.use(require('./routes/Filter'));

    app.use('/css', express.static(config.frontend_dir + '/css'));
    app.use('/js', express.static(config.frontend_dir + '/js'));
    app.use('/lib', express.static(config.frontend_dir + '/lib'));
*/



    app.get('/', function(req, res) {
        console.log(new Date());
        console.log($('<div></div>'))
        res.sendFile(path.resolve('./index.html'))
    });

    app.listen(config.port, function() {
        console.log('Listening: ' + config.port)
    });

})(require('express'));