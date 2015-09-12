(function(mock) {

    var lace = mock.lace();
    var testLoop = lace.taglet('testLoop', {
        template: ['./index']
    });
    console.log(testLoop.render([
        {
            name: 'Joe Root'
        },
        {
            name: 'Imam Hassan'
        }
    ]));

})(require('../../../mock')());