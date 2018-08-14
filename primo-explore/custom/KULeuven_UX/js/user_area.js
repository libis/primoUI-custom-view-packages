
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