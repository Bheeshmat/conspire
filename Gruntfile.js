module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      build: 'rimraf dist && webpack --config config/webpack.prod.js --progress --profile --bail'
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        src: 'src/factorial.js',
        dest: 'build/factorial.min.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-exec');
  grunt.registerTask('build', ['exec']);

  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.registerTask('default', ['uglify']);
}
