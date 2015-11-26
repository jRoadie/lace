import { $, util } from './util-node'
import Taglet from './taglet'

var

    lace,

    version = '1.0.0',

    defaults = {
        opts: {}
    },

    warehouse = {
        singleton: null,
        compiled_dom: null,
        laces: {
            global: null
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

    render(template, data) {
        var $tmpl = $(template);
        console.log($tmpl);
    }

    definition(type, name, def) {
        return this.__lace__[type]['definitions'][name] = def || this.__lace__[type]['definitions'][name];
    }

    instance(type, name, inst) {
        return this.__lace__[type]['instances'][name] = inst || this.__lace__[type]['instances'][name];
    }

}

//TODO: should I declare in prototype?
Lace.prototype.__lace__ = {
    annotation: {
        definitions: {},
        instances: {}
    },
    taglet: {
        definitions: {},
        instances: {}
    }
};

Lace.init = function (name) {
    return warehouse.laces[name] = warehouse.laces[name] || new Lace(name);
};

Lace.parse = function(template) {

};

/**
 * MODULE function for lace
 * @param name
 * @returns {Function|*}
 */
lace = function(name) {
    name = name || 'global';
    return Lace.init(name);
};

export default lace;