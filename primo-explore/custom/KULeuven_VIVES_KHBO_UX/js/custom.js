(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);
var randomNum = Math.floor(Math.random() * 10000 + 1);
var feedAntiCache = "?&t=" + new Date().getTime() + randomNum;

var feeds = [{
    feedUrl: "http://bib.kuleuven.be/english/ub/news/limo-news/rss" + feedAntiCache,
    feedLang: ['en_US'],
    feedContentType: 'title',
    feedInst: "KU Leuven",
    feedFilter: []
}, {
    feedUrl: "https://bib.kuleuven.be/ub/nieuws/limo-nieuws/rss" + feedAntiCache,
    feedLang: ['nl_BE'],
    feedContentType: 'title',
    feedInst: "KU Leuven",
    feedFilter: []
}, {
    feedUrl: "http://limo-libis.blogspot.com/feeds/posts/default" + feedAntiCache,
    feedLang: ['en_US'],
    feedContentType: 'title',
    feedInst: "LIMO",
    feedFilter: [{ param: "entry.categories", value: "All Views" }, { param: "entry.categories", value: "Odisee" }, { param: "entry.categories", value: "KULeuven" }, { param: "entry.categories", value: "KU Leuven Association" }]
}, {
    feedUrl: "http://limo-libis-nl.blogspot.com/feeds/posts/default" + feedAntiCache,
    feedLang: ['nl_BE'],
    feedContentType: 'title',
    feedInst: "LIMO",
    feedFilter: [{ param: "entry.categories", value: "All Views" }, { param: "entry.categories", value: "Odisee" }, { param: "entry.categories", value: "KULeuven" }, { param: "entry.categories", value: "KU Leuven Association" }]

}];

app.component('prmNews', {
    bindings: { parentCtrl: '<' },
    controller: 'prmNewsController',
    template: '<div>\n <md-list> <md-list-item class="md-2-line" ng-repeat="feed in feedresults"> <div class="md-list-item-text"> <a href="{{ feed.link }}" target="_news">{{ feed.title }}</a> <div class="blogheaderbody">{{ feed.contentSnippet }}</div> </div> </md-list-item> </md-list> </div>'
});

var feeddaysold = 60;
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

app.controller('FullViewAfterAltmetricsController', ['angularLoad', 'sectionOrdering', '$scope', '$element', '$compile', function (angularLoad, sectionOrdering, $scope, $element, $compile) {

    var self = this;
    self.$element = $element;
    self.$scope = $scope;

    var altmetricService = {
        scrollId: "Altmetrics",
        serviceName: "altmetrics",
        title: "nui.brief.results.tabs.altmetrics"
    };

    self.$onInit = function () {
        //console.log('------------------------- ALtmetrics $onInit ----------------');
        var vmcheck = self.$element.parent();

        while (vmcheck[0].localName !== 'prm-full-view' && vmcheck[0].localName !== 'body' && vmcheck[0].localName !== 'primo-explore') {
            vmcheck = vmcheck.parent();
        }
        self.parentvm = vmcheck;

        // Retrieve the DOI if it is present.
        try {
            self.doi = self.parentCtrl.item.pnx.addata.doi ? self.parentCtrl.item.pnx.addata.doi[0] : '';
        } catch (e) {
            console.log(e.message);
        };
        if (self.doi) {
            //console.log(vm.doi)

            self.parentCtrl.services.splice(self.parentCtrl.services.length - 1, 0, altmetricService);
            sectionOrdering(self.parentCtrl.fullViewService.servicesArray);
        }
        angularLoad.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {});
    };

    // Wait for the Altmetrics section to be created.

    self.parentCtrl.$scope.$watch(function () {
        return self.parentvm[0].querySelector('h2[translate="nui.brief.results.tabs.altmetrics"]');
    }, function (newVal, oldVal) {
        if (!oldVal && newVal !== oldVal) {
            var containerElement = newVal;
            while (containerElement.localName != 'prm-full-view-service-container' && containerElement.localName !== 'body' && containerElement.localName !== 'primo-explore') {
                containerElement = containerElement.parentElement;
            }

            containerElement = containerElement.children[1];
            // Move the badge into the Altmetrics section.
            if (containerElement && containerElement.appendChild) containerElement.appendChild(self.$element.children()[0]);
        }
    });

    /*
    vm.$postLink = function () {
        console.log('------------------------- ALtmetrics $postLink----------------');
        sectionOrdering(vm.parentCtrl.services);
    };
    */
}]);

app.component('prmFullViewAfterAltmetrics', {
    bindings: { parentCtrl: '<' },
    controller: 'FullViewAfterAltmetricsController',
    /*
    template: `<div class="full-view-section loc-altmetrics" flex-md="65" flex-lg="65" flex-xl="65" flex>
                    <div class="layout-full-width full-view-section-content" ng-if="$ctrl.doi">
                    <div class="section-header" layout="row" layout-align="center center">
                        <h2 class="section-title md-title light-text">
                            Social Popularity Statistics (AltMetrics) :
                        </h2>
                        <md-divider flex>
                        </md-divider>
                        </div>
                        <div class="full-view-section">
                           <div class="full-view-section-content">
                                <div class="section-body" layout="row" layout-align="center center">
                                    <div class="spaced-rows" layout="column">
                                        <div ng-if="$ctrl.doi" class="altmetric-embed" data-badge-type="medium-donut" data-badge-details="right" data-doi="{{$ctrl.doi}}">
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    </div>`
                    */
    template: '\n                                <div class="section-body" layout="row" layout-align="center center">\n                                    <div class="spaced-rows" layout="column">\n                                        <div ng-if="$ctrl.doi" class="altmetric-embed" data-badge-type="medium-donut" data-badge-details="right" data-doi="{{$ctrl.doi}}">\n                                        </div>\n                                    </div>\n                                </div>\n               '
});
})();