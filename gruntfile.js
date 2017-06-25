module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express : {
            dev: {
                options: {
        script: 'app.js'
      }
            }
        },
        sass: {
            dist: {
                files: {
                    'public/stylesheets/style.css' : 'public/stylesheets/style.sass'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.sass',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.registerTask('dev',['express','sass','watch']);
}