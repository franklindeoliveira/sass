module.exports = function(grunt) {

    grunt.initConfig({

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'assets/css/style.css': 'assets/_sass/style.sass'
                }
            }
        }, // sass

        watch: {
            dist: {
                files: [
                    'assets/_sass/**/*'
                ],

                tasks: ['sass']
            }
        } // watch

    });


    // Plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Tarefas que serão executadas
    
    // Tarefa para Watch
    grunt.registerTask('w', ['watch']);

};