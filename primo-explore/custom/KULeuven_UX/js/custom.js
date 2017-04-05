(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);
app.controller('FullViewAfterAltmetricsController', ['angularLoad', function (angularLoad) {
    var vm = this;
    //  vm.doi = vm.parentCtrl.item.pnx.addata.doi[0] || '';

    vm.doi = vm.parentCtrl.item.pnx.addata.doi ? vm.parentCtrl.item.pnx.addata.doi[0] : '';

    vm.$onInit = function () {
        angularLoad.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {});
    };
}]);

app.component('prmFullViewAfterAltmetrics', {
    bindings: { parentCtrl: '<' },
    controller: 'FullViewAfterAltmetricsController',
    template: '<div class="full-view-section loc-altmetrics" flex-md="65" flex-lg="65" flex-xl="65" flex>\n                    <div class="layout-full-width full-view-section-content" ng-if="$ctrl.doi">\n                    <div class="section-header" layout="row" layout-align="center center">\n                        <h2 class="section-title md-title light-text">\n                            Social Popularity Statistics (AltMetrics) :\n                        </h2>\n                        <md-divider flex>\n                        </md-divider>\n                        </div>\n                        <div class="full-view-section">\n                           <div class="full-view-section-content">\n                                <div class="section-body" layout="row" layout-align="center center">\n                                    <div class="spaced-rows" layout="column">\n                                        <div ng-if="$ctrl.doi" class="altmetric-embed" data-badge-type="medium-donut" data-badge-details="right" data-doi="{{$ctrl.doi}}">\n                                        </div>\n                                    </div>\n                                </div>\n                           </div>\n                        </div>\n                    </div>\n                    </div>'
});
})();