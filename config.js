module.exports = {
    port: process.env.PORT || 7007,
    base_url: '/',
    dir: {
        base: __dirname,
        src: __dirname + '/src/es6',
        dist: __dirname + '/dist/es6'
    }
};
