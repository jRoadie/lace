(function (global) {

    'use strict';

    var noWindow = typeof Window === 'undefined';

    var rqr = function (moduleName, moduleExported) {
        if (noWindow) {
            return moduleExported ? require(moduleExported) : require(moduleName);
        }
        return global[moduleName];
    };

    (function () {

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

        var annotation = function(name, def) {

        };


        global.annotation = annotation;

    })();

})(typeof module === 'object' && typeof module.exports === 'object' ? module.exports : this);