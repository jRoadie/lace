'use strict';

var
    fs = require('fs'),
    cheerio = require('cheerio'),
    scope = require('../../src/scope.js')
    ;


fs.readFile('./dom.x.html', {}, function (err, content) {
    var $ = cheerio.load(content);
    $('body #main').attr('hao', 'kao');
    console.log($('body').html())
});

//console.log('#test scope completed.');