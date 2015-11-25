'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (name) {
    if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === Type.UNDEFINED) {
        name = 'global';
    }
    return Lace.init(name);
};

var _utilNode = require('./util-node');

var _taglet = require('./taglet');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var version = '1.0.0',
    Type = {
    UNDEFINED: typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined),
    OBJECT: _typeof({}),
    FUNCTION: _typeof(function () {}),
    STRING: _typeof(""),
    NUMBER: _typeof(0)
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

    _createClass(Lace, [{
        key: 'annotation',
        value: function annotation(name, def) {
            /*if (typeof def !== Type.UNDEFINED) {
                this.definition('annotation', name, def);
            }
            return this.instance('annotation', name);*/

            var global = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
        }
    }, {
        key: 'taglet',
        value: function taglet(name, def) {
            /*if (typeof def !== Type.UNDEFINED) {
                this.definition('taglet', name, def);
            }
            return this.instance('taglet', name);*/

            var global = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
        }
    }, {
        key: 'compile',
        value: function compile() {}
    }, {
        key: 'render',
        value: function render(html, data) {
            console.log((0, _utilNode.$)(html));
        }
    }, {
        key: 'definition',
        value: function definition(type, name, def) {
            if (def !== Type.UNDEFINED) this.__lace__[type + 's']['definitions'][name] = def;
            return this.__lace__[type + 's'][name];
        }
    }, {
        key: 'instance',
        value: function instance(type, name, inst) {
            if (inst !== Type.UNDEFINED) this.__lace__[type + 's']['instances'][name] = inst;
            return this.__lace__[type + 's']['instances'][name];
        }
    }]);

    return Lace;
})();

Lace.init = function (name) {
    if (_typeof(warehouse.laces[name]) === Type.UNDEFINED) {
        warehouse.laces[name] = new Lace(name);
    }
    return warehouse.laces[name];
};

/**
 * Lace module function
 * @param name
 * @returns {Function|*}
 */