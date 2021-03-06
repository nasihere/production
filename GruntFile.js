module.exports = function(grunt) {
	var gtx = require('gruntfile-gtx').wrap(grunt);

    gtx.loadAuto();


    var gruntConfig = require('./grunt');
    gruntConfig.package = require('./package.json');

    gtx.config(gruntConfig);

    // We need our bower components in order to develop
    gtx.alias('build:jshtmlcss', ['concat:angular']);
    
    gtx.alias('build:apps', 
          [
            'copy:libs', 
            'copy:angular', 
            'concat:apps', 
            'uglify:apps'
          ]);


    gtx.alias('build:angular', 
          [
            'recess:less', 
            'clean:angular', 
            'copy:libs', 
            'copy:angular', 
            'recess:angular', 
            'concat:angular', 
            'uglify:angular', 
            'uglify:apps'
          ]);


    gtx.alias('build:html', ['clean:html', 'copy:html', 'recess:html', 'swig:html', 'concat:html', 'uglify:html']);
    gtx.alias('build:landing', ['copy:landing', 'swig:landing']);

    gtx.alias('release', ['bower-install-simple', 'bump-commit']);
    gtx.alias('release-patch', ['bump-only:patch', 'release']);
    gtx.alias('release-minor', ['bump-only:minor', 'release']);
    gtx.alias('release-major', ['bump-only:major', 'release']);
    gtx.alias('prerelease', ['bump-only:prerelease', 'release']);



    gtx.initConfig({

        watch: {
          js: {
            files: "app/app/**/**/**/*",
            tasks: ["build:apps"]
            
          },
          apps: {
            files: "app/app/apps/**/**/*",
            tasks: ["build:apps"]
            
          },
        },
      });
        

    gtx.finalise();



  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks
  grunt.registerTask('default', ['watch']);


}
