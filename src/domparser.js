(function(global, engine) {
    if(typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? engine(global.jQuery, true) :
            function() {
                var cheerio = require('cheerio');
                cheerio.fs = require('fs');
                if(!cheerio) {
                    throw new Error('Lace requires cheerio installed.')
                }
                return engine(cheerio, undefined, true);
            }();
    } else {
        //this 'else' block will render in browser end
        if(!global.jQuery) {
            throw new Error('Lace requires jQuery loaded.')
        }
        engine(global.jQuery);
    }
// Pass this if window is not defined yet
}(typeof window === "undefined" ? this : window, function($, noGlobal, isServer) {

    'use strict';

    module.exports.$ = $;

}));
