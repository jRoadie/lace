(function () {

    var
        scriptlet,
        opts = {
            prefix: '${',
            suffix: '}'
        },
        warehouse= {
            scope: undefined
        }
        ;

    var Scriptlet = function (opts) {
        //TODO: extend default opts with @param opts
    };

    Scriptlet.prototype = {

        constructor: Scriptlet,

        compile: function () {

        },

        execute: function (expr) {
            var REX_ALPHANUMERIC = /([0-9a-zA-Z$_.]+)/g; //only alphanumeric with $, _ and .
            var REX_START_WITH_NUMBER = /^[0-9#].*$/; //starts with digit or #
            var KEY_WORDS = ['this', 'var']; //TODO: add all keywords
            var listOfVars = expr.match(REX_ALPHANUMERIC);
            if(listOfVars) {
                for(var v in listOfVars) {
                    if(KEY_WORDS.contains(v) || REX_START_WITH_NUMBER.test(v)) {
                        continue;
                    }
                    expr.replace(new RegExp(v, 'g'), '__scope.valOf(' + v + ')');
                }
            }
            return (new Function('__scope', expr))(this)
        }

    };

    Scriptlet.parse = function (text) {

    };

    scriptlet = function(opts) {

    };

    scriptlet.scope = function(data) {
        var scope = require('../../src/scope');

    };

    module.exports = Scriptlet;

})();