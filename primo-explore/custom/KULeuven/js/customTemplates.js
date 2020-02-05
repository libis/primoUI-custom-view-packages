app.run(function($templateCache) {$templateCache.put('feedbacklink.html','\r\n\r\n<a\r\n  ng-href=""\r\n  (click)="$ctrl.showFeedbackForm($event)"\r\n  aria-label="mainmenu.label.feedback">\r\n <span class="md-headline item-content" id="ContentFeedback"\r\n    translate="mainmenu.label.feedback"></span>\r\n </a>\r\n\r\n');
$templateCache.put('feedbacklink_in_menu.html','\r\n\t<div   (click)="$ctrl.showFeedbackForm($event)"\r\n\tclass="view-switcher layout-align-end-center layout-row flex-noshrink" \r\n layout-align="end center" layout="row" flex="noshrink" \r\n\tid="menu_feedback">\r\n\t<button \r\n\tclass="md-icon-button md-button md-primoExplore-theme md-ink-ripple" \r\n\tstyle="background-color: rgba(0,0,0,.1);"\r\n\taria-label="Give feedback">\r\n\t<md-icon class="md-primoExplore-theme" aria-hidden="true">\r\n\t\t\t<svg width="100%" height="100%" viewBox="0 0 24 24" y="1176" xmlns="http://www.w3.org/2000/svg" fit="" \r\n\t\t\tpreserveAspectRatio="xMidYMid meet"\r\n\t\t\t focusable="false">\r\n\t\t\t <path d="M0 0h24v24H0z" fill="none"/>\r\n\t\t\t <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>\r\n\t\t\t</svg>\r\n\t\t</md-icon>\r\n\t</button>\r\n\t<md-tooltip md-delay="400" md-direction="bottom" class="md-primoExplore-theme _md-show" role="tooltip" id="menu_feedback_tooltip">\r\n\t\t<span>"Give feedback"</span>\r\n\t</md-tooltip>\r\n\t</div>\r\n');
$templateCache.put('user-area.html','<div id="user_area_after" class="view-switcher layout-align-end-center layout-row flex-noshrink" style="height: 100%;" layout-align="end center"\r\n    layout="row" flex="noshrink" aria-hidden="false">\r\n\r\n\t<prm-feedbacklink parent-Ctrl=\'$ctrl\' linktemplate="custom/KULeuven/html/templates/feedbacklink_in_menu.html"></prm-feedbacklink>\r\n\r\n\t<div ng-show="$parent.$ctrl.userName().length == 0" ng-click="signIn()" class="view-switcher layout-align-end-center layout-row flex-noshrink"\r\n\t    style="height: 100%" layout-align="end center" layout="row" flex="noshrink" id="library_card_button_not_signed_in">\r\n\t\t<button class="md-icon-button md-button md-primoExplore-theme md-ink-ripple" style="background-color: rgba(0,0,0,.1);" aria-label="Go to my account"\r\n\t\t    ng-show="$parent.$ctrl.userName().length == 0" ng-click="signIn()">\r\n\t\t\t<md-icon md-svg-icon="primo-ui:account-card-details" aria-label="icon-account-card-details" class="md-primoExplore-theme"\r\n\t\t\t    aria-hidden="true">\r\n\t\t\t\t<svg width="100%" height="100%" viewBox="0 0 24 24" y="1176" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet"\r\n\t\t\t\t    focusable="false">\r\n\t\t\t\t\t<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"\r\n\t\t\t\t\t/>\r\n\t\t\t\t\t<path d="M0 0h24v24H0z" fill="none" />\r\n\t\t\t\t</svg>\r\n\t\t\t</md-icon>\r\n\t\t</button>\r\n\t\t<md-tooltip md-delay="400" md-direction="bottom" class="md-primoExplore-theme _md-show" role="tooltip" id="library_card_button_not_signed_in_tooltip">\r\n\t\t\t<span>Sign in to My Account</span>\r\n\t\t</md-tooltip>\r\n\t</div>\r\n\r\n\t<div ng-show="$parent.$ctrl.userName().length > 0">\r\n\t\t<div id="user_name" class="user-name">{{$parent.$ctrl.userName()}}</div>\r\n\t\t<div id="library_card_button_signed_in">\r\n\t\t\t<prm-library-card-menu id="library_card_button" ng-show="$parent.$ctrl.userName().length > 0"></prm-library-card-menu>\r\n\t\t\t<md-tooltip md-delay="400" md-direction="bottom" class="md-primoExplore-theme _md-show" role="tooltip" id="library_card_button_not_signed_in_tooltip">\r\n\t\t\t\t<span>Go to My Library account</span>\r\n\t\t\t</md-tooltip>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<button id="mobile_menu" class="mobile-menu-button zero-margin md-button md-primoExplore-theme md-ink-ripple hide-gt-xs"\r\n\t    type="button" aria-label="Open user actions menu button" (click)="$ctrl.enableMobileMenu()" style="min-width: 60px" hide-gt-xs>\r\n\t\t<prm-icon [icon-type]="::$parent.$ctrl.topBarIcons.more.type" [svg-icon-set]="::$parent.$ctrl.topBarIcons.more.iconSet" [icon-definition]="::$parent.$ctrl.topBarIcons.more.icon">\r\n\t\t\t<md-icon md-svg-icon="primo-ui:dots-horizontal" aria-label="icon-dots-horizontal" class="md-primoExplore-theme" aria-hidden="true">\r\n\t\t\t\t<svg id="dots-horizontal_cache305" width="100%" height="100%" viewBox="0 0 24 24" y="120" xmlns="http://www.w3.org/2000/svg"\r\n\t\t\t\t    fit preserveAspectRatio="xMidYMid meet" focusable="false">\r\n\t\t\t\t\t<path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z">\r\n\t\t\t\t\t</path>\r\n\t\t\t\t</svg>\r\n\t\t\t</md-icon>\r\n\t\t</prm-icon>\r\n\t</button>\r\n\r\n\t<md-button ng-click="$parent.$ctrl.handleLogout(authenticationMethod);">\r\n\t\t<prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="sign-out"></prm-icon>\r\n\t\t<span ng-if="!$parent.$ctrl.idpLogout" translate="eshelf.signout.title.link"></span>\r\n\t\t<span ng-if="$parent.$ctrl.idpLogout" translate="nui.bor_info_failed.signout"></span>\r\n\t</md-button>\r\n\t<!--\r\n\t<md-button ng-if="$parent.$ctrl.isLoggedInIDP()" \r\n\tng-click="$parent.$ctrl.handleLogout(authenticationMethod);" \r\n\taria-label="{{\\\'eshelf.signout.title.link\\\' | translate}}"\r\n\t    class="button-with-icon zero-margin">\r\n\t\t<prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="sign-out"></prm-icon>\r\n\t\t<span ng-if="!$parent.$ctrl.idpLogout" translate="eshelf.signout.title.link"></span>\r\n\t\t<span ng-if="$parent.$ctrl.idpLogout" translate="nui.bor_info_failed.signout"></span>\r\n\t</md-button>\r\n\t-->\r\n<prm-authentication></prm-authentication>\r\n</div>');});