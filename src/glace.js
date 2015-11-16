(function (global, factory) {

    global.isWindow = typeof Window !== 'undefined' && global instanceof Window;

    var rqr = function (moduleName, moduleExported) {
        return global.isWindow ? global[moduleName] : (moduleExported ? require(moduleExported) : require(moduleName));
    };

    factory(global, rqr('lace')());//empty param in lace module dictates as global lace object called glace

})(typeof module === 'object' && typeof module.exports === 'object' ? module.exports : this, function (global, glace) {

    glace.taglet('let', {});

    glace.annotation('import', {
        compile: function ($el) {

        },
        execute: function () {
            //if(typeof data )
        }
    });

});