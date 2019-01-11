/*
app.component('prmAuthenticationAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmPromoteLoginController',
    template:''
});

app.component('prmPromoteLogin', {
    bindings: { parentCtrl: '<' },
    controller: 'prmPromoteLoginController',
    template: '',
});
*/
/*
app.controller("prmPromoteLoginController", ['$scope', '$http', '$mdDialog', '$cookies', '$element', function ($scope, $http, $mdDialog, $cookies, $element) {
    let self = this;
    var locale = self.parentCtrl.primolyticsService.userSessionManagerService.i18nService.getLanguage();
   
    $scope.primoPromoteLogin = '';
    $scope.showSignInPopup = function () {
        var parentEl = angular.element(document.body);

        $mdDialog.show({
            parent: parentEl,
            templateUrl: 'custom/CENTRAL_PACKAGE/html/templates/promote_login_' + locale + '.html',
            locals: {
                primoPromoteLogin:  $scope.primoPromoteLogin
            },
            controller: DialogController
        });

    }

    function DialogController($scope, $mdDialog) {
        $scope.loginDialog = function () {
            self.parentCtrl.loginService.handleLoginClick();
        };

        $scope.closeDialog = function () {
            $mdDialog.hide();
        };
        $scope.changePromoteOption = function () {
            if ($scope.primoPromoteLogin === 'neverSignin' || $scope.primoPromoteLogin === 'alwaysSignin') {
                localStorage.setItem('primoPromoteLogin', $scope.primoPromoteLogin);
            } else {
                localStorage.removeItem('primoPromoteLogin');
                //sessionStorage.setItem('primoPromoteLogin', $scope.primoPromoteLogin);
            }
        };
    }
  
    // Ignore this in prm-login-alma-mashup, only if parent is prm-user-area
    if ( ($element.nativeElement).closest('prm-user-area') ) {
        if (!self.parentCtrl.isLoggedIn) {
            if (localStorage['primoPromoteLogin'] === 'alwaysSignin') {
                // redirect to login
                self.parentCtrl.loginService.handleLoginClick();
            } else {
                if (!sessionStorage['primoPromoteLogin'] && !localStorage['primoPromoteLogin']) {
                    $scope.showSignInPopup();
                    sessionStorage.setItem('primoPromoteLogin', 'SignInPopup');
                }
            }
        }
     }
}]);
*/