(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);
/*
 * Add link to pnx and xml
 * Tom vanmechelen
 */

app.controller('addPnxXmlController', [function () {
    var vm = this;

    vm.getRecordId = getRecordId;
    vm.getLinkToPnx = getLinkToPnx;
    vm.getLinkToXml = getLinkToXml;

    function getRecordId() {
        return vm.parentCtrl.item.pnx.control.recordid;
    }

    function getLinkToPnx() {
        return '/primo_library/libweb/jqp/record/' + getRecordId() + '.pnx';
    }

    function getLinkToXml() {
        var patt = /^TN_/;
        if (!patt.test(getRecordId())) {
            return '/primo_library/libweb/jqp/record/' + getRecordId() + '.xml';
        } else {
            return;
        }
    }
}]);

/*
app.component('addPnxXml', {
    bindings: { parentCtrl: '<' },
    template: '<div ng-if="$ctrl.recordid" class="recordid"><span class="recordid-text">{{$ctrl.recordid}}</span></div>'
});
*/

app.component('prmBriefResultContainerAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'addPnxXmlController',
    template: '\n        <add-pnx-xml>\n            <div ng-if="$ctrl.getRecordId()" class ="pnx_xml">\n            <a href="{{$ctrl.getLinkToPnx()}}" target=\'_blank\'  ng-if="$ctrl.getLinkToPnx()"><span class ="recordid-text">PNX</span></a>\n            <span ng-if="$ctrl.getLinkToXml()"> - </span>\n            <a href="{{$ctrl.getLinkToXml()}}" target=\'xml\'  ng-if="$ctrl.getLinkToXml()"><span class ="recordid-text">XML</span></a>\n            </div>\n            </add-pnx-xml>'
});

var feeds = [{
    feedUrl: "http://khbobibliotheken.wordpress.com/feed/",
    feedLang: ['nl_BE', 'en_US'],
    feedContentType: 'snippet',
    feedInst: "KHBO",
    feedFilter: []
}, {
    feedUrl: "https://kathoko.wordpress.com/feed/",
    feedLang: ['nl_BE', 'en_US'],
    feedContentType: 'snippet',
    feedInst: "KATHO",
    feedFilter: [{ param: "entry.categories", value: "limo" }, { param: "entry.categories", value: "e-bronnen" }]
}, {
    feedUrl: "http://limo-libis.blogspot.com/feeds/posts/default",
    feedLang: ['en_US'],
    feedContentType: 'full',
    feedInst: "LIMO",
    feedFilter: [{ param: "entry.categories", value: "All Views" }, { param: "entry.categories", value: "VIVES" }, { param: "entry.categories", value: "KU Leuven Association" }]

}, {
    feedUrl: "http://limo-libis-nl.blogspot.com/feeds/posts/default",
    feedLang: ['nl_BE'],
    feedContentType: 'full',
    feedInst: "LIMO",
    feedFilter: [{ param: "entry.categories", value: "All Views" }, { param: "entry.categories", value: "VIVES" }, { param: "entry.categories", value: "KU Leuven Association" }]

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
/*
 * Add Icon of source to briefdisplay
 * Tom vanmechelen
 */

app.controller('addSourceIconController', ['$scope', function ($scope) {
    var self = this;
    var parentCtrl = $scope.$parent.$ctrl.parentCtrl;

    var iconConf = [
    /*  { 'sourceid': '32LIBIS_ALMA_DS', 'iconUrl': '//limo.libis.be/primo_library/libweb/libis/images/limo.png', 'iconText': '' }, */
    { 'sourceid': 'lirias', 'iconUrl': '//limo.libis.be/primo_library/libweb/libis/images/lirias.jpg', 'iconText': 'Lirias' }];
    var iconConfSources = iconConf.map(function (obj) {
        return obj.sourceid;
    });

    self.sourceid = '';
    if ('sourceid' in parentCtrl.item.pnx.control) {
        self.sourceid = parentCtrl.item.pnx.control.sourceid[0];
        if (iconConfSources.indexOf(self.sourceid) >= 0) {
            self.icon = iconConf.find(function (x) {
                return x.sourceid === self.sourceid;
            });
        } else {
            self.sourceid = '';
        }
    }
}]);

app.component('addSourceIcon', {
    bindings: { sourceId: '<' },
    controller: 'addSourceIconController',
    template: '<div ng-if="$ctrl.sourceid" class="sourceid"><img src="{{$ctrl.icon.iconUrl}}" class="source-icon"><span class="source-text">{{$ctrl.icon.iconText}}</span></div>'
});

app.controller('addSourceIconTagController', ['$scope', '$element', '$compile', function ($scope, $element, $compile) {
    var self = this;
    var sourceId = self.parentCtrl.item.pnx.control.sourceid[0];

    var code = angular.element('<add-source-icon></add-source-icon>');
    $element.parent().parent().find('div').append($compile(code)($scope));
}]);

app.component('prmBriefResultAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'addSourceIconTagController',
    template: ''
});

/*
app.component('prmSearchResultThumbnailContainerAfter', {
    bindings: { parentCtrl: '<' },
    template: `<add-source-icon></add-source-icon>`
});
*/
})();