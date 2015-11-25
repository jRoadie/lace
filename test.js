var configs = require('./config');

for(var key in configs) {
    console.log(configs[key]());
}