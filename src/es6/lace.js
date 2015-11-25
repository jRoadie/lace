import { $, util } from './util-node'
import { Taglet } from './taglet'

var

    version = '1.0.0',

    Type = {
        UNDEFINED: typeof undefined,
        OBJECT: typeof {},
        FUNCTION: typeof (function () {}),
        STRING: typeof "",
        NUMBER: typeof 0
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

    constructor(name) {
        this.name = name;
    }

    /**
     *
     * @param name
     * @param def
     * @param global, true when make available only for this lace
     * @returns {*}
     */
    annotation(name, def, global = false) {
        /*if (typeof def !== Type.UNDEFINED) {
            this.definition('annotation', name, def);
        }
        return this.instance('annotation', name);*/
    }

    taglet(name, def, global = false) {
        /*if (typeof def !== Type.UNDEFINED) {
            this.definition('taglet', name, def);
        }
        return this.instance('taglet', name);*/
    }

    compile() {

    }

    render(html, data) {
        console.log($(html));
    }

    definition(type, name, def) {
        if (def !== Type.UNDEFINED) this.__lace__[type + 's']['definitions'][name] = def;
        return this.__lace__[type + 's'][name];
    }

    instance(type, name, inst) {
        if (inst !== Type.UNDEFINED) this.__lace__[type + 's']['instances'][name] = inst;
        return this.__lace__[type + 's']['instances'][name];
    }

}

Lace.init = function (name) {
    if (typeof warehouse.laces[name] === Type.UNDEFINED) {
        warehouse.laces[name] = new Lace(name);
    }
    return warehouse.laces[name];
};

/**
 * MODULE function for lace
 * @param name
 * @returns {Function|*}
 */
export default function (name) {
    if (typeof name === Type.UNDEFINED) {
        name = 'global';
    }
    return Lace.init(name);
}