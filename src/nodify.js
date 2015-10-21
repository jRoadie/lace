global.dfine = function () {
    return 14546;
}
/*
console.log(global);
(function (g) {
    console.log(g)
    console.log(this)
})(this);
/!*
(function (x, factory) {

    x.isWindow = typeof Window !== 'undefined' && x instanceof Window;

    var rqr = function (moduleName, moduleExported) {
        return x.isWindow ? x[moduleName] : (moduleExported ? require(moduleExported) : require(moduleName));
    };

    factory(x);

})(this, function (global) {

    //TODO: your code goes here
    console.log(global)

});*!/
*/
