module.exports = {
    port: process.env.PORT || 7007,
    base_url: '/',
    dir: {
        base: __dirname,
        src: __dirname + '/src',
        dist: __dirname + '/dist'
    }
};
