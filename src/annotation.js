(function (global, factory) {

    global.isWindow = typeof Window !== 'undefined' && global instanceof Window;

    var rqr = function (moduleName, moduleExported) {
        return global.isWindow ? global[moduleName] : (moduleExported ? require(moduleExported) : require(moduleName));
    };

    factory(global);

})(typeof module === 'object' && typeof module.exports === 'object' ? module.exports : this, function (global) {

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
        console.log(9785464)
    };


    module.exports = annotation;

});