(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);
app.component('prmAanwinsten', {
    bindings: { parentCtrl: '<' },
    controller: 'prmAanwinstenController',
    template: '\n         <p>\n           Bekijk <a href="{{url}}">hier</a> welke publicaties de voorbije maand werden toegevoegd aan de catalogus\n         </p>\n'
});

app.controller("prmAanwinstenController", ['$scope', '$http', function ($scope, $http) {
    var self = this;
    var vid = window.appConfig['vid'];
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    if (month - 1 == 0) {
        month = 12;
        year = year - 1;
    } else {
        month = month - 1;
    }
    month = ("0" + month).slice(-2);

    console.log("Current month is: " + month);

    $scope.url = window.location.origin + "/primo-explore/search?query=any,contains,acquisitionDate" + year + month + "DOCVB*,AND&tab=phys_items_tab&search_scope=PHYS_ITEMS&vid=docvlaamsbrabant&lang=nl_BE&mode=advanced&offset=0;";
}]);

var feeds = [{
    feedUrl: "https://limo-libis.blogspot.com/feeds/posts/default",
    feedLang: ['en_US'],
    feedContentType: 'full',
    feedInst: "LIMO",
    feedFilter: [{ param: "entry.categories", value: "All Views" }, { param: "entry.categories", value: "LIBISnet" }]

}, {
    feedUrl: "https://limo-libis-nl.blogspot.com/feeds/posts/default",
    feedLang: ['nl_BE'],
    feedContentType: 'full',
    feedInst: "LIMO",
    feedFilter: [{ param: "entry.categories", value: "All Views" }, { param: "entry.categories", value: "LIBISnet" }]
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
    $scope.maxfeeds = 5;

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

app.component('prmSpotlight', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSpotlightController',
    template: '\n    <md-card class="default-card _md md-primoExplore-theme">\n      <img src="{{img}}" class="md-card-image" alt="image caption">\n      <md-card-title>\n          <md-card-title-text>\n              <span class="md-headline">{{title}}</span>\n          </md-card-title-text>\n      </md-card-title>\n      <md-card-content>\n        <div ng-bind-html="description"></div>\n      </md-card-content>\n    </md-card>\n'
});

app.controller("prmSpotlightController", ['$scope', '$http', function ($scope, $http) {
    var self = this;

    var RSS_URL = 'https://documentatiecentrumvb.blogspot.com/feeds/posts/default/?alt=rss';

    fetch("https://api.rss2json.com/v1/api.json?rss_url=" + RSS_URL).then(function (res) {
        return res.json();
    }).then(function (data) {

        var res = data.items;
        console.log(res);
        var posts = res.filter(function (item) {
            return item.categories.length > 0;
        }); // That's the main trick* !


        function toText(node) {
            var tag = document.createElement('div');
            tag.innerHTML = node;
            node = tag.innerText;
            return node;
        }
        function shortenText(text, startingPoint, maxLength) {
            return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
        }

        posts.forEach(function (el) {
            $scope.title = el.title;
            $scope.description = toText(el.description);

            var img = el.thumbnail; //Get thumnail image from rss feed
            console.log(img);
            $scope.img = 'https://1.bp.blogspot.com/-tcxIdAf5xwU/YDO8JM4qqJI/AAAAAAAAAAk/aZ_hBh8KfdkE_l4Lhlqd7r6RcH5TDwjAgCLcBGAsYHQ/s971/Holle%2Bwegen.jpg';
            if (img) {
                img = img.replace(/\/s72\-c/, ""); //replace /s72\-c with nothing
                $scope.img = img;
            }

            $scope.url = el.linkL;
        });
    });
}]);
})();