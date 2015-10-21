(function (isWindow) {

    var global = isWindow ? window : global;
    global.isWindow = isWindow;

    global.dfine = function () {
        var name = arguments[0];
        var factory = arguments[arguments.length - 1];
        var modulesToInject = arguments.length > 2 ? arguments[1] : [];
        if(!modulesToInject instanceof Array) {
            throw new Error('Second parameter should be list of modules name or path');
        }

    }


})(typeof window === 'object');