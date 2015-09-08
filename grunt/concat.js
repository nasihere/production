module.exports = {
	angular:{
    src:[
      'app/libs/jquery/jquery/dist/jquery.js',
      'app/libs/jquery/bootstrap/dist/js/bootstrap.js',

      'app/libs/angular/angular/angular.js',
      'app/libs/angular/angular-animate/angular-animate.js',
      'app/libs/angular/angular-aria/angular-aria.js',
      'app/libs/angular/angular-cookies/angular-cookies.js',
      'app/libs/angular/angular-messages/angular-messages.js',
      'app/libs/angular/angular-resource/angular-resource.js',
      'app/libs/angular/angular-sanitize/angular-sanitize.js',
      'app/libs/angular/angular-touch/angular-touch.js',
      'app/libs/angular/angular-material/angular-material.js',

      'app/libs/angular/angular-ui-router/release/angular-ui-router.js', 
      'app/libs/angular/ngstorage/ngStorage.js',
      'app/libs/angular/angular-ui-utils/ui-utils.js',

      'app/libs/angular/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/libs/angular/oclazyload/dist/ocLazyLoad.js',

      'app/libs/angular/angular-translate/angular-translate.js',
      'app/libs/angular/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'app/libs/angular/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
      'app/libs/angular/angular-translate-storage-local/angular-translate-storage-local.js',
     
      'app/libs/angular/angular-loading-bar/build/loading-bar.js',
      
      'app/app/scripts/app.js',
      'app/app/scripts/*.js',
      'app/app/scripts/directives/*.js',
      'app/app/scripts/services/*.js',
      'app/app/scripts/filters/*.js'
    ],
    dest:'app/angular/scripts/app.src.js'
  },
  html:{
    src:[
      'app/libs/jquery/jquery/dist/jquery.js',
      'app/libs/jquery/bootstrap/dist/js/bootstrap.js',
      'app/libs/jquery/waves/dist/waves.js',
      'app/html/scripts/*.js'
    ],
    dest:'app/html/scripts/app.src.js'
  }
}
