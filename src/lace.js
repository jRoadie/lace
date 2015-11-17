import { Taglet } from './taglet'

var
    lace,

    version = '1.0.0',

    TYPE = {
        undefined: typeof undefined,
        object: typeof {},
        function: typeof (function () {}),
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
    }
    ;

class Lace {

    constructor() {

    }

}

export { Lace }