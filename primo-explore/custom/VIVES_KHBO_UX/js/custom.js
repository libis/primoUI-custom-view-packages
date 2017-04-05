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