(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);
/* https://otago.hosted.exlibrisgroup.com/primo-explore/search?vid=DUNEDIN&sortby=rank&search_scope=All */

/* TODO : get this on Central Package level */

app.component('prmLinkedUserSelectorAfter', {
    bindings: {
        parentCtrl: '<'
    },
    controller: 'prmLinkedUserSelectorAfter',
    templateUrl: 'custom/ECB/html/prmLinkedUserSelectorAfter.html'
});

app.controller('prmLinkedUserSelectorAfter', ['$element', '$scope', '$location', '$templateCache', function ($element, $scope, $location, $templateCach) {
    var ctrl = this;
    var scope = $scope;
    var vid = scope.$parent.$parent.$ctrl.vid;

    $scope.signOut = function () {
        document.location.href = "https://leuven-primo.hosted.exlibrisgroup.com/pds?func=logout&calling_system=primo&institute=ECB&url=" + document.location.origin + "/primo-explore/search?vid=" + vid + "%26performLogout=true";
    };
}]);

app.component('prmUserAreaAfter', {
    bindings: {
        parentCtrl: '<'
    },
    controller: 'prmUserAreaAfterController',
    templateUrl: 'custom/ECB/html/user-area.html'
});

app.controller('prmUserAreaAfterController', ['$element', '$scope', '$location', '$templateCache', function ($element, $scope, $location, $templateCach) {

    var ctrl = this;
    ctrl.$onInit = function () {
        ctrl.$element = $element;
    };

    ctrl.$postLink = function () {
        ctrl.insertUserSignin();
    };

    ctrl.insertUserSignin = function () {
        var elementRemove = document.getElementsByTagName('prm-user-area')[0];
        angular.element(elementRemove.children[1]).remove();
        angular.element(elementRemove.children[0]).remove();
        $scope.signIn = function () {
            ctrl.parentCtrl.loginIframeService.loginService.handleLoginClick();
        };
    };
}]);
})();