var utils = {
    uuid: function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    },

    extend: function () {

    },

    load: function (filepath, onload) {
        if (global.isWindow) {
            $.fs.readFile(filepath, function (err, bytes) {
                if (err) throw err;
                onload(bytes.toString());
            })
        }
        //TODO: implement ajax loading of remote templates
    }
};

for(var util in utils) {
    lace[util] = utils[util];
}