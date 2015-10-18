(function () {

    var util = require('../../src/util');

    var
        current_scope = undefined,
        warehouse = {}
        ;

    var Scope = function (parent, data) {
        this.parent = parent;
        this.data = data;
    };

    Scope.prototype = {

        constructor: Scope,

        create: function (data) {
            current_scope = new Scope(current_scope, data);
        },

        valOf: function (variable) {
            var scope = this;
            var vars = variable.split('.');
            if(scope.parent === undefined) return;
            if(scope.data[vars[0]] === undefined) {
                //lookup in parent scope
                scope = scope.parent.valOf(vars[0]);
            }
            if(scope === undefined) return;
            var val = scope.data[vars[0]];
            for(var i = 1; i < vars; i++) {
                val = val[vars[i]];
            }
            return val;
        }

    };

    Scope.init = function (data) {
        current_scope = new Scope(undefined, data);
    };

    var scope = function (data) {
        Scope.init(data);
    };

    scope.valOf = function (variable) {
        current_scope.valOf(variable)
    };

    module.exports.scope = scope;

})();