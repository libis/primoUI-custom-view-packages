/*
app.component('prmAuthenticationAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmPromoteLoginController',
    template:''
});

app.component('prmPromoteLogin', {
    bindings: { parentCtrl: '<' },
    controller: 'prmPromoteLoginController',
    template: ''
});

app.controller("prmPromoteLoginController", ['$scope', '$http', '$mdDialog', '$cookies', function ($scope, $http, $mdDialog, $cookies) {
    let self = this;
    var locale = self.parentCtrl.primolyticsService.userSessionManagerService.i18nService.getLanguage();
    var vid = window.appConfig['vid'];

    if (!self.parentCtrl.isLoggedIn) {
      // Redirect to Login With institution=KULeuven 
      var auth = window.appConfig.authentication[0]
            var loginUrl = self.parentCtrl.loginService.loginUrl( auth['profile-name'] , auth['authentication-system']  )
            loginUrl = loginUrl.replace(/institution=([^&])/, "institution=KUL");
            document.location.href=loginUrl;
    }
}]);


*/