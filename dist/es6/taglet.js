'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Taglet = (function () {
    function Taglet(name) {
        _classCallCheck(this, Taglet);

        this.name = name;
    }

    _createClass(Taglet, [{
        key: 'compile',
        value: function compile() {
            console.log('compiling....');
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('rendering...');
        }
    }]);

    return Taglet;
})();

exports.Taglet = Taglet;