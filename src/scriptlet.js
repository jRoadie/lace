(function () {

    var
        scriptlet,
        opts = {
            prefix: '${',
            suffix: '}'
        },
        warehouse= {}
        ;

    var Scriptlet = function (opts) {
        //TODO: extend default opts with @param opts
    };

    Scriptlet.prototype = {

        constructor: Scriptlet,

        compile: function () {

        },

        execute: function (scope) {

        }

    };

    Scriptlet.parse = function (text) {

    };

    scriptlet = function() {

    };

    module.exports = Scriptlet;

})();