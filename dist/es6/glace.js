'use strict';

var _lace = require('./lace');

var glace = (0, _lace.lace)();

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