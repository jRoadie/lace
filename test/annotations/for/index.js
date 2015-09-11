(function(mock) {

    var lace = mock.lace();
    var testLoop = lace.taglet('testLoop', {
        template: ['./index']
    });
    console.log(testLoop.render());

})(require('../../../mock')());