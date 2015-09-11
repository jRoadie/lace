(function(global, engine) {
    if(typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? engine(global.jQuery, true) :
            function() {
                var cheerio = require('cheerio');
                if(!cheerio) {
                    throw new Error('Lace requires cheerio installed.')
                }
                return engine(cheerio);
            }();
    } else {
        //this 'else' block will render in browser end
        if(!global.jQuery) {
            throw new Error('Lace requires jQuery loaded.')
        }
        engine(global.jQuery);
    }
// Pass this if window is not defined yet
}(typeof window === "undefined" ? this : window, function($, noGlobal) {

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

        defaults = {},

        warehouse = {
            //singleton lace for browser end
            singleton: null,
            compiled_dom: null,
            taglets: {},
            scriptlets: {}
        }

    ;

    var Node = function() {
        this.parent = parent;
        this.children = [];
        this.taglet = undefined;
        this.annotations = [];
        this.scope = undefined;
    };

    Node.prototype = {
        __lace__ : {
            compiledElement: undefined
        },
        compiledElement: function() {
            return this.__lace__.compiledElement;
        }
    };

    var Scope = function() {
        this.parent = parent;
    };

    Scope.prototype = {

    };

    var Lace = function() {
    };

    Lace.prototype = {

        version: version,

        constructor: Lace,

        compile: function() {

        },

        render: function(data) {

        },

        taglet: function(name, def) {
            /* only support object type def of taglet
             TODO: initialize support for function type def */
            if(typeof def !== type.object) {
                warehouse.taglets[name] = new Taglet(name, def);
            }
            return warehouse.taglets[name];
        },

        tagletExtend: function(name, def) {
            //TODO: implement to extend existing taglet
        },

        annotation: function(name, def) {

        },

        scriptlet: function(name, def) {

        }

    };

    var Taglet = function(name, def) {
        this.name = def.name;
    };

    Taglet.prototype = {

        constructor: Taglet,

        compile: function() {

        },

        render: function() {

        }

    };

    var Annotation = function(name, def) {
        this.name = name;

    };

    Annotation.prototype = {

        constructor: Annotation,

        compile: function() {

        },

        execute: function() {

        }

    };

    var Scriptlet = function(name, def) {
        this.name = name;
    };

    Scriptlet.prototype = {

        constructor: Scriptlet,

        compile: function() {

        },

        execute: function() {

        }

    };

    lace = function() {
        return warehouse.singleton;
    };

    /**
     * initializing lace itself
     * */
    (function() {

        var lace = warehouse.singleton = new Lace();

        lace.taglet('let', {});

        lace.annotation('for', {
            compile: function(node) {

            }
        })

    })();

    if(typeof noGlobal === type.undefined) {
        window.lace = lace;
    }

    return lace;

}));