import lace from './lace'

var glace = lace()(); //TODO: lace is in extra wrapper function due to node module system require()

glace.taglet('let', {
    compile: function() {

    },
    render: function() {

    }
});

glace.annotation('render', {
    compile: function ($el) {

    },
    execute: function () {
        //if(typeof data )
    }
});

glace.annotation('layout', {
    compile: function ($el) {

    },
    execute: function () {

    }
});
