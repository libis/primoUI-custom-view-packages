/*
app.component('prmAuthenticationAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmPromoteLoginController',
    template:''
});


app.component('prmPromoteLogin', {
    bindings: {
        parentCtrl: '<'
    },
    controller: 'prmPromoteLoginController',
    template: ''
});

app.controller("prmPromoteLoginController", ['$scope', '$http', '$mdDialog', '$cookies', '$element', function ($scope, $http, $mdDialog, $cookies, $element) {
    let self = this;
    var locale = self.parentCtrl.primolyticsService.userSessionManagerService.i18nService.getLanguage();
    var vid = window.appConfig['vid'];

    // Ignore this in prm-login-alma-mashup, only if parent is prm-user-area
    if (($element.nativeElement).closest('prm-user-area')) {
        if (!self.parentCtrl.isLoggedIn) {
            var auth = window.appConfig.authentication[0];
            var loginUrl = self.parentCtrl.loginService.loginUrl(auth['profile-name'], auth['authentication-system']);
            document.location.href = loginUrl.replace(/institution=([^&])/, "institution=KUL");
            l;
        }
    }
}]);
*/