(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Annotation = (function () {
    function Annotation() {
        _classCallCheck(this, Annotation);

        console.log(789);
    }

    Annotation.prototype.compile = function compile() {};

    Annotation.prototype.execute = function execute() {};

    return Annotation;
})();

exports.Annotation = Annotation;

},{}],2:[function(require,module,exports){
'use strict';

var _lace = require('./lace');

var glace = _lace.lace();

glace.taglet('let', {});

glace.annotation('render', {
    compile: function compile($el) {},
    execute: function execute() {
        //if(typeof data )
    }
});

glace.annotation('layout', {
    compile: function compile($el) {},
    execute: function execute() {}
});

},{"./lace":3}],3:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _taglet = require('./taglet');

var lace,
    version = '1.0.0',
    Type = {
    UNDEFINED: typeof undefined,
    object: typeof {},
    'function': typeof function () {},
    string: typeof "",
    number: typeof 0
},
    defaults = {
    opts: {}
},
    warehouse = {
    singleton: null,
    compiled_dom: null,
    laces: {
        global: undefined
    },
    taglets: {}
};

var Lace = (function () {
    function Lace(name) {
        _classCallCheck(this, Lace);

        this.name = name;
    }

    /**
     *
     * @param name
     * @param def
     * @param global, true when make available only for this lace
     * @returns {*}
     */

    Lace.prototype.annotation = function annotation(name, def) {
        var global = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

        if (typeof def !== Type.UNDEFINED) {
            this.definition('annotation', name, def);
        }
        return this.instance('annotation', name);
    };

    Lace.prototype.taglet = function taglet(name, def) {
        var global = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

        if (typeof def !== Type.UNDEFINED) {
            this.definition('taglet', name, def);
        }
        return this.instance('taglet', name);
    };

    Lace.prototype.compile = function compile() {};

    Lace.prototype.render = function render(html, data) {};

    Lace.prototype.definition = function definition(type, name, def) {
        if (def !== Type.UNDEFINED) this.__lace__[type + 's']['definitions'][name] = def;
        return this.__lace__[type + 's'][name];
    };

    Lace.prototype.instance = function instance(type, name, inst) {
        if (inst !== Type.UNDEFINED) this.__lace__[type + 's']['instances'][name] = inst;
        return this.__lace__[type + 's']['instances'][name];
    };

    return Lace;
})();

Lace.init = function (name) {
    if (typeof warehouse.laces[name] === Type.UNDEFINED) {
        warehouse.laces[name] = new Lace(name);
    }
    return warehouse.laces[name];
};

/**
 * Lace module function
 * @param name
 * @returns {Function|*}
 */
exports.lace = lace = function (name) {
    if (typeof name === Type.UNDEFINED) {
        name = 'global';
    }
    return Lace.init(name);
};

exports.lace = lace;

},{"./taglet":4}],4:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Taglet = (function () {
    function Taglet(name) {
        _classCallCheck(this, Taglet);

        this.name = name;
    }

    Taglet.prototype.compile = function compile() {
        console.log('compiling....');
    };

    Taglet.prototype.render = function render() {
        console.log('rendering...');
    };

    return Taglet;
})();

exports.Taglet = Taglet;

},{}]},{},[1,2,3,4]);
