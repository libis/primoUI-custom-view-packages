import changeLangHTML from './changeLang.html'

class ChangeLangController {
  constructor($scope,$rootScope,$location) {
    let self = this;
    self.scope = $scope;
    self.rootScope = $rootScope;
    this.$location = $location;
    console.log(self)
    console.log('rootScope')
    console.log(self.rootScope)
    console.log('rootScope - userSessionManagerService')
    console.log(self.rootScope.$$childHead.$ctrl.userSessionManagerService)
    console.log(self.rootScope.$$childHead.$ctrl.userSessionManagerService.getUserLanguage())
    console.log(self.rootScope.$$childHead.$ctrl.userSessionManagerService.i18nService.getLanguage() )
    let searchParams=  this.$location.search();
    /*
    searchParams.lang= "fr_FR";
    this.$location.search(searchParams).replace();
    */
    //    .i18nService.setLanguage('nl_BE')
    console.log ('self.parentCtrl.configurationUtil:')
    console.log(self.parentCtrl.configurationUtil)
    console.log ('scope')
    console.log(self.scope)

    console.log ('window.appConfig')
    console.log(window.appConfig)


    $scope.changeLanguage = function($event) {
    console.log('LALALALALALALALALALAL');
      
//    var e = angular.element( document.querySelector('prm-change-lang') );
    /*
     s = e.scope(); 
     c = s.$ctrl; 
     */
    console.log ( e )
      
  function searchObj (obj, query) {
    var   HowDeep = 0;
        for (var key in obj) {
          var value = obj[key];
            if (typeof value === 'object') {
              //console.log('property=' + key + ' value=' + value);
              HowDeep++;
              if (HowDeep < 5 ) {
                searchObj(value, query);
              }
              
          }
  
          if (key === query) {
            console.log('property=' + key + ' value=' + value);
          }

          if (value === query) {
              console.log('property=' + key + ' value=' + value);
          }
  
      }
   }

   searchObj(window.appConfig,'ChangeLangService')


    }
}
  /* 
 HOE GERAAK IK AAN ChangeLangService ? Vie primo-dom-explorer?
*/

}

/*
https://stackoverflow.com/questions/19411502/angular-get-list-of-all-registered-services

mod = angular.module('primo-explore.config');
mod._invokeQueue

function allServices(mod, r) {
      //var inj = angular.element(document).injector().get;
      var inj = angular.element( document.querySelector('primo-explore')).injector().get
      if (!r) r = {};
        angular.forEach(angular.module(mod).requires, function(m) {allServices(m,r)});
        angular.forEach(angular.module(mod)._invokeQueue, function(a) {
        try { r[a[2][0]] = inj(a[2][0]); } catch (e) {}
      });
      return r;
    };

    allMyServices = allServices('primo-explore.config'); 
    
var e = angular.element( document.querySelector('prm-main-menu') );  s = e.scope(); c = s.$ctrl; i =e.injector();
uSMS = s.$root.$$childHead.$ctrl.userSessionManagerService;
LocalJwt= uSMS.jwtUtilService.getJwtFromLocalStorage();
uSMS.jwtUtilService.getDecodedToken();
uSMS.isJWTValidForApp(  LocalJwt );
uSMS.isViewCentral(appVid);
*/


ChangeLangController.$inject = ['$scope','$rootScope','$location'];

export let changeLangConfig = {
  bindings: {
    parentCtrl: '<',
  },
  controller: ChangeLangController,
  template: changeLangHTML
}