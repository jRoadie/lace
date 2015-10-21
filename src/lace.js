(function (global, factory) {

    global.isWindow = typeof Window !== 'undefined' && global instanceof Window;

    var rqr = function (moduleName, moduleExported) {
        return global.isWindow ? global[moduleName] : (moduleExported ? require(moduleExported) : require(moduleName));
    };

    factory(global);

})(typeof module === 'object' && typeof module.exports === 'object' ? module.exports : this, function (global) {

    var
        lace,

        version = '1.0.0',

        TYPE = {
            undefined: typeof undefined,
            object: typeof {},
            func: typeof function () {
            },
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

    var Lace = function (name) {
        this.name = name;
    };

    Lace.prototype = {

        version: version,

        constructor: Lace,

        __lace__: {
            annotations: {
                definitions: {},
                instances: {}
            },
            taglets: {
                definitions: {},
                instances: {}
            }
        },

        /**
         *
         * @param name
         * @param def
         * @param isolated, true when make available only for this lace
         * @returns {*}
         */
        annotation: function (name, def, isolated) {
            if (typeof def !== TYPE.undefined) {
                this.definition('annotation', name, def);
            }
            return this.instance('annotation', name);
        },

        taglet: function (name, def, isolated) {
            if (typeof def !== TYPE.undefined) {
                this.definition('taglet', name, def);
            }
            return this.instance('taglet', name);
        },

        compile: function () {

        },

        render: function (html, data) {

        },

        definition: function (type, name, def) {
            if (def !== TYPE.undefined) this.__lace__[type + 's']['definitions'][name] = def;
            return this.__lace__[type + 's'][name];
        },

        instance: function (type, name, inst) {
            if (inst !== TYPE.undefined) this.__lace__[type + 's']['instances'][name] = inst;
            return this.__lace__[type + 's']['instances'][name];
        }

    };

    Lace.init = function (name) {
        if (typeof warehouse.laces[name] === TYPE.undefined) {
            warehouse.laces[name] = new Lace(name);
        }
        return warehouse.laces[name];
    };

    /**
     * Lace module function
     * @param name
     * @returns {Function|*}
     */
    lace = function (name) {
        if (name === undefined) {
            name = 'global';
        }
        return Lace.init(name);
    };

    //initialize global lace object : glace
    global.glace = lace();

    //export lace module
    global.lace = lace;

});