(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);
/*
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
    let self = this;
    var locale = self.parentCtrl.primolyticsService.userSessionManagerService.i18nService.getLanguage();
    var vid = window.appConfig['vid'];

    if (!self.parentCtrl.isLoggedIn) {
        // Redirect to Login With institution=KULeuven 
        var auth = window.appConfig.authentication[0]
        var loginUrl = self.parentCtrl.loginService.loginUrl(auth['profile-name'], auth['authentication-system'])
        //loginUrl = loginUrl.replace(/institution=([^&])+/, "institution=KUL");
        //      document.location.href=loginUrl;
        self.parentCtrl.loginService.handleLoginClick()
    }

}]);
*/

var feeds = [{
    feedUrl: "https://bib.kuleuven.be/english/ub/news/limo-news/rss",
    feedLang: ['en_US'],
    feedContentType: 'title',
    feedInst: "KU Leuven",
    feedFilter: []
}, {
    feedUrl: "https://bib.kuleuven.be/ub/nieuws/limo-nieuws/rss",
    feedLang: ['nl_BE'],
    feedContentType: 'title',
    feedInst: "KU Leuven",
    feedFilter: []
}, {
    feedUrl: "https://limo-libis.blogspot.com/feeds/posts/default",
    feedLang: ['en_US'],
    feedContentType: 'title',
    feedInst: "LIMO",
    feedFilter: [{ param: "entry.categories", value: "All Views" }, { param: "entry.categories", value: "Odisee" }, { param: "entry.categories", value: "KULeuven" }, { param: "entry.categories", value: "KU Leuven Association" }]
}, {
    feedUrl: "https://limo-libis-nl.blogspot.com/feeds/posts/default",
    feedLang: ['nl_BE'],
    feedContentType: 'title',
    feedInst: "LIMO",
    feedFilter: [{ param: "entry.categories", value: "All Views" }, { param: "entry.categories", value: "Odisee" }, { param: "entry.categories", value: "KULeuven" }, { param: "entry.categories", value: "KU Leuven Association" }]

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
})();