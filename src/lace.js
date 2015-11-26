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
            global: undefined
        },
        taglets: {}
    }
    ;

var Lace = function (name) {
    this.name = name;
};

Lace.prototype = {

    version: version,

    constructor: Lace,

    __lace__: {
        annotation: {
            definitions: {},
            instances: {}
        },
        taglet: {
            definitions: {},
            instances: {}
        }
    },

    /**
     *
     * @param name
     * @param def
     * @param global, true when make available only for this lace
     * @returns {*}
     */
    annotation: function (name, def, global = false) {
        if(def) {
            this.definition('annotation', name, def);
        }
        return this.instance('annotation', name);
    },

    taglet: function (name, def, global = false) {
        if(def) {
            this.definition('taglet', name, def);
        }
        return this.instance('taglet', name);
    },

    compile: function () {

    },

    render: function (html, data) {

    },

    definition: function (type, name, def) {
        return this.__lace__[type]['definitions'][name] = def || this.__lace__[type]['definitions'][name];
    },

    instance: function (type, name, inst) {
        return this.__lace__[type]['instances'][name] = inst || this.__lace__[type]['instances'][name];
    }

};

Lace.init = function (name) {
    return warehouse.laces[name] = warehouse.laces[name] || new Lace(name);
};

/**
 * Lace module function
 * @param name
 * @returns {Function|*}
 */
lace = function (name) {
    name = name || 'global';
    return Lace.init(name);
};
