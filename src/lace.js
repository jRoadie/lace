(function(global, factory) {

    if(typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
                if(!w.document) {
                    throw new Error("jQuery requires a window with a document");
                }
                return factory(w);
            };
    } else {
        factory(global);
    }

// Pass this if window is not defined yet
}(typeof window === "undefined" ? this : window, function(window, noGlobal) {

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
            singleton: null,
            taglets: {}
        }

        ;

    var Lace = function() {

    };

    Lace.prototype = {

        version: version,

        constructor: Lace

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

    lace = function() {
        if(warehouse.singleton == null) {
            warehouse.singleton = new Lace();
        }
        return warehouse.singleton;
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