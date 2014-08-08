'use strict'

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean : {
			output : 'production/*'
		},
		copy: {
		  main: {
		    files: [
		      //app.js
		      {expand: true, src: ['js/app.js'], dest: 'production/'},
		      //controllers.js
		      {expand: true, src: ['js/controllers.js'], dest: 'production/'},
		      //css
		      {expand: true, src: ['css/**'], dest: 'production/'},
		      //img
		      {expand: true, src: ['img/**'], dest: 'production/'},
		      //index
		      {expand: true, src: ['index.html'], dest: 'production/', filter: 'isFile'},
		      //favicon
		      {expand: true, src: ['favicon.ico'], dest: 'production/', filter: 'isFile'},
		      //bower_components
		      {expand: true, src: ['bower_components/**'], dest: 'production/'}
		    ]
		  }
		},
		uglify: {
		    my_target: {
		      files: {
		      	//script.js
		        'production/js/script.min.js': ['js/script.js'],
		        'production/js/blur.min.js': ['js/blur.js'],
		        'production/js/pace.min.js': ['js/pace.js']
		      },
		      options : {
		      	mangle : false
		      }
		    }
		},
		'string-replace': {
	        inline: {
	            files: {
	                'production/index.html': 'production/index.html'
	            },
	            options: {
	                replacements: [
	                    {
	                        pattern: '<!--start PRODSTYLE imports',
	                        replacement: '<!--start PRODSTYLE imports-->'
	                    },
	                    {
	                        pattern: 'end PRODSTYLE imports-->',
	                        replacement: '<!--end PRODSTYLE imports-->'
	                    },
	                    {
	                        pattern: '<!--start DEVSTYLE imports-->',
	                        replacement: '<!--start DEVSTYLE imports'
	                    },
	                    {
	                        pattern: '<!--end DEVSTYLE imports-->',
	                        replacement: 'end DEVSTYLE imports-->'
	                    },
	                    {
	                        pattern: '<!--start PRODSCRIPT imports',
	                        replacement: '<!--start PRODSCRIPT imports-->'
	                    },
	                    {
	                        pattern: 'end PRODSCRIPT imports-->',
	                        replacement: '<!--end PRODSCRIPT imports-->'
	                    },
	                    {
	                        pattern: '<!--start DEVSCRIPT imports-->',
	                        replacement: '<!--start DEVSCRIPT imports'
	                    },
	                    {
	                        pattern: '<!--end DEVSCRIPT imports-->',
	                        replacement: 'end DEVSCRIPT imports-->'
	                    }
	                ]
	            }
	        }
	    },
		usebanner: {
		    taskName: {
		      options: {
		        position: 'top',
		        banner: '/* Ryder McMinn\'s Portfolio - ' +
          '<%= grunt.template.today("dd-mm-yyyy") %>\n' +
          'A website where I keep my projects and other related musings\n ' +
          '&#169 <%= grunt.template.today("yyyy") %> Ryder McMinn ' +
          '- mcminnra@gmail.com */\n',
		        linebreak: true
		      },
		      files: {
		        src: [ 'production/js/script.min.js','production/css/style.min.css']
		      }
		    }
		  }
	});

	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-string-replace");
	grunt.loadNpmTasks("grunt-banner");

	grunt.registerTask("production", ['clean','copy', 'uglify', 'string-replace','usebanner']);
};