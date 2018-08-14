(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);
app.run(function ($templateCache) {
    $templateCache.put('feedbacklink.html', '\r\n\r\n<a\r\n  ng-href=""\r\n  (click)="$ctrl.showFeedbackForm($event)"\r\n  aria-label="mainmenu.label.feedback">\r\n <span class="md-headline item-content" id="ContentFeedback"\r\n    translate="mainmenu.label.feedback"></span>\r\n </a>\r\n\r\n');
    $templateCache.put('feedbacklink_in_menu.html', '\r\n\t<div   (click)="$ctrl.showFeedbackForm($event)"\r\n\tclass="view-switcher layout-align-end-center layout-row flex-noshrink" \r\n layout-align="end center" layout="row" flex="noshrink" \r\n\tid="menu_feedback">\r\n\t<button \r\n\tclass="md-icon-button md-button md-primoExplore-theme md-ink-ripple" \r\n\tstyle="background-color: rgba(0,0,0,.1);"\r\n\taria-label="Give feedback">\r\n\t<md-icon class="md-primoExplore-theme" aria-hidden="true">\r\n\t\t\t<svg width="100%" height="100%" viewBox="0 0 24 24" y="1176" xmlns="http://www.w3.org/2000/svg" fit="" \r\n\t\t\tpreserveAspectRatio="xMidYMid meet"\r\n\t\t\t focusable="false">\r\n\t\t\t <path d="M0 0h24v24H0z" fill="none"/>\r\n\t\t\t <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>\r\n\t\t\t</svg>\r\n\t\t</md-icon>\r\n\t</button>\r\n\t<md-tooltip md-delay="400" md-direction="bottom" class="md-primoExplore-theme _md-show" role="tooltip" id="menu_feedback_tooltip">\r\n\t\t<span>"Give feedback"</span>\r\n\t</md-tooltip>\r\n\t</div>\r\n');
    $templateCache.put('user-area.html', '\r\n<style>\r\n\r\n<div id="user_area_after" class="view-switcher layout-align-end-center layout-row flex-noshrink" style="height: 100%;" layout-align="end center"\r\n    layout="row" flex="noshrink" aria-hidden="false">\r\n\r\n\t<prm-feedbacklink parent-Ctrl=\'$ctrl\' linktemplate="custom/KULeuven_UX/html/templates/feedbacklink_in_menu.html"></prm-feedbacklink>\r\n\r\n\t<div ng-show="$parent.$ctrl.userName().length == 0" ng-click="signIn()" class="view-switcher layout-align-end-center layout-row flex-noshrink"\r\n\t    style="height: 100%" layout-align="end center" layout="row" flex="noshrink" id="library_card_button_not_signed_in">\r\n\t\t<button class="md-icon-button md-button md-primoExplore-theme md-ink-ripple" style="background-color: rgba(0,0,0,.1);" aria-label="Go to my account"\r\n\t\t    ng-show="$parent.$ctrl.userName().length == 0" ng-click="signIn()">\r\n\t\t\t<md-icon md-svg-icon="primo-ui:account-card-details" aria-label="icon-account-card-details" class="md-primoExplore-theme"\r\n\t\t\t    aria-hidden="true">\r\n\t\t\t\t<svg width="100%" height="100%" viewBox="0 0 24 24" y="1176" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet"\r\n\t\t\t\t    focusable="false">\r\n\t\t\t\t\t<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"\r\n\t\t\t\t\t/>\r\n\t\t\t\t\t<path d="M0 0h24v24H0z" fill="none" />\r\n\t\t\t\t</svg>\r\n\t\t\t</md-icon>\r\n\t\t</button>\r\n\t\t<md-tooltip md-delay="400" md-direction="bottom" class="md-primoExplore-theme _md-show" role="tooltip" id="library_card_button_not_signed_in_tooltip">\r\n\t\t\t<span>Sign in to My Account</span>\r\n\t\t</md-tooltip>\r\n\t</div>\r\n\r\n\t<div ng-show="$parent.$ctrl.userName().length > 0">\r\n\t\t<div id="user_name" class="user-name">{{$parent.$ctrl.userName()}}</div>\r\n\t\t<div id="library_card_button_signed_in">\r\n\t\t\t<prm-library-card-menu id="library_card_button" ng-show="$parent.$ctrl.userName().length > 0"></prm-library-card-menu>\r\n\t\t\t<md-tooltip md-delay="400" md-direction="bottom" class="md-primoExplore-theme _md-show" role="tooltip" id="library_card_button_not_signed_in_tooltip">\r\n\t\t\t\t<span>Go to My Library account</span>\r\n\t\t\t</md-tooltip>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<button id="mobile_menu" class="mobile-menu-button zero-margin md-button md-primoExplore-theme md-ink-ripple hide-gt-xs"\r\n\t    type="button" aria-label="Open user actions menu button" (click)="$ctrl.enableMobileMenu()" style="min-width: 60px" hide-gt-xs>\r\n\t\t<prm-icon [icon-type]="::$parent.$ctrl.topBarIcons.more.type" [svg-icon-set]="::$parent.$ctrl.topBarIcons.more.iconSet" [icon-definition]="::$parent.$ctrl.topBarIcons.more.icon">\r\n\t\t\t<md-icon md-svg-icon="primo-ui:dots-horizontal" aria-label="icon-dots-horizontal" class="md-primoExplore-theme" aria-hidden="true">\r\n\t\t\t\t<svg id="dots-horizontal_cache305" width="100%" height="100%" viewBox="0 0 24 24" y="120" xmlns="http://www.w3.org/2000/svg"\r\n\t\t\t\t    fit preserveAspectRatio="xMidYMid meet" focusable="false">\r\n\t\t\t\t\t<path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z">\r\n\t\t\t\t\t</path>\r\n\t\t\t\t</svg>\r\n\t\t\t</md-icon>\r\n\t\t</prm-icon>\r\n\t</button>\r\n\r\n\t<md-button ng-click="$parent.$ctrl.handleLogout(authenticationMethod);">\r\n\t\t<prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="sign-out"></prm-icon>\r\n\t\t<span ng-if="!$parent.$ctrl.idpLogout" translate="eshelf.signout.title.link"></span>\r\n\t\t<span ng-if="$parent.$ctrl.idpLogout" translate="nui.bor_info_failed.signout"></span>\r\n\t</md-button>\r\n\t<!--\r\n\t<md-button ng-if="$parent.$ctrl.isLoggedInIDP()" \r\n\tng-click="$parent.$ctrl.handleLogout(authenticationMethod);" \r\n\taria-label="{{\\\'eshelf.signout.title.link\\\' | translate}}"\r\n\t    class="button-with-icon zero-margin">\r\n\t\t<prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="sign-out"></prm-icon>\r\n\t\t<span ng-if="!$parent.$ctrl.idpLogout" translate="eshelf.signout.title.link"></span>\r\n\t\t<span ng-if="$parent.$ctrl.idpLogout" translate="nui.bor_info_failed.signout"></span>\r\n\t</md-button>\r\n-->\r\n\r\n<prm-authentication></prm-authentication>\r\n\r\n</div>');
});

var feeds = [{
    feedUrl: "https://bib.kuleuven.be/english/ub/news/limo-news/rss",
    feedLang: ['en_US'],
    feedContentType: 'full',
    feedInst: "KU Leuven",
    feedFilter: []
}, {
    feedUrl: "https://bib.kuleuven.be/ub/nieuws/limo-nieuws/rss",
    feedLang: ['nl_BE'],
    feedContentType: 'full',
    feedInst: "KU Leuven",
    feedFilter: []
}, {
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
    var self = this;
    var locale = self.parentCtrl.primolyticsService.userSessionManagerService.i18nService.getLanguage();

    var vid = window.appConfig['vid'];
    /*
    var locale_text = {
        'nl_BE': {
            'title': 'Aanmelden',
            'title_label': "Aanmeldenn"
        },
        'en_US': {
            'title': 'Sign In',
            'title_label': "Sign In"
        },
        'fr_FR': {
            'title': 'Sign In?',
            'title_label': "Sign In?"
        },
    }
      $scope.title = locale_text[locale]['title'];
    $scope.title_label = locale_text[locale]['title_label'];
    */
    $scope.primoPromoteLogin = '';
    /*
    console.log($cookies)
    var favoriteCookie = $cookies.get('myFavorite');
    $cookies.put('myFavorite', 'oatmeal');
    */

    $scope.showSignInPopup = function () {
        var parentEl = angular.element(document.body);

        $mdDialog.show({
            parent: parentEl,
            templateUrl: 'custom/CENTRAL_PACKAGE/html/templates/promote_login_' + locale + '.html',
            locals: {
                primoPromoteLogin: $scope.primoPromoteLogin
            },
            controller: DialogController
        });
    };

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

    if (!self.parentCtrl.isLoggedIn) {
        if (localStorage['primoPromoteLogin'] === 'alwaysSignin') {
            /* Sreiderict to login */;
            self.parentCtrl.loginService.handleLoginClick();
        } else {
            if (!sessionStorage['primoPromoteLogin'] && !localStorage['primoPromoteLogin']) {
                $scope.showSignInPopup();
                sessionStorage.setItem('primoPromoteLogin', 'SignInPopup');
            }
        }
    }
}]);

/* https://otago.hosted.exlibrisgroup.com/primo-explore/search?vid=DUNEDIN&sortby=rank&search_scope=All */

/* TODO : get this on Central Package level */
/*
app.run(function ($templateCache) {
    $templateCache.put('components/search/topbar/userArea/user-area.html',`
<md-button tabindex="-1" class="user-menu-button accessible-only" aria-label="{{($ctrl.userName().length==0 ?  \'nui.clisckSignIn.tooltip\'  : \'nui.clisckSignOut.tooltip\') | translate}}"
    ng-click="$event.stopPropagation();$ctrl.enableMobileMenu()" hide-xs>
</md-button>
<md-button style="display:none" class="user-menu-button accessible-only" aria-label="{{($ctrl.userName().length==0 ?  \'nui.clisckSignIn.tooltip\'  : \'nui.clisckSignOut.tooltip\') | translate}}"
    (click)="$ctrl.changUserStatus()" hide-xs>
</md-button>


<prm-library-card-menu 
    ng-if="$ctrl.showUserArea && $ctrl.userName().length > 0 && !$ctrl.detectMobile()" ></prm-library-card-menu>

<prm-authentication layout="flex" [is-logged-in]="$ctrl.userName().length > 0"  
    ng-if="!$ctrl.detectMobile()"></prm-authentication>
<prm-change-lang aria-label="{{\'eshelf.signin.title\' | translate}}" 
ng-if="$ctrl.displayLanguage && $ctrl.userName().length == 0 && !$ctrl.detectMobile()"
label-type="icon"></prm-change-lang>

<prm-feedbacklink 
parent-Ctrl='$ctrl' linktemplate="custom/KULeuven_UX/html/templates/feedbacklink_in_menu.html"></prm-feedbacklink>


    `
    );

    $templateCache.put('components/search/topbar/userArea/libraryCard/library-card-menu.html',`
    <md-button ng-if="!$ctrl.isOvp()" aria-label="{{\'nui.aria.menu.settings\' | translate}}" class="button-with-icon zero-margin"
    (click)="$ctrl.goToUserSettings();">
    <prm-icon [icon-type]="::$ctrl.topBarIcons.library.type" [svg-icon-set]="::$ctrl.topBarIcons.library.iconSet" [icon-definition]="::$ctrl.topBarIcons.library.icon"></prm-icon>
    <span translate="nui.details.header.ovl"></span>
    </md-button>

<md-button aria-label="{{$ctrl.getLibraryCardAriaLabel() | translate}}" 
class="button-with-icon zero-margin" (click)="$ctrl.goToMyLibraryCard();"
    (keydown)="$ctrl.keydownSupport($event)">
    <prm-icon [icon-type]="::$ctrl.topBarIcons.library.type" [svg-icon-set]="::$ctrl.topBarIcons.library.iconSet" [icon-definition]="::$ctrl.topBarIcons.library.icon"></prm-icon>
    <span style="text-transform: none;">{{$parent.$parent.$ctrl.displayedUser}}</span>
    <md-tooltip md-direction="down" md-delay="400">
        <span translate="nui.clisckSignIn.tooltip"></span>
</md-tooltip>
</md-button>


<md-button ng-click="$ctrl.$state.go('account', {vid: $root.$$childHead.$ctrl.userSessionManagerService.vid, lang: this.lang, section: 'personal_details'}, {reload: true});"
 aria-label="{{\'nui.details.header\' | translate}}"
class="md-icon-button button-over-dark md-button md-primoExplore-theme md-ink-ripple darker-bg">
<prm-icon icon-type="svg" svg-icon-set="action" icon-definition="ic_settings_24px"></prm-icon>
<md-tooltip md-direction="down" md-delay="400">
    <span>---ng-click----</span>
</md-tooltip>
</md-button>

    `
    );    
   
    $templateCache.put('components/search/topbar/userArea/authentication.html',`
    <md-button ng-if="!$ctrl.isLoggedInIDP()" 
        ng-click="$ctrl.handleLogin();" aria-label="{{\'eshelf.signin.title\' | translate}}"
        class="md-icon-button button-over-dark md-button md-primoExplore-theme md-ink-ripple darker-bg">
        <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="account-card-details"></prm-icon>
        <md-tooltip md-direction="down" md-delay="400">
            <span translate="nui.clisckSignIn.tooltip"></span>
        </md-tooltip>
    </md-button>

    <md-button ng-if="$ctrl.isLoggedInIDP()" ng-click="$ctrl.handleLogout(authenticationMethod);" aria-label="{{\'eshelf.signout.title.link\' | translate}}"
        class="button-with-icon zero-margin" id="logout">
        <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="sign-out"></prm-icon>
        <md-tooltip md-direction="down" md-delay="400">
            <span  translate="nui.clisckSignOut.tooltip"></span>
        </md-tooltip>
    </md-button>

    `
    );    
    
    $templateCache.put('components/infra/lang/change-lang.html',`
    <div ng-if="::($ctrl.getLabelType() == \'text\')">
    <span translate="nui.mypref.label.interface_languages"></span>
    </div>
    <md-input-container layout="row" layout-align="center center">
        <prm-icon ng-if="::($ctrl.getLabelType() == \'icon\')" [icon-type]="::$ctrl.topBarIcons.language.type" [svg-icon-set]="::$ctrl.topBarIcons.language.iconSet"
            [icon-definition]="::$ctrl.topBarIcons.language.icon"></prm-icon>
    <md-select ng-model="$ctrl.selectedLanguage" ng-change="$ctrl.changeLanguage()" aria-label="{{\'nui.aria.account.details.langaugesselect\' | translate}}">
        <md-option ng-repeat="language in ::$ctrl.languages" value="{{::language}}">
            <span translate="mypref.language.option.{{::language}}"></span>
        </md-option>
    </md-select>
    </md-input-container>
`);
});
*/
})();