'use strict';

var
    fs = require('fs'),
    cheerio = require('cheerio'),
    scope = require('../../src/scope'),
    scriptlet = require('../../src/scriptlet')
    ;

var testcases = {
    cases: {
        0: 'x + 1',
        1: 'x - 1',
        2: 'x++',
        3: 'x--',
        4: '++x',
        5: '--x'
    },
    input: {
        x: 9
    },
    output: [
        10, 8, 10, 8, 10, 8
    ]
};
