module.exports = function(grunt) {
    grunt.initConfig({
        babel: {
            options: {
                presets: ['babel-preset-es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/es6',
                    src: ['**/*.js'],
                    dest: 'dist/es6',
                    ext: '.js'
                }]
            }
        },
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            loose: "all"
                        }]
                    ]
                },
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly.
                    // The result file's extension is always .js
                    "dist/lace.es5.js": ["src/**/*.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["src/es6/*.js"],
                tasks: ["babel"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["babel"]);
    grunt.registerTask("browserify", ["browserify"]);
};