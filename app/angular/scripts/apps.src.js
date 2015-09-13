'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngStorage',
    'ngStore',
    'ui.router',
    'ui.utils',
    'ui.bootstrap',
    'ui.load',
    'ui.jp',
    'pascalprecht.translate',
    'oc.lazyLoad',
    'angular-loading-bar'
  ]);

'use strict';

/**
 * @ngdoc function
 * @name app.controller:AppCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app')  
  .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window', '$document', '$location', '$rootScope', '$timeout', '$mdSidenav', '$mdColorPalette', '$anchorScroll',
    function (             $scope,   $translate,   $localStorage,   $window,   $document,   $location,   $rootScope,   $timeout,   $mdSidenav,   $mdColorPalette,   $anchorScroll ) {
      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i) || !!navigator.userAgent.match(/Trident.*rv:11\./);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');
      // config
      $scope.app = {
        name: 'Materil',
        version: '1.0.2',
        // for chart colors
        color: {
          primary: '#3f51b5',
          info:    '#2196f3',
          success: '#4caf50',
          warning: '#ffc107',
          danger:  '#f44336',
          accent:  '#7e57c2',
          white:   '#ffffff',
          light:   '#f1f2f3',
          dark:    '#475069'
        },
        setting: {
          theme: {
            primary: 'indigo',
            accent: 'purple',
            warn: 'amber'
          },
          asideFolded: false
        },
        search: {
          content: '',
          show: false
        }
      }

      $scope.setTheme = function(theme){
        $scope.app.setting.theme = theme;
      }

      // save settings to local storage
      if ( angular.isDefined($localStorage.appSetting) ) {
        $scope.app.setting = $localStorage.appSetting;
      } else {
        $localStorage.appSetting = $scope.app.setting;
      }
      $scope.$watch('app.setting', function(){
        $localStorage.appSetting = $scope.app.setting;
      }, true);

      // angular translate
      $scope.langs = {en:'English', zh_CN:'中文'};
      $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
      $scope.setLang = function(langKey) {
        // set the current lang
        $scope.selectLang = $scope.langs[langKey];
        // You can change the language during runtime
        $translate.use(langKey);
      };

      function isSmartDevice( $window ) {
        // Adapted from http://www.detectmobilebrowsers.com
        var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
        // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
        return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      };

      $scope.getColor = function(color, hue){
        if(color == "bg-dark" || color == "bg-white") return $scope.app.color[ color.substr(3, color.length) ];
        return rgb2hex($mdColorPalette[color][hue]['value']);
      }

      //Function to convert hex format to a rgb color
      function rgb2hex(rgb) {
        return "#" + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
      }

      function hex(x) {
        var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
        return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
      }

      $rootScope.$on('$stateChangeSuccess', openPage);

      function openPage() {
        $scope.app.search.content = '';
        $scope.app.search.show = false;
        $scope.closeAside();
        // goto top
        $location.hash('view');
        $anchorScroll();
        $location.hash('');
      }

      $scope.goBack = function () {
        $window.history.back();
      }

      $scope.openAside = function () {
        $timeout(function() { $mdSidenav('aside').open(); });
      }
      $scope.closeAside = function () {
        $timeout(function() { $document.find('#aside').length && $mdSidenav('aside').close(); });
      }

    }
  ]);

// config

var app =  
angular.module('app')
  .config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
    }
  ])
  .config(['$translateProvider', function($translateProvider){
    // Register a loader for the static files
    // So, the module will search missing translation tables under the specified urls.
    // Those urls are [prefix][langKey][suffix].
    $translateProvider.useStaticFilesLoader({
      prefix: 'i18n/',
      suffix: '.js'
    });
    // Tell the module what language to use by default
    $translateProvider.preferredLanguage('en');
    // Tell the module to store the language in the local storage
    $translateProvider.useLocalStorage();
  }]);

// lazyload config

angular.module('app')
  .constant('MODULE_CONFIG', [
      {
          name: 'ui.select',
          module: true,
          files: [
              '../libs/angular/angular-ui-select/dist/select.min.js',
              '../libs/angular/angular-ui-select/dist/select.min.css'
          ]
      },
      {
          name: 'textAngular',
          module: true,
          files: [
              '../libs/angular/textAngular/dist/textAngular-sanitize.min.js',
              '../libs/angular/textAngular/dist/textAngular.min.js'
          ]
      },
      {
          name: 'vr.directives.slider',
          module: true,
          files: [
              '../libs/angular/venturocket-angular-slider/build/angular-slider.min.js',
              '../libs/angular/venturocket-angular-slider/angular-slider.css'
          ]
      },
      {
          name: 'angularBootstrapNavTree',
          module: true,
          files: [
              '../libs/angular/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
              '../libs/angular/angular-bootstrap-nav-tree/dist/abn_tree.css'
          ]
      },
      {
          name: 'angularFileUpload',
          module: true,
          files: [
              '../libs/angular/angular-file-upload/angular-file-upload.js'
          ]
      },
      {
          name: 'ngImgCrop',
          module: true,
          files: [
              '../libs/angular/ngImgCrop/compile/minified/ng-img-crop.js',
              '../libs/angular/ngImgCrop/compile/minified/ng-img-crop.css'
          ]
      },
      {
          name: 'smart-table',
          module: true,
          files: [
              '../libs/angular/angular-smart-table/dist/smart-table.min.js'
          ]
      },
      {
          name: 'ui.map',
          module: true,
          files: [
              '../libs/angular/angular-ui-map/ui-map.js'
          ]
      },
      {
          name: 'ngGrid',
          module: true,
          files: [
              '../libs/angular/ng-grid/build/ng-grid.min.js',
              '../libs/angular/ng-grid/ng-grid.min.css',
              '../libs/angular/ng-grid/ng-grid.bootstrap.css'
          ]
      },
      {
          name: 'ui.grid',
          module: true,
          files: [
              '../libs/angular/angular-ui-grid/ui-grid.min.js',
              '../libs/angular/angular-ui-grid/ui-grid.min.css',
              '../libs/angular/angular-ui-grid/ui-grid.bootstrap.css'
          ]
      },
      {
          name: 'xeditable',
          module: true,
          files: [
              '../libs/angular/angular-xeditable/dist/js/xeditable.min.js',
              '../libs/angular/angular-xeditable/dist/css/xeditable.css'
          ]
      },
      {
          name: 'smart-table',
          module: true,
          files: [
              '../libs/angular/angular-smart-table/dist/smart-table.min.js'
          ]
      },
      {
          name: 'dataTable',
          module: false,
          files: [
              '../libs/jquery/datatables/media/js/jquery.dataTables.min.js',
              '../libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
              '../libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css'
          ]
      },
      {
          name: 'footable',
          module: false,
          files: [
              '../libs/jquery/footable/dist/footable.all.min.js',
              '../libs/jquery/footable/css/footable.core.css'
          ]
      },
      {
          name: 'easyPieChart',
          module: false,
          files: [
              '../libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'
          ]
      },
      {
          name: 'sparkline',
          module: false,
          files: [
              '../libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js'
          ]
      },
      {
          name: 'plot',
          module: false,
          files: [
              '../libs/jquery/flot/jquery.flot.js',
              '../libs/jquery/flot/jquery.flot.resize.js',
              '../libs/jquery/flot/jquery.flot.pie.js',
              '../libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js',
              '../libs/jquery/flot-spline/js/jquery.flot.spline.min.js',
              '../libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js'
          ]
      },
      {
          name: 'vectorMap',
          module: false,
          files: [
              '../libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
              '../libs/jquery/bower-jvectormap/jquery-jvectormap.css', 
              '../libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
              '../libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js'
          ]
      },
      {
          name: 'moment',
          module: false,
          files: [
              '../libs/jquery/moment/moment.js'
          ]
      }
    ]
  )
  .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function($ocLazyLoadProvider, MODULE_CONFIG) {
      $ocLazyLoadProvider.config({
          debug: false,
          events: false,
          modules: MODULE_CONFIG
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name app.config:uiRouter
 * @description
 * # Config
 * Config for the router
 */
angular.module('app')
  .run(
    [           '$rootScope', '$state', '$stateParams',
      function ( $rootScope,   $state,   $stateParams ) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'MODULE_CONFIG',
      function ( $stateProvider,   $urlRouterProvider,  MODULE_CONFIG ) {
        $urlRouterProvider
          .otherwise('/app/dashboard');
        $stateProvider
          .state('app', {
            abstract: true,
            url: '/app',
            views: {
              '': {
                templateUrl: 'views/layout.html'
              },
              'aside': {
                templateUrl: 'views/aside.html'
              },
              'content': {
                templateUrl: 'views/content.html'
              }
            }
          })

            .state('app.reg', {
              url: '/reg',
              templateUrl: 'apps/reg/reg.html',
              data : { title: 'Dashboard', folded: true },
              resolve: load(['apps/reg/reg.js'])
            })

            .state('app.login', {
              url: '/login',
              views: {
                  "": { templateUrl: "apps/MasterParent/LoginReg.html" },
                  "container@": { controller: 'LoginCtrl', templateUrl: "apps/login/login.html" },
                },
              data : { title: 'Verify your phone number', folded: true },
              
              resolve: load(['apps/login/login.js'])
            })
            
            .state('app.register', {
              url: '/register',
              views: {
                  "container@": { controller: 'LoginCtrl', templateUrl: "apps/login/register.html" },
                },
             data : { title: 'Profile Page', folded: true },
              
              resolve: load(['apps/login/login.js'])
            })

            .state('app.forgot-password', {
              url: '/forgot-password',
              templateUrl: 'apps/login/forgot-password.html'
            })

            .state('app.home', {
              url: '/home',
              templateUrl: 'apps/reg/home.html',
              data : { title: 'Dashboard', folded: true },
              resolve: load(['apps/reg/reg.js'])
            })

             .state('app.restaurantList', {
              url: '/restaurantList',
              views: {
                  "container@": {  controller: 'RestListCtrl',templateUrl: "apps/RestNames/RestList.html" },
                  'content@': {
                       templateUrl: 'apps/RestNames/content.html'
                   }
                },   
              data : { title: 'Restaurant List', folded: true, type:"list",theme: { primary: 'blue'} },
              resolve: load(['apps/RestNames/RestList.js'])
            })

             .state('app.restaurantDetails', {
              url: '/restaurantDetails',
              views: {
                  "container@": {  controller: 'RestListCtrl',templateUrl: "apps/RestNames/RestDetails.html" },
                  'content@': {
                       templateUrl: 'apps/RestNames/content.html'
                   }
                },   
              data : { title: 'Restaurant List', folded: true, type:"grid",theme: { primary: 'blue'} },
              resolve: load(['apps/RestNames/RestList.js'])
            })
            

          
            .state('app.dashboard', {
              url: '/dashboard',
              templateUrl: 'views/pages/dashboard.html',
              data : { title: 'Dashboard', folded: true },
              resolve: load(['scripts/controllers/chart.js','scripts/controllers/vectormap.js'])
            })
            .state('app.analysis', {
              url: '/analysis',
              templateUrl: 'views/pages/dashboard.analysis.html',
              data : { title: 'Analysis' },
              resolve: load(['scripts/controllers/chart.js','scripts/controllers/vectormap.js'])
            })
            .state('app.wall', {
              url: '/wall',
              templateUrl: 'views/pages/dashboard.wall.html',
              data : { title: 'Wall', folded: true }
            })
            .state('app.todo', {
              url: '/todo',
              templateUrl: 'apps/todo/todo.html',
              data : { title: 'Todo', theme: { primary: 'indigo-800'} },
              controller: 'TodoCtrl',
              resolve: load('apps/todo/todo.js')
            })
            .state('app.todo.list', {
                url: '/{fold}'
            })
            .state('app.note', {
              url: '/note',
              templateUrl: 'apps/note/main.html',
              data : { theme: { primary: 'blue-grey'} }
            })
            .state('app.note.list', {
              url: '/list',
              templateUrl: 'apps/note/list.html',
              data : { title: 'Note'},
              controller: 'NoteCtrl',
              resolve: load(['apps/note/note.js', 'moment'])
            })
            .state('app.note.item', {
              url: '/{id}',
              views: {
                '': {
                  templateUrl: 'apps/note/item.html',
                  controller: 'NoteItemCtrl',
                  resolve: load(['apps/note/note.js', 'moment'])
                },
                'navbar@': {
                  templateUrl: 'apps/note/navbar.html',
                  controller: 'NoteItemCtrl'
                }
              },
              data : { title: '', child: true }
            })
            .state('app.inbox', {
                url: '/inbox',
                templateUrl: 'apps/inbox/inbox.html',
                data : { title: 'Inbox', folded: true },
                resolve: load( ['apps/inbox/inbox.js','moment'] )
            })
            .state('app.inbox.list', {
                url: '/inbox/{fold}',
                templateUrl: 'apps/inbox/list.html'
            })
            .state('app.inbox.detail', {
                url: '/{id:[0-9]{1,4}}',
                templateUrl: 'apps/inbox/detail.html'
            })
            .state('app.inbox.compose', {
                url: '/compose',
                templateUrl: 'apps/inbox/new.html',
                resolve: load( ['textAngular', 'ui.select'] )
            })
          .state('ui', {
            url: '/ui',
            abstract: true,
            views: {
              '': {
                templateUrl: 'views/layout.html'
              },
              'aside': {
                templateUrl: 'views/aside.html'
              },
              'content': {
                templateUrl: 'views/content.html'
              }
            }
          })
            // components router
            .state('ui.component', {
              url: '/component',
              abstract: true,
              template: '<div ui-view></div>'
            })
              .state('ui.component.arrow', {
                url: '/arrow',
                templateUrl: 'views/ui/component/arrow.html',
                data : { title: 'Arrows' }
              })
              .state('ui.component.badge-label', {
                url: '/badge-label',
                templateUrl: 'views/ui/component/badge-label.html',
                data : { title: 'Badges & Labels' }
              })
              .state('ui.component.button', {
                url: '/button',
                templateUrl: 'views/ui/component/button.html',
                data : { title: 'Buttons' }
              })
              .state('ui.component.color', {
                url: '/color',
                templateUrl: 'views/ui/component/color.html',
                data : { title: 'Colors' }
              })
              .state('ui.component.grid', {
                url: '/grid',
                templateUrl: 'views/ui/component/grid.html',
                data : { title: 'Grids' }
              })
              .state('ui.component.icon', {
                url: '/icons',
                templateUrl: 'views/ui/component/icon.html',
                data : { title: 'Icons' }
              })
              .state('ui.component.list', {
                url: '/list',
                templateUrl: 'views/ui/component/list.html',
                data : { title: 'Lists' }
              })
              .state('ui.component.nav', {
                url: '/nav',
                templateUrl: 'views/ui/component/nav.html',
                data : { title: 'Navs' }
              })
              .state('ui.component.progressbar', {
                url: '/progressbar',
                templateUrl: 'views/ui/component/progressbar.html',
                data : { title: 'Progressbars' }
              })
              .state('ui.component.streamline', {
                url: '/streamline',
                templateUrl: 'views/ui/component/streamline.html',
                data : { title: 'Streamlines' }
              })
              .state('ui.component.timeline', {
                url: '/timeline',
                templateUrl: 'views/ui/component/timeline.html',
                data : { title: 'Timelines' }
              })
              .state('ui.component.uibootstrap', {
                url: '/uibootstrap',
                templateUrl: 'views/ui/component/uibootstrap.html',
                resolve: load('scripts/controllers/bootstrap.js'),
                data : { title: 'UI Bootstrap' }
              })
            // material routers
            .state('ui.material', {
              url: '/material',
              template: '<div ui-view></div>',
              resolve: load('scripts/controllers/material.js')
            })
              .state('ui.material.button', {
                url: '/button',
                templateUrl: 'views/ui/material/button.html',
                data : { title: 'Buttons' }
              })
              .state('ui.material.color', {
                url: '/color',
                templateUrl: 'views/ui/material/color.html',
                data : { title: 'Colors' }
              })
              .state('ui.material.icon', {
                url: '/icon',
                templateUrl: 'views/ui/material/icon.html',
                data : { title: 'Icons' }
              })
              .state('ui.material.card', {
                url: '/card',
                templateUrl: 'views/ui/material/card.html',
                data : { title: 'Card' }
              })
              .state('ui.material.form', {
                url: '/form',
                templateUrl: 'views/ui/material/form.html',
                data : { title: 'Form' }
              })
              .state('ui.material.list', {
                url: '/list',
                templateUrl: 'views/ui/material/list.html',
                data : { title: 'List' }
              })
              .state('ui.material.ngmaterial', {
                url: '/ngmaterial',
                templateUrl: 'views/ui/material/ngmaterial.html',
                data : { title: 'NG Material' }
              })
            // form routers
            .state('ui.form', {
              url: '/form',
              template: '<div ui-view></div>'
            })
              .state('ui.form.layout', {
                url: '/layout',
                templateUrl: 'views/ui/form/layout.html',
                data : { title: 'Layouts' }
              })
              .state('ui.form.element', {
                url: '/element',
                templateUrl: 'views/ui/form/element.html',
                data : { title: 'Elements' }
              })              
              .state('ui.form.validation', {
                url: '/validation',
                templateUrl: 'views/ui/form/validation.html',
                data : { title: 'Validations' }
              })
              .state('ui.form.select', {
                url: '/select',
                templateUrl: 'views/ui/form/select.html',
                data : { title: 'Selects' },
                controller: 'SelectCtrl',
                resolve: load(['ui.select','scripts/controllers/select.js'])
              })
              .state('ui.form.editor', {
                url: '/editor',
                templateUrl: 'views/ui/form/editor.html',
                data : { title: 'Editor' },
                controller: 'EditorCtrl',
                resolve: load(['textAngular','scripts/controllers/editor.js'])
              })
              .state('ui.form.slider', {
                url: '/slider',
                templateUrl: 'views/ui/form/slider.html',
                data : { title: 'Slider' },
                controller: 'SliderCtrl',
                resolve: load('scripts/controllers/slider.js')
              })
              .state('ui.form.tree', {
                url: '/tree',
                templateUrl: 'views/ui/form/tree.html',
                data : { title: 'Tree' },
                controller: 'TreeCtrl',
                resolve: load('scripts/controllers/tree.js')
              })
              .state('ui.form.file-upload', {
                url: '/file-upload',
                templateUrl: 'views/ui/form/file-upload.html',
                data : { title: 'File upload' },
                controller: 'UploadCtrl',
                resolve: load(['angularFileUpload', 'scripts/controllers/upload.js'])
              })
              .state('ui.form.image-crop', {
                url: '/image-crop',
                templateUrl: 'views/ui/form/image-crop.html',
                data : { title: 'Image Crop' },
                controller: 'ImgCropCtrl',
                resolve: load(['ngImgCrop','scripts/controllers/imgcrop.js'])
              })
              .state('ui.form.editable', {
                url: '/editable',
                templateUrl: 'views/ui/form/xeditable.html',
                data : { title: 'Xeditable' },
                controller: 'XeditableCtrl',
                resolve: load(['xeditable','scripts/controllers/xeditable.js'])
              })
            // table routers
            .state('ui.table', {
              url: '/table',
              template: '<div ui-view></div>'
            })
              .state('ui.table.static', {
                url: '/static',
                templateUrl: 'views/ui/table/static.html',
                data : { title: 'Static', theme: { primary: 'blue'} }
              })
              .state('ui.table.smart', {
                url: '/smart',
                templateUrl: 'views/ui/table/smart.html',
                data : { title: 'Smart' },
                controller: 'TableCtrl',
                resolve: load(['smart-table', 'scripts/controllers/table.js'])
              })
              .state('ui.table.datatable', {
                url: '/datatable',
                data : { title: 'Datatable' },
                templateUrl: 'views/ui/table/datatable.html'
              })
              .state('ui.table.footable', {
                url: '/footable',
                data : { title: 'Footable' },
                templateUrl: 'views/ui/table/footable.html'
              })
              .state('ui.table.nggrid', {
                url: '/nggrid',
                templateUrl: 'views/ui/table/nggrid.html',
                data : { title: 'NG Grid' },
                controller: 'NGGridCtrl',
                resolve: load(['ngGrid','scripts/controllers/nggrid.js'])
              })
              .state('ui.table.uigrid', {
                url: '/uigrid',
                templateUrl: 'views/ui/table/uigrid.html',
                data : { title: 'UI Grid' },
                controller: "UiGridCtrl",
                resolve: load(['ui.grid', 'scripts/controllers/uigrid.js'])
              })
              .state('ui.table.editable', {
                url: '/editable',
                templateUrl: 'views/ui/table/editable.html',
                data : { title: 'Editable' },
                controller: 'XeditableCtrl',
                resolve: load(['xeditable','scripts/controllers/xeditable.js'])
              })
            // chart
            .state('ui.chart', {
              url: '/chart',
              templateUrl: 'views/ui/chart/chart.html',
              data : { title: 'Charts' },
              resolve: load('scripts/controllers/chart.js')
            })
            // map routers
            .state('ui.map', {
              url: '/map',
              template: '<div ui-view></div>'
            })
              .state('ui.map.google', {
                url: '/google',
                templateUrl: 'views/ui/map/google.html',
                data : { title: 'Gmap' },
                controller: 'GoogleMapCtrl',
                resolve: load(['ui.map', 'scripts/controllers/load-google-maps.js', 'scripts/controllers/googlemap.js'], function(){ return loadGoogleMaps(); })
              })
              .state('ui.map.vector', {
                url: '/vector',
                templateUrl: 'views/ui/map/vector.html',
                data : { title: 'Vector' },
                controller: 'VectorMapCtrl',
                resolve: load('scripts/controllers/vectormap.js')
              })

          .state('page', {
            url: '/page',
            views: {
              '': {
                templateUrl: 'views/layout.html'
              },
              'aside': {
                templateUrl: 'views/aside.html'
              },
              'content': {
                templateUrl: 'views/content.html'
              }
            }
          })
            .state('page.profile', {
              url: '/profile',
              templateUrl: 'views/pages/profile.html',
              data : { title: 'Profile', theme: { primary: 'green'} }
            })
            .state('page.settings', {
              url: '/settings',
              templateUrl: 'views/pages/settings.html',
              data : { title: 'Settings' }
            })
            .state('page.blank', {
              url: '/blank',
              templateUrl: 'views/pages/blank.html',
              data : { title: 'Blank' }
            })
            .state('page.document', {
              url: '/document',
              templateUrl: 'views/pages/document.html',
              data : { title: 'Document' }
            })
            .state('404', {
              url: '/404',
              templateUrl: 'views/pages/404.html'
            })
            .state('505', {
              url: '/505',
              templateUrl: 'views/pages/505.html'
            })
            .state('access', {
              url: '/access',
              template: '<div class="indigo bg-big"><div ui-view class="fade-in-down smooth"></div></div>'
            })
            .state('access.signin', {
              url: '/signin',
              templateUrl: 'views/pages/signin.html'
            })
            .state('access.signup', {
              url: '/signup',
              templateUrl: 'views/pages/signup.html'
            })
            .state('access.forgot-password', {
              url: '/forgot-password',
              templateUrl: 'views/pages/forgot-password.html'
            })
            .state('access.lockme', {
              url: '/lockme',
              templateUrl: 'views/pages/lockme.html'
            })
          ;


          function load(srcs, callback) {
            return {
                deps: ['$ocLazyLoad', '$q',
                  function( $ocLazyLoad, $q ){
                    var deferred = $q.defer();
                    var promise  = false;
                    srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                    if(!promise){
                      promise = deferred.promise;
                    }
                    angular.forEach(srcs, function(src) {
                      promise = promise.then( function(){
                        angular.forEach(MODULE_CONFIG, function(module) {
                          if( module.name == src){
                            if(!module.module){
                              name = module.files;
                            }else{
                              name = module.name;
                            }
                          }else{
                            name = src;
                          }
                        });
                        return $ocLazyLoad.load(name);
                      } );
                    });
                    deferred.resolve();
                    return callback ? promise.then(function(){ return callback(); }) : promise;
                }]
            }
          }
      }
    ]
  );

'use strict';

/**
 * @ngdoc function
 * @name app.directive:lazyload
 * @description
 * # uiScroll
 * Directive of the app
 */
angular.module('app')
  .directive('lazyLoad', ['MODULE_CONFIG','$ocLazyLoad', '$compile', function(MODULE_CONFIG, $ocLazyLoad, $compile) {
    return {
      restrict: 'A',
      compile: function (el, attrs) {
        var contents = el.contents().remove(), name;
        return function(scope, el, attrs){
          angular.forEach(MODULE_CONFIG, function(module) {
            if( module.name == attrs.lazyLoad){
              if(!module.module){
                name = module.files;
              }else{
                name = module.name;
              }
            }
          });
          $ocLazyLoad.load(name)
          .then(function(){
            $compile(contents)(scope, function(clonedElement, scope) {
              el.append(clonedElement);
            });
          });
        }
      }
    };
  }])

'use strict';

/**
 * @ngdoc function
 * @name app.directive:uiFullscreen
 * @description
 * # uiFullscreen
 * Directive of the app
 */
angular.module('app')
  .directive('uiFullscreen', ['$ocLazyLoad', '$document', function($ocLazyLoad, $document) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.addClass('hide');
        $ocLazyLoad.load('../libs/jquery/screenfull/dist/screenfull.min.js').then(function(){
          if (screenfull.enabled) {
            el.removeClass('hide');
          } else{
            return;
          }
          el.bind('click', function(){
            var target;
            attr.target && ( target = angular.element(attr.target)[0] );
            screenfull.toggle(target);
          });

          var body = angular.element($document[0].body);
          $document.on(screenfull.raw.fullscreenchange, function () {
            if(screenfull.isFullscreen){
              body.addClass('fullscreen');
            }else{
              body.removeClass('fullscreen');
            }
          });
        });
      }
    };
  }]);

'use strict';

angular.module('ui.jp', ['oc.lazyLoad', 'ui.load']).
  value('uiJpConfig', {}).
  directive('uiJp', ['uiJpConfig', 'MODULE_CONFIG', 'uiLoad', '$timeout', function uiJpInjectingFunction(uiJpConfig, MODULE_CONFIG, uiLoad, $timeout) {

  return {
    restrict: 'A',
    compile: function uiJpCompilingFunction(tElm, tAttrs) {

      var options = uiJpConfig && uiJpConfig[tAttrs.uiJp];

      return function uiJpLinkingFunction(scope, elm, attrs) {

        function getOptions(){
          var linkOptions = [];

          // If ui-options are passed, merge (or override) them onto global defaults and pass to the jQuery method
          if (attrs.uiOptions) {
            linkOptions = scope.$eval('[' + attrs.uiOptions + ']');
            if (angular.isObject(options) && angular.isObject(linkOptions[0])) {
              linkOptions[0] = angular.extend({}, options, linkOptions[0]);
            }
          } else if (options) {
            linkOptions = [options];
          }
          return linkOptions;
        }

        // If change compatibility is enabled, the form input's "change" event will trigger an "input" event
        if (attrs.ngModel && elm.is('select,input,textarea')) {
          elm.bind('change', function() {
            elm.trigger('input');
          });
        }

        // Call jQuery method and pass relevant options
        function callPlugin() {
          $timeout(function() {
            $(elm)[attrs.uiJp].apply($(elm), getOptions());
          }, 0, false);
        }

        function refresh(){
          // If ui-refresh is used, re-fire the the method upon every change
          if (attrs.uiRefresh) {
            scope.$watch(attrs.uiRefresh, function() {
              callPlugin();
            });
          }
        }

        var jp = false;
        angular.forEach(MODULE_CONFIG, function(module) {
          if( module.name == attrs.uiJp){
            jp = module.files;
          }
        });

        if ( jp ) {
          uiLoad.load(jp).then(function() {
            callPlugin();
            refresh();
          }).catch(function() {
            
          });
        } else {
          callPlugin();
          refresh();
        }
      };
    }
  };
}]);

'use strict';

/**
 * @ngdoc function
 * @name app.directive:uiNav
 * @description
 * # uiScroll
 * Directive of the app
 */
angular.module('app')
  .directive('uiNav', ['$timeout', function($timeout) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.find('a').bind('click', function(e) {
          var li = angular.element(this).parent();
          var active = li.parent()[0].querySelectorAll('.active');
          li.toggleClass('active');
          angular.element(active).removeClass('active');
        });
      }
    };
  }]);

'use strict';

/**
 * @ngdoc function
 * @name app.directive:uiScroll
 * @description
 * # uiScroll
 * Directive of the app
 */
angular.module('app')
  .directive('uiScroll', ['$location', '$anchorScroll', function($location, $anchorScroll) {
    return {
      restrict: 'AC',
      replace: true,
      link: function(scope, el, attr) {
        el.bind('click', function(e) {
          $location.hash(attr.uiScroll);
          $anchorScroll();
        });
      }
    };
  }]);
angular.module('app')
  .directive('uiToggleClass', ['$timeout', '$document', function($timeout, $document) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.on('click', function(e) {
          e.preventDefault();
          var classes = attr.uiToggleClass.split(','),
              targets = (attr.target && attr.target.split(',')) || Array(el),
              key = 0;
          angular.forEach(classes, function( _class ) {
            var target = targets[(targets.length && key)];
            $( target ).toggleClass(_class);
            key ++;
          });
          el.toggleClass('active');

        });
      }
    };
  }]);

'use strict';

/**
 * 0.0.1
 * local storage
 * 
 * @ flatfull.com All Rights Reserved.
 * Author url: http://themeforest.net/user/flatfull
 */

angular.module('ngStore', []).
provider('ngStore', [function(){
  return {
    $get: ['NSModelFactory', function($NSMF) {
      return {
        model: function(name) {
          var model = new $NSMF(name);
          return model;
        }
      };
    }]
  };
}])
.factory('NSModelFactory', ['$log', function($log){

  function Store(name, serializer) {
    if( !this.localStorage ) {
      throw "localStorage: Environment does not support localStorage."
    }
    this.name = name;
    this.serializer = serializer || {
      serialize: function(item) {
        return isObject(item) ? JSON.stringify(item) : item;
      },
      // fix for "illegal access" error on Android when JSON.parse is passed null
      deserialize: function (data) {
        return data && JSON.parse(data);
      }
    };
    var store = this.localStorage().getItem(this.name);
    this.records = (store && store.split(",")) || [];
  };

  Store.prototype = {

    // Save the current state of the **Store** to *localStorage*.
    save: function() {
      this.localStorage().setItem(this.name, this.records.join(","));
    },

    // Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
    // have an id of it's own.
    create: function(model) {
      if (!model.id && model.id !== 0) {
        model.id = guid();
        model.set(model.idAttribute, model.id);
      }
      this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
      this.records.push(model.id.toString());
      this.save();
      return this.find(model);
    },

    // Update a model by replacing its copy in `this.data`.
    update: function(model) {
      this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
      var modelId = model.id.toString();
      if (!contains(this.records, modelId)) {
        this.records.push(modelId);
        this.save();
      }
      return this.find(model);
    },

    // Retrieve a model from `this.data` by id.
    find: function(model) {
      return this.serializer.deserialize(this.localStorage().getItem(this._itemName(model.id)));
    },

    // Return the array of all models currently in storage.
    findAll: function() {
      var result = [];
      for (var i = 0, id, data; i < this.records.length; i++) {
        id = this.records[i];
        data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
        if (data != null) result.push(data);
      }
      return result;
    },

    // Delete a model from `this.data`, returning it.
    destroy: function(model) {
      this.localStorage().removeItem(this._itemName(model.id));
      var modelId = model.id.toString();
      for (var i = 0, id; i < this.records.length; i++) {
        if (this.records[i] === modelId) {
          this.records.splice(i, 1);
        }
      }
      this.save();
      return model;
    },

    nextId: function(){
      return this.records.length == 0 ? 1 : Number(this.records[this.records.length - 1]) + 1;
    },

    localStorage: function() {
      return localStorage;
    },

    // Clear localStorage for specific collection.
    _clear: function() {
      var local = this.localStorage(),
        itemRe = new RegExp("^" + this.name + "-");

      // Remove id-tracking item (e.g., "foo").
      local.removeItem(this.name);

      // Match all data items (e.g., "foo-ID") and remove.
      for (var k in local) {
        if (itemRe.test(k)) {
          local.removeItem(k);
        }
      }

      this.records.length = 0;
    },

    // Size of localStorage.
    _storageSize: function() {
      return this.localStorage().length;
    },

    _itemName: function(id) {
      return this.name+"-"+id;
    }

  };

  return Store;

  // Generate four random hex digits.
  function S4() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };

  // Generate a pseudo-GUID by concatenating random hexadecimal.
  function guid() {
     return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  };

  function isObject(item) {
    return item === Object(item);
  }

  function contains(array, item) {
    var i = array.length;
    while (i--) if (array[i] === item) return true;
    return false;
  }
}]);

'use strict';

/**
 * 0.1.1
 * Deferred load js/css file, used for ui-jq.js and Lazy Loading.
 * 
 * @ flatfull.com All Rights Reserved.
 * Author url: http://themeforest.net/user/flatfull
 */

angular.module('ui.load', [])
	.service('uiLoad', ['$document', '$q', '$timeout', function ($document, $q, $timeout) {

		var loaded = [];
		var promise = false;
		var deferred = $q.defer();

		/**
		 * Chain loads the given sources
		 * @param srcs array, script or css
		 * @returns {*} Promise that will be resolved once the sources has been loaded.
		 */
		this.load = function (srcs) {
			srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
			var self = this;
			if(!promise){
				promise = deferred.promise;
			}
			angular.forEach(srcs, function(src) {
				promise = promise.then( function(){
					return src.indexOf('.css') >=0 ? self.loadCSS(src) : self.loadScript(src);
				} );
			});
			deferred.resolve();
			return promise;
		}

		/**
		 * Dynamically loads the given script
		 * @param src The url of the script to load dynamically
		 * @returns {*} Promise that will be resolved once the script has been loaded.
		 */
		this.loadScript = function (src) {
			if(loaded[src]) return loaded[src].promise;

			var deferred = $q.defer();
			var script = $document[0].createElement('script');
			script.src = src;
			script.onload = function (e) {
				$timeout(function () {
					deferred.resolve(e);
				});
			};
			script.onerror = function (e) {
				$timeout(function () {
					deferred.reject(e);
				});
			};
			$document[0].body.appendChild(script);
			loaded[src] = deferred;

			return deferred.promise;
		};

		/**
		 * Dynamically loads the given CSS file
		 * @param href The url of the CSS to load dynamically
		 * @returns {*} Promise that will be resolved once the CSS file has been loaded.
		 */
		this.loadCSS = function (href) {
			if(loaded[href]) return loaded[href].promise;

			var deferred = $q.defer();
			var style = $document[0].createElement('link');
			style.rel = 'stylesheet';
			style.type = 'text/css';
			style.href = href;
			style.onload = function (e) {
				$timeout(function () {
					deferred.resolve(e);
				});
			};
			style.onerror = function (e) {
				$timeout(function () {
					deferred.reject(e);
				});
			};
			$document[0].head.appendChild(style);
			loaded[href] = deferred;

			return deferred.promise;
		};
}]);

'use strict';

/* Filters */
// need load the moment.js to use this filter. 
angular.module('app')
  .filter('fromNow', function() {
    return function(date) {
      return moment(date).fromNow();
    }
  });
