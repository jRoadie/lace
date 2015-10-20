(function (global) {

    'use strict';

    var noWindow = typeof Window === 'undefined';

    var rqr = function (moduleName, moduleExported) {
        if (noWindow) {
            return moduleExported ? require(moduleExported) : require(moduleName);
        }
        return global[moduleName];
    };

    (function() {

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

    })();

})(typeof module === 'object' && typeof module.exports === 'object' ? module.exports : this);