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

    var
        lace,

        version = '1.0.0',

        type = {
            undefined: typeof undefined,
            object: typeof {},
            func: typeof function() {
            },
            string: typeof "",
            number: typeof 0
        },

        defaults = {
            opts: {
            }
        },

        warehouse = {
            singleton: null,
            compiled_dom: null,
            laces: {
                global: undefined
            },
            taglets: {}
        },

        defs = {

        }

    ;

    var Lace = function() {
    };

    Lace.prototype = {

        version: version,

        constructor: Lace,

        __lace__: {
            definitions: {
                annotations: {},
                taglets: {}
            },
            instances: {
                annotations: {},

                taglets: {}
            }
        },

        /**
         *
         * @param name
         * @param def
         * @param isolated, true when make available only for this lace
         * @returns {*}
         */
        annotation: function(name, def, isolated) {
            if(typeof def === type.object) {
                this.__lace__.definitions.annotations[name] = def;
            }
            return this.__lace__.instances.annotations[name];
        },

        taglet: function(name, def, extend) {
            /* only support object type def of taglet
             TODO: initialize support for function type def */
            if(def == 'extend') {
                //TODO: implement to extend existing taglet with arg extend
            }
            if(typeof def === type.object) {
                this.__lace__.definitions.taglets[name] = def;
            }
            return this.__lace__.instances.taglets[name];
        },

        compile: function() {

        },

        render: function(html, data) {

        }

    };

    Lace.init = function(name) {
        if(warehouse.laces[name] === undefined) {
            warehouse.laces[name] = new Lace();
        }
        return warehouse.laces[name];
    };

    Lace.load = function(filepath, callback) {
        if(isServer) {
            $.fs.readFile(filepath, function(err, bytes) {
                if(err) throw err;
                callback(bytes.toString());
            })
        }
        //TODO: implement ajax loading of remote templates
    };

    lace = function(name) {
        if(name === undefined) {
            name = 'global';
        }
        return Lace.init(name);
    };

    /**
     * initializing lace global
     * */
    (function() {

        var lace = lace();

        lace.taglet('let', {});

        lace.annotation('import', {
            compile: function($el) {

            },
            execute: function() {
                //if(typeof data )
            }
        });

    })();

    if(typeof noGlobal === type.undefined) {
        window.lace = lace;
    }

    return lace;

}));