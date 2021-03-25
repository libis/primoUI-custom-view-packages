(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);

app.component('prmUserAreaExpandableAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmPromoteLoginController',
    template:''
});

app.controller("prmPromoteLoginController", ['$scope', '$http', '$mdDialog', '$cookies', function ($scope, $http, $mdDialog, $cookies) {
    let self = this;
    var locale = self.parentCtrl.primolyticsService.userSessionManagerService.i18nService.getLanguage();
    var vid = window.appConfig['vid'];

    var onCampus = false;
    var allowed_ips = ["193.190.185.205","134.58.253.30"]

    // onCampusOverrule onCampus
    const queryString = window.location.search;
    const urlParams   = new URLSearchParams(queryString);
    if ( urlParams.get('oCO') == "sck!cen" ){
        onCampus = true
    }

    //var allowed_ips = ["193.190.185.205","134.58.253.30"]
    var url = "https://ipinfo.io/json";
    $http.get(url).then(function(response) {
        console.log(response.data.ip);
        if ( allowed_ips.includes(response.data.ip) ){
            onCampus = true;
        }
        var primo_explore = document.getElementsByTagName("primo-explore")[0];
        var prm_explore_main = document.getElementsByTagName("prm-explore-main")[0];
        if (onCampus) {
            primo_explore.style.visibility = "visible";
            primo_explore.style.display= "inline";
            //prm_explore_main.style.visibility = "visible";
            //prm_explore_main.style.display= "inline";
        } else {
            primo_explore.style.visibility = "hidden";
            primo_explore.style.display= "none";
            prm_explore_main.style.visibility = "hidden";
            prm_explore_main.style.display= "none";
            // alert ( "You seem to have insufficient rights to access to this source." );
            //document.location.href="http://sckcen.be"

            var htmlStr = '<div id="offCampus" class="md-headline"> You seem to have insufficient rights to access to this source.</div>';
            angular.element(document.getElementsByTagName('body')).append(htmlStr);

        }
        
       // alert ( "Oncampus ? \njwtUtilService.getDecodedToken().onCampus: "+ self.parentCtrl.jwtUtilService.getDecodedToken().onCampus );

    });



    console.log($scope )
    console.log(self.parentCtrl)
    console.log( self.parentCtrl.isSignedIn() )
    console.log( self.parentCtrl.jwtUtilService.getDecodedToken().onCampus )

    if ( self.parentCtrl.isSignedIn() ) {
        console.log ("SignedIn !!!")
    } else {
        if ( self.parentCtrl.jwtUtilService.getDecodedToken().onCampus ) {
            console.log ("onCampus !!!")
        }

        // self.parentCtrl.loginService.handleLoginClick();
        /* 
        var mask = document.querySelectorAll("body > primo-explore > div.md-scroll-mask");
        mask[0].style.backgroundColor = "#482160";
        var backdrop = document.querySelectorAll("body > primo-explore > md-backdrop");
        backdrop[0].style.opacity = "100%";
        */
       var auth = window.appConfig.authentication[0]
       // console.log (self.parentCtrl.loginService);
       var loginUrl = self.parentCtrl.loginService.loginUrl( auth['profile-name'] , auth['authentication-system']  )
       // loginUrl = loginUrl.replace(/institution=([^&])/, "institution=KUL");
       // document.location.href=loginUrl;
       // console.log ( loginUrl );

    }
}]);
})();
