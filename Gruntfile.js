'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				// the files to concatenate
				src: ['src/**/*.js'],
				// the location of the resulting JS file
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				// the banner is inserted at the top of the output
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		jshint: {
			// define the files to lint
			files: ['Gruntfile.js', 'app/**/*.js'],
			// configure JSHint (documented at http://www.jshint.com/docs/)
			options: {
				// options here to override JSHint defaults
				jshintrc: 'conf/jshintrc'
				// globals: {
				// 	jQuery: true,
				// 	console: true,
				// 	module: true,
				// 	document: true
				// }
			}
		},
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['test']
		}
	});

	// Load the Grunt plugins we need. These should have all been installed through npm
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// this would be run by typing "grunt test" on the command line
	grunt.registerTask('test', ['jshint']);

	// the default task can be run just by typing "grunt" on the command line
	grunt.registerTask('default', ['jshint']);
};