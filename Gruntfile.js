module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        coffee: {
          compile: {
            options: {
              join: true,
              sourceMap: true
            },
            files: {
              'source/js/app.coffee.js': ['source/coffee/**/*.coffee'] // compile and concat into single file
            }
          },

        },
        jshint: {
            myFiles: ['source/js/*.js'],
            options: {
              curly: true,
              eqeqeq: true,
              eqnull: true,
              browser: true,
              globals: {
                jQuery: true
              },
            },
        },
        concat: {
            dist: {
                src: [
                    'source/js/vendor/jquery/*.js',
                    'source/js/vendor/*.js',
                    'source/js/*.js'
                ],
                    dest: 'assets/js/script.js'
                }
        },
        uglify: {
            build: {
                src: 'assets/js/script.js',
                dest: 'assets/js/script.min.js'
            }
        },
        compass: {
            dist: {
              options: {
                sassDir: 'source/sass',
                cssDir: 'assets/css',
                environment: 'production'
              }
            },
            dev: {
              options: {
                sassDir: 'source/sass',
                cssDir: 'assets/css'
              }
            }
        },
        watch: {
            scripts: {
                files: ['source/coffee/*.coffee'],
                tasks: ['coffee', 'jshint', 'concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['source/sass/**/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: false,
                },
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['coffee', 'jshint', 'concat', 'uglify', 'compass']);

};