(function(global, engine) {
    if(typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? engine(global, true) :
            function() {
                var
                    jsdom = require('jsdom').jsdom,
                    jQueryFactory = require('jquery')
                ;
                if(!jsdom) {
                    throw new Error('Lace requires jsdom installed.')
                }
                if(!jQueryFactory) {
                    throw new Error('Lace requires jQuery installed.')
                }
                return engine(global, undefined, jsdom, jQueryFactory);
            }();
    } else {
        //this 'else' block will render in browser end
        if(!jQuery) {
            throw new Error('Lace requires jQuery loaded.')
        }
        engine(global);
    }
// Pass this if window is not defined yet
}(typeof window === "undefined" ? this : window, function(window, noGlobal, jsdom, jQueryModule) {

    'use strict';

    var
        lace,

        version = '1.0.0',

        type = {
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
            taglets: {}
        }

    ;

    var Lace = function(window) {
        this.window = window;
        this.jQuery = typeof jQueryModule === 'undefined' ? window.jQuery : jQueryModule(window);
    };

    Lace.prototype = {

        version: version,

        constructor: Lace,

        jq: function() {
            console.log(this.jQuery(this.window.document).find('h1').text())
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

    lace = function(doc) {
        if(typeof doc === 'undefined') {
            //for browser
            if(warehouse.singleton == null) {
                warehouse.singleton = new Lace(window);
            }
            return warehouse.singleton;
        }
        //for server
        window = jsdom(doc).defaultView;
        return new Lace(window);
    };

    lace.taglet = function(name, def) {
        /* only support object type def of taglet
         TODO: initialize support for function type def */
        if(typeof def !== type.object) {
            warehouse.taglets[name] = new Taglet(name, def);
        }
        return warehouse.taglets[name];
    };

    lace.extendTaglet = function(name, def) {
        //TODO: implement to extend existing taglet
    };

    /**
     * initializing lace itself
     * */
    (function() {

        lace.taglet('let', {})

    })();

    if(typeof noGlobal === "undefined") {
        window.lace = lace;
    }

    return lace;

}));