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

        __lace__: {

        },

        compile: function() {

        },

        render: function(html, data) {

        },

        taglet: function(name, def, extend) {
            /* only support object type def of taglet
             TODO: initialize support for function type def */
            if(def == 'extend') {
                //TODO: implement to extend existing taglet with arg extend
            }
            if(typeof def === type.object) {
                warehouse.taglets[name] = new Taglet(name, def);
            }
            return warehouse.taglets[name];
        },

        annotation: function(name, def) {
            if(def === 'extend') {
                //TODO:
            }
            if(typeof def == type.object) {
                warehouse.annotations[name] = new Annotation(name, def);
            }
            return warehouse.annotations[name];
        },

        scriptlet: function(name, def) {

        }

    };

    var Taglet = function(name, def) {
        this.name = name;
        this.__lace__.template = def.template;
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
            var self = this;
            if(typeof self.template === type.string) {
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

    var Annotation = function(name, def) {
        this.name = name;
        this.def = def;
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

        execute: function(data, annotations, taglet, scope) {
            if(typeof this.def.execute === type.func) {
                this.def.execute(data, annotations, taglet, scope)
            }
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

        lace.taglet('let', {});

        lace.annotation('for', {
            compile: function($el) {

            },
            execute: function(annotation, taglet, scope) {
                if(typeof data )
            }
        })

    })();

    if(typeof noGlobal === type.undefined) {
        window.lace = lace;
    }

    return lace;

}));