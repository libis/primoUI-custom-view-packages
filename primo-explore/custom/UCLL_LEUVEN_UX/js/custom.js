(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);
var randomNum = Math.floor(Math.random() * 10000 + 1);
var feedAntiCache = "?&t=" + new Date().getTime() + randomNum;

var feeds = [{
    feedUrl: "http://limo-libis.blogspot.com/feeds/posts/default" + feedAntiCache,
    feedLang: ['en_US'],
    feedContentType: 'full',
    feedInst: "LIMO",
    feedFilter: [{ param: "entry.categories", value: "All Views" }, { param: "entry.categories", value: "UCLL" }, { param: "entry.categories", value: "KU Leuven Association" }]
}, {
    feedUrl: "http://limo-libis-nl.blogspot.com/feeds/posts/default" + feedAntiCache,
    feedLang: ['nl_BE'],
    feedContentType: 'full',
    feedInst: "LIMO",
    feedFilter: [{ param: "entry.categories", value: "All Views" }, { param: "entry.categories", value: "UCLL" }, { param: "entry.categories", value: "KU Leuven Association" }]
}];

app.component('prmNews', {
    bindings: { parentCtrl: '<' },
    controller: 'prmNewsController',
    template: '<div ng-repeat="feed in feedresults">\n<a href="{{ feed.link }}" target="_news">{{ feed.title }}</a>\n<div class="blogheaderbody">{{ feed.contentSnippet }}</div>\n\n </div>'
});

var feeddaysold = 90;
var dm = new Date();
dm.setHours(24, 0, 0, 0);
var maxfeeds = 4;

app.controller("prmNewsController", ['$scope', '$http', 'FeedService', function ($scope, $http, FeedService) {
    var self = this;
    var locale = self.parentCtrl.staticService.userSessionManagerService.i18nService.getLanguage();
    console.log(self);
    console.log(self.parentCtrl.staticService.userSessionManagerService.i18nService.getLanguage());

    var vid = window.appConfig['vid'];
    console.log(vid);

    $scope.feedresults = [];
    //console.log (feeds)
    var filteredFeeds = feeds.filter(function (item) {
        return item.feedLang.indexOf(locale) >= 0;
    }); //feedLang equals locale language
    //console.log (filteredFeeds)

    for (var f = 0; f <= 5 && f < filteredFeeds.length; f++) {
        var feedConf = filteredFeeds[f];
        //console.log(feedConf.feedUrl)
        FeedService.parseFeed(feedConf).then(function (res) {
            //        console.log('----FeedService.parseFeed(feedConf) ---------------------')
            $scope.feedresults = $scope.feedresults.concat(res);
            FeedService.sortFeed($scope.feedresults);
        });
    }

    /*
            FeedService.parseFeed(self.parentCtrl.feedUrl).then(function(res){
                $scope.loadButonText=angular.element(e.target).text();
                $scope.feeds=res.data.responseData.feed.entries;
    console.log ('--------------------- Feed : '+ self.parentCtrl.feedUrl  +'---------------------' );
    console.log (res );
    console.log (res.data );
                  });
    */
}]);

app.factory('FeedService', ['$http', function ($http) {
    var api_endpoint = 'https://services.libis.be/feed_aggregator?';
    function readFeedConfig(url) {
        return $http({ url: url, headers: { "X-From-ExL-API-Gateway": undefined } });
    }
    function readFeed(url) {
        return $http({ url: api_endpoint + url, headers: { "X-From-ExL-API-Gateway": undefined } });
    }
    function parseFeed(conf) {
        return readFeed(conf.feedUrl).then(function (res) {
            console.log(conf.feedUrl);
            console.log(conf.feedFilter);
            var patt = /^entry\.|^item\./i;
            var filteredResults = res.data.items.filter(function (item, index) {
                var retval = false;
                if (item.pubDate === "") {
                    item.pubDate = dm;
                    res.data.items[index].pubDate = dm;
                }
                /* no filter configured */
                if (conf.feedFilter.length === 0) {
                    retval = true;
                }
                conf.feedFilter.forEach(function (f) {
                    if (patt.test(f.param)) {
                        var ff = f.param.replace(patt, "");
                        if (Array.isArray(item[ff])) {
                            if (item[ff].indexOf(f.value) != -1) {
                                retval = true;
                            }
                        } else {
                            if (item[ff] == f.value) {
                                retval = true;
                            }
                        }
                    }
                });
                /* filter old items */
                if (feeddaysold < Math.ceil(dm.getTime() - new Date(item.pubDate).getTime()) / (1000 * 60 * 60 * 24)) {
                    retval = false;
                }

                return retval;
            });
            return filteredResults;
        });
    }
    function sortFeed(feeds) {
        return feeds.sort(compareDates);
    }

    return {
        readFeedConfig: readFeedConfig,
        readFeed: readFeed,
        parseFeed: parseFeed,
        sortFeed: sortFeed
    };
}]);

function compareDates(a, b) {
    //console.log (a);ex
    var dateA = new Date(a.pubDate);
    //console.log (dateA);
    var dateB = new Date(b.pubDate);
    if (dateA.getTime() === dm.getTime()) {
        dateA = new Date(0);
    }
    if (dateB.getTime() === dm.getTime()) {
        dateB = new Date(0);
    }
    return dateB - dateA;
}
})();