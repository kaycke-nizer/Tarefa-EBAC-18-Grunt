module.exports = function(grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css':'main.less'
                }
            }
        },
        uglify:{
            target:{
                files: {
                    'main.js': 'script.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default',['less', 'uglify']);
}