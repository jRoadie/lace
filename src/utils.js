(function (global) {

    'use strict';

    var noWindow = typeof Window === 'undefined';

    var rqr = function (moduleName, moduleExported) {
        if (noWindow) {
            return moduleExported ? require(moduleExported) : require(moduleName);
        }
        return global[moduleName];
    };

    (function (lace) {

        var utils = {
            uuid: function () {
                var d = new Date().getTime();
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = (d + Math.random() * 16) % 16 | 0;
                    d = Math.floor(d / 16);
                    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
                return uuid;
            },

            extend: function () {

            },

            load: function (filepath, onload) {
                if (noWindow) {
                    $.fs.readFile(filepath, function (err, bytes) {
                        if (err) throw err;
                        onload(bytes.toString());
                    })
                }
                //TODO: implement ajax loading of remote templates
            }
        };

        for(var fn in utils) {

        }

    })(rqr('lace')());

})(typeof module === 'object' && typeof module.exports === 'object' ? module.exports : this);