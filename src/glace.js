(function (global) {

    'use strict';

    var noWindow = typeof Window === 'undefined';

    var rqr = function (moduleName, moduleExported) {
        if (noWindow) {
            return moduleExported ? require(moduleExported) : require(moduleName);
        }
        return global[moduleName];
    };

    (function (glace) {

        glace.taglet('let', {});

        glace.annotation('import', {
            compile: function($el) {

            },
            execute: function() {
                //if(typeof data )
            }
        });

    })(rqr('lace')()); //empty param in lace module dictates as global lace object called glace

})(typeof module === 'object' && typeof module.exports === 'object' ? module.exports : this);