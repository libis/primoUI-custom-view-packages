(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);
app.run(function ($templateCache) {
    $templateCache.put('/feedbacklink.html', '\n\n<a\n  ng-href=""\n  (click)="$ctrl.showFeedbackForm($event)"\n  aria-label="mainmenu.label.feedback">\n <span class="md-headline item-content" id="ContentFeedback"\n    translate="mainmenu.label.feedback"></span>\n </a>\n\n');
    $templateCache.put('/feedbacklink_in_menu.html', '\n\t<div   (click)="$ctrl.showFeedbackForm($event)"\n\tclass="view-switcher layout-align-end-center layout-row flex-noshrink" \n layout-align="end center" layout="row" flex="noshrink" \n\tid="menu_feedback">\n\t<button \n\tclass="md-icon-button md-button md-primoExplore-theme md-ink-ripple" \n\tstyle="background-color: rgba(0,0,0,.1);"\n\taria-label="Give feedback">\n\t<md-icon class="md-primoExplore-theme" aria-hidden="true">\n\t\t\t<svg width="100%" height="100%" viewBox="0 0 24 24" y="1176" xmlns="http://www.w3.org/2000/svg" fit="" \n\t\t\tpreserveAspectRatio="xMidYMid meet"\n\t\t\t focusable="false">\n\t\t\t <path d="M0 0h24v24H0z" fill="none"/>\n\t\t\t <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>\n\t\t\t</svg>\n\t\t</md-icon>\n\t</button>\n\t<md-tooltip md-delay="400" md-direction="bottom" class="md-primoExplore-theme _md-show" role="tooltip" id="menu_feedback_tooltip">\n\t\t<span>"Give feedback"</span>\n\t</md-tooltip>\n\t</div>\n');
    $templateCache.put('/user-area.html', '<div id="user_area_after" class="view-switcher layout-align-end-center layout-row flex-noshrink" style="height: 100%;" layout-align="end center"\n    layout="row" flex="noshrink" aria-hidden="false">\n\n\t<prm-feedbacklink parent-Ctrl=\'$ctrl\' linktemplate="custom/KULeuven/html/templates/feedbacklink_in_menu.html"></prm-feedbacklink>\n\n\t<div ng-show="$parent.$ctrl.userName().length == 0" ng-click="signIn()" class="view-switcher layout-align-end-center layout-row flex-noshrink"\n\t    style="height: 100%" layout-align="end center" layout="row" flex="noshrink" id="library_card_button_not_signed_in">\n\t\t<button class="md-icon-button md-button md-primoExplore-theme md-ink-ripple" style="background-color: rgba(0,0,0,.1);" aria-label="Go to my account"\n\t\t    ng-show="$parent.$ctrl.userName().length == 0" ng-click="signIn()">\n\t\t\t<md-icon md-svg-icon="primo-ui:account-card-details" aria-label="icon-account-card-details" class="md-primoExplore-theme"\n\t\t\t    aria-hidden="true">\n\t\t\t\t<svg width="100%" height="100%" viewBox="0 0 24 24" y="1176" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet"\n\t\t\t\t    focusable="false">\n\t\t\t\t\t<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"\n\t\t\t\t\t/>\n\t\t\t\t\t<path d="M0 0h24v24H0z" fill="none" />\n\t\t\t\t</svg>\n\t\t\t</md-icon>\n\t\t</button>\n\t\t<md-tooltip md-delay="400" md-direction="bottom" class="md-primoExplore-theme _md-show" role="tooltip" id="library_card_button_not_signed_in_tooltip">\n\t\t\t<span>Sign in to My Account</span>\n\t\t</md-tooltip>\n\t</div>\n\n\t<div ng-show="$parent.$ctrl.userName().length > 0">\n\t\t<div id="user_name" class="user-name">{{$parent.$ctrl.userName()}}</div>\n\t\t<div id="library_card_button_signed_in">\n\t\t\t<prm-library-card-menu id="library_card_button" ng-show="$parent.$ctrl.userName().length > 0"></prm-library-card-menu>\n\t\t\t<md-tooltip md-delay="400" md-direction="bottom" class="md-primoExplore-theme _md-show" role="tooltip" id="library_card_button_not_signed_in_tooltip">\n\t\t\t\t<span>Go to My Library account</span>\n\t\t\t</md-tooltip>\n\t\t</div>\n\t</div>\n\n\t<button id="mobile_menu" class="mobile-menu-button zero-margin md-button md-primoExplore-theme md-ink-ripple hide-gt-xs"\n\t    type="button" aria-label="Open user actions menu button" (click)="$ctrl.enableMobileMenu()" style="min-width: 60px" hide-gt-xs>\n\t\t<prm-icon [icon-type]="::$parent.$ctrl.topBarIcons.more.type" [svg-icon-set]="::$parent.$ctrl.topBarIcons.more.iconSet" [icon-definition]="::$parent.$ctrl.topBarIcons.more.icon">\n\t\t\t<md-icon md-svg-icon="primo-ui:dots-horizontal" aria-label="icon-dots-horizontal" class="md-primoExplore-theme" aria-hidden="true">\n\t\t\t\t<svg id="dots-horizontal_cache305" width="100%" height="100%" viewBox="0 0 24 24" y="120" xmlns="http://www.w3.org/2000/svg"\n\t\t\t\t    fit preserveAspectRatio="xMidYMid meet" focusable="false">\n\t\t\t\t\t<path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z">\n\t\t\t\t\t</path>\n\t\t\t\t</svg>\n\t\t\t</md-icon>\n\t\t</prm-icon>\n\t</button>\n\n\t<md-button ng-click="$parent.$ctrl.handleLogout(authenticationMethod);">\n\t\t<prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="sign-out"></prm-icon>\n\t\t<span ng-if="!$parent.$ctrl.idpLogout" translate="eshelf.signout.title.link"></span>\n\t\t<span ng-if="$parent.$ctrl.idpLogout" translate="nui.bor_info_failed.signout"></span>\n\t</md-button>\n\t<!--\n\t<md-button ng-if="$parent.$ctrl.isLoggedInIDP()" \n\tng-click="$parent.$ctrl.handleLogout(authenticationMethod);" \n\taria-label="{{\\\'eshelf.signout.title.link\\\' | translate}}"\n\t    class="button-with-icon zero-margin">\n\t\t<prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="sign-out"></prm-icon>\n\t\t<span ng-if="!$parent.$ctrl.idpLogout" translate="eshelf.signout.title.link"></span>\n\t\t<span ng-if="$parent.$ctrl.idpLogout" translate="nui.bor_info_failed.signout"></span>\n\t</md-button>\n\t-->\n<prm-authentication></prm-authentication>\n</div>');
});

var feeds = [
/*
        {
            feedUrl: "https://bib.kuleuven.be/english/ub/news/limo-news/rss",
            feedLang: ['en_US'],
            feedContentType: 'full',
            feedInst: "KU Leuven",
            feedFilter: []
        },
        {
            feedUrl: "https://bib.kuleuven.be/ub/nieuws/limo-nieuws/rss",
            feedLang: ['nl_BE'],
            feedContentType: 'full',
            feedInst: "KU Leuven",
            feedFilter: []
        },
        */
{
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

/*
app.component('prmAuthenticationAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmPromoteLoginController',
    template:''
});

app.component('prmPromoteLogin', {
    bindings: { parentCtrl: '<' },
    controller: 'prmPromoteLoginController',
    template: '',
});
*/
/*
app.controller("prmPromoteLoginController", ['$scope', '$http', '$mdDialog', '$cookies', '$element', function ($scope, $http, $mdDialog, $cookies, $element) {
    let self = this;
    var locale = self.parentCtrl.primolyticsService.userSessionManagerService.i18nService.getLanguage();
   
    $scope.primoPromoteLogin = '';
    $scope.showSignInPopup = function () {
        var parentEl = angular.element(document.body);

        $mdDialog.show({
            parent: parentEl,
            templateUrl: 'custom/CENTRAL_PACKAGE/html/templates/promote_login_' + locale + '.html',
            locals: {
                primoPromoteLogin:  $scope.primoPromoteLogin
            },
            controller: DialogController
        });

    }

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
  
    // Ignore this in prm-login-alma-mashup, only if parent is prm-user-area
    if ( ($element.nativeElement).closest('prm-user-area') ) {
        if (!self.parentCtrl.isLoggedIn) {
            if (localStorage['primoPromoteLogin'] === 'alwaysSignin') {
                // redirect to login
                self.parentCtrl.loginService.handleLoginClick();
            } else {
                if (!sessionStorage['primoPromoteLogin'] && !localStorage['primoPromoteLogin']) {
                    $scope.showSignInPopup();
                    sessionStorage.setItem('primoPromoteLogin', 'SignInPopup');
                }
            }
        }
     }
}]);
*/
})();