(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);

var feeds = [{
    feedUrl: "http://limo-libis.blogspot.com/feeds/posts/default",
    feedLang: ['en_US'],
    feedContentType: 'full',
    feedInst: "LIMO",
    feedFilter: [{ param: "entry.categories", value: "All Views" }, { param: "entry.categories", value: "UCLL" }, { param: "entry.categories", value: "KU Leuven Association" }]
}, {
    feedUrl: "http://limo-libis-nl.blogspot.com/feeds/posts/default",
    feedLang: ['nl_BE'],
    feedContentType: 'full',
    feedInst: "LIMO",
    feedFilter: [{ param: "entry.categories", value: "All Views" }, { param: "entry.categories", value: "UCLL" }, { param: "entry.categories", value: "KU Leuven Association" }]
}, {
    feedUrl: "http://bib.kuleuven.be/english/ub/news/limo-news/rss",
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