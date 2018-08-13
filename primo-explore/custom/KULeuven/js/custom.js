(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);

var feeds = [{
    feedUrl: "https://bib.kuleuven.be/english/ub/news/limo-news/rss",
    feedLang: ['en_US'],
    feedContentType: 'full',
    feedInst: "KU Leuven",
    feedFilter: []
}, {
    feedUrl: "https://bib.kuleuven.be/ub/nieuws/limo-nieuws/rss",
    feedLang: ['nl_BE'],
    feedContentType: 'full',
    feedInst: "KU Leuven",
    feedFilter: []
}, {
    feedUrl: "https://limo-libis.blogspot.com/feeds/posts/default",
    feedLang: ['en_US'],
    feedContentType: 'snippet',
    feedInst: "LIMO",
    feedFilter: [{ param: "entry.categories", value: "All Views" }, { param: "entry.categories", value: "KULeuven" }, { param: "entry.categories", value: "KU Leuven Association" }]
}, {
    feedUrl: "https://limo-libis-nl.blogspot.com/feeds/posts/default",
    feedLang: ['nl_BE'],
    feedContentType: 'snippet',
    feedInst: "LIMO",
    feedFilter: [{ param: "entry.categories", value: "All Views" }, { param: "entry.categories", value: "KULeuven" }, { param: "entry.categories", value: "KU Leuven Association" }]
}];

app.component('prmNews', {
    bindings: { parentCtrl: '<' },
    controller: 'prmNewsController',
    template: '\n      <md-card ng-hide="!feedresults.length" class ="default-card _md md-primoExplore-theme">\n        <md-card-content>\n         <h1 ng-hide="!feedresults.length || title===\'\' ">{{title}}</h1>\n         <md-list>\n         <md-list-item ng-repeat="feed in feedresults | limitTo: maxfeeds">\n         <div class ="md-list-item-text"> <a href="{{ feed.link }}" target="_news">{{ feed.title }}</a>\n            <div class ="blogheaderbody">{{ feed.contentSnippet }}</div>\n         </div>\n         </md-list-item>\n         </md-list>\n        </md-card-content>\n      </md-card>\n'
});

app.controller("prmNewsController", ['$scope', '$http', 'FeedService', function ($scope, $http, FeedService) {
    var self = this;
    var locale = self.parentCtrl.staticService.userSessionManagerService.i18nService.getLanguage();
    var vid = window.appConfig['vid'];

    var dm = new Date();
    dm.setHours(24, 0, 0, 0);
    $scope.maxfeeds = 3;

    /* set title for locale to '' to hide Title */
    var title = {
        'nl_BE': 'Nieuws',
        'en_US': 'News',
        'fr_FR': 'Nouvelles'
    };

    $scope.title = title[locale];
    $scope.feedresults = [];

    var filteredFeeds = feeds.filter(function (item) {
        return item.feedLang.indexOf(locale) >= 0;
    }); //feedLang equals locale language
    //console.log (filteredFeeds)

    for (var f = 0; f <= 10 && f < filteredFeeds.length; f++) {
        var feedConf = filteredFeeds[f];
        // console.log(feedConf.feedUrl)
        FeedService.parseFeed(feedConf).then(function (res) {
            //    console.log('----FeedService.parseFeed(feedConf) ---------------------')
            $scope.feedresults = $scope.feedresults.concat(res);

            FeedService.sortFeed($scope.feedresults);
        });
    }
}]);

app.component('prmAuthenticationAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmPromoteLoginController',
    template: ''
});

app.component('prmPromoteLogin', {
    bindings: { parentCtrl: '<' },
    controller: 'prmPromoteLoginController',
    template: ''
});

app.controller("prmPromoteLoginController", ['$scope', '$http', '$mdDialog', '$cookies', function ($scope, $http, $mdDialog, $cookies) {
    var self = this;
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
                primoPromoteLogin: $scope.primoPromoteLogin
            },
            controller: DialogController
        });
    };

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

    if (!self.parentCtrl.isLoggedIn) {
        if (localStorage['primoPromoteLogin'] === 'alwaysSignin') {
            /* Sreiderict to login */;
            self.parentCtrl.loginService.handleLoginClick();
        } else {
            if (!sessionStorage['primoPromoteLogin'] && !localStorage['primoPromoteLogin']) {
                $scope.showSignInPopup();
                sessionStorage.setItem('primoPromoteLogin', 'SignInPopup');
            }
        }
    }
}]);
})();