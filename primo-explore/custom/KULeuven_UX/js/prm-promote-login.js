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

app.controller("prmPromoteLoginController", ['$scope', '$http', '$mdDialog', '$cookies', function ($scope, $http, $mdDialog, $cookies) {
    let self = this;
    var locale = self.parentCtrl.primolyticsService.userSessionManagerService.i18nService.getLanguage();
   
    var vid = window.appConfig['vid'];
    /*
    var locale_text = {
        'nl_BE': {
            'title': 'Aanmelden',
            'title_label': "Aanmeldenn"
        },
        'en_US': {
            'title': 'Sign In',
            'title_label': "Sign In"
        },
        'fr_FR': {
            'title': 'Sign In?',
            'title_label': "Sign In?"
        },
    }

    $scope.title = locale_text[locale]['title'];
    $scope.title_label = locale_text[locale]['title_label'];
    */
    $scope.primoPromoteLogin = '';
    /*
    console.log($cookies)
    var favoriteCookie = $cookies.get('myFavorite');
    $cookies.put('myFavorite', 'oatmeal');
    */

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
  
    if (!self.parentCtrl.isLoggedIn) {
        if (localStorage['primoPromoteLogin'] === 'alwaysSignin') {
            /* Sreiderict to login */;
             self.parentCtrl.loginService.handleLoginClick()
        } else {
            if ( ! sessionStorage['primoPromoteLogin'] && ! localStorage['primoPromoteLogin'] ) {
                $scope.showSignInPopup();
                sessionStorage.setItem('primoPromoteLogin', 'SignInPopup');
            }
        }
    }
}]);
