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
            //singleton lace for browser end
            singleton: null,
            compiled_dom: null,
            taglets: {}
        },

        defs = {

        }

    ;

    var Scope = function(parent, current) {
        this.parent = parent;
        this.current = current;
    };

    Scope.prototype = {

        constructor: Scope,

        current: function() {

        },

        parent: function() {

        }

    };

    var Lace = function() {
        var root_scope = new Scope({});

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

        annotation: function(name, def) {
            if(def === 'extend') {
                //TODO:
            }
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

    var Annotation = function(name, value) {
        this.name = name;
        this.value = value;
    };

    Annotation.prototype = {

        constructor: Annotation,

        key: function() {
            //return annotation key
        },

        val: function() {
            //return current scope value
        },

        compile: function() {

        },

        execute: function() {
            if(typeof this.def.execute === type.func) {

            }
        }

    };

    var Taglet = function(name) {
        this.name = name;
        this.scope = {}; //local scope
        this.annotations = {};
        this.children = [];
    };

    Taglet.prototype = {

        constructor: Taglet,

        __lace__: {
            template: undefined
        },

        compile: function() {
            var self = this;
            self.resolveTemplate();
            $(self.__lace__.template)
        },

        render: function(data) {
            var self = this;
            if(typeof self.__lace__.template === type.undefined) {
                self.compile();
            }
        },

        resolveTemplate: function() {
            var def = lace;
            if(typeof self.__lace__.template === type.string) {
                //TODO: implement for inline template
                return;
            }
            if(!self.template instanceof Array) {
                throw new Error('Template should be inline or array of file paths');
            }
            for(var filepath in self.template) {
                Lace.load(filepath, function(content) {
                    self.template += content;
                });
            }
        }

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

    lace = function() {
        return warehouse.singleton;
    };

    /**
     * initializing lace itself
     * */
    (function() {

        var lace = warehouse.singleton = new Lace();

        lace.annotation('for', {
            compile: function($el) {

            },
            execute: function() {
                //if(typeof data )
            }
        });

        lace.taglet('let', {});
    })();

    if(typeof noGlobal === type.undefined) {
        window.lace = lace;
    }

    return lace;

}));