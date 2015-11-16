var scriptlet = require('.././scriptlet');

var testcases = {
    one: '${x + 1}'
};

for(var testcase in testcases) {
    scriptlet.parse(testcase)
}