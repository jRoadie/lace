'use strict';

var _lace = require('./lace');

var _lace2 = _interopRequireDefault(_lace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var glace = (0, _lace2.default)();

glace.taglet('let', {
    compile: function compile() {},
    render: function render() {}
});

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
