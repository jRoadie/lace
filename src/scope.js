(function () {

    var
        current_scope = undefined,
        warehouse = {};

    var Scope = function (parent, data) {
        this.parent = parent;
        this.data = data;
    };

    Scope.prototype = {

        constructor: Scope,

        create: function (data) {
            current_scope = new Scope(current_scope, data);
        },

        get: function (variable) {
            if(this.parent === undefined) return;
            if(this.data[variable] === undefined) {
                this.parent.get(variable);
            }
            return this.data[variable];
        }

    };

    Scope.init = function (data) {
        current_scope = new Scope(undefined, data);
    };

    var scope = function (data) {

    };

    scope.get = function (variable) {
        current_scope.get(variable)
    };

    Scope.init()

})();