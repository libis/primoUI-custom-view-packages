(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);

app.controller('prmTopbarAfterController', ['$scope', '$element', '$location', '$mdDialog', '$compile', '$templateCache', '$mdOpenMenu', function ($scope, $element, $location, $mdDialog, $compile, $templateCache, $mdOpenMenu) {
    var self = this;
}]);

app.component('prmTopBarBefore', {
    bindings: { parentCtrl: '<' },
    controller: 'prmLogoAfterController',
    template: '\n<prm-skip-to></prm-skip-to>\n\n<div class ="top-nav-bar layout-row" layout="row" tabindex="0" role="navigation">\n  <prm-logo></prm-logo>\n\n  <md-toolbar class ="md-menu-toolbar">\n        <div layout="row"  layout-sm=\'hide\' style="flex-direction: row-reverse;" flex>\n                <md-menu-bar>\n                    <md-menu>\n                        <md-button ng-click="$mdOpenMenu()">A-Z</md-button>\n                        <md-menu-content>\n                            <md-menu-item><a href="http://bib.kuleuven.be/">Bibliotheken</a></md-menu-item>\n                            <md-menu-item><a href="http://www.kuleuven.be/campus">Campussen</a></md-menu-item>\n                            <md-menu-item><a href="https://admin.kuleuven.be/">Diensten</a></md-menu-item>\n                            <md-menu-item><a href="http://www.kuleuven.be/onderzoek/onderzoekstructuur.html">Departementen</a></md-menu-item>\n                            <md-menu-item><a href="http://www.kuleuven.be/kuleuven/faculteiten">Faculteiten</a></md-menu-item>\n                            <md-menu-item><a href="http://www.kuleuven.be/wieiswie">Personeelsleden</a></md-menu-item>\n                        </md-menu-content>\n                    </md-menu>\n                    <md-menu>\n                        <md-button ng-click="$mdOpenMenu()">Info voor </md-button>\n                        <md-menu-content>\n                            <md-menu-item class ="md-indent">\n                                <a href="http://www.kuleuven.be/toekomstigestudenten/">Toekomstige student</a>\n                            </md-menu-item>\n                            <md-menu-item class ="md-indent">\n                                <a href="http://www.kuleuven.be/studenten/">Student</a>\n                            </md-menu-item>\n                            <md-menu-item class ="md-indent">\n                                <a href="http://www.kuleuven.be/personeel/jobsite/">Sollicitant</a>\n                            </md-menu-item>\n                            <md-menu-item class ="md-indent">\n                                <a href="http://admin.kuleuven.be/intranet/">Personeelslid</a>\n                            </md-menu-item>\n                            <md-menu-item class ="md-indent">\n                                <a href="http://alum.kuleuven.be/">Alumnus</a>\n                            </md-menu-item>\n                            <md-menu-item class ="md-indent">\n                                <a href="http://www.kuleuven.be/onderzoek/overheid/">Overheid, bedrijf en maatschappij</a>\n                            </md-menu-item>\n                            <md-menu-item class ="md-indent">\n                                <a href="http://www.kuleuven.be/pers/">Pers</a>\n                            </md-menu-item>\n                            <md-menu-item class ="md-indent">\n                                <a href="http://www.kuleuven.be/mecenaat/">Schenker</a>\n                            </md-menu-item>\n                        </md-menu-content>\n                    </md-menu>\n                    <md-menu>\n                        <md-button ng-click="$mdOpenMenu()">    Interne tools  </md-button>\n                        <md-menu-content>\n                            <md-menu-item class ="md-indent">\n                                <a href="http://toledo.kuleuven.be/">Toledo</a>\n                            </md-menu-item>\n                            <md-menu-item class ="md-indent">\n                                <a href="http://www.kuleuven.be/sapredir/kuloket">KU&nbsp; Loket</a>\n                            </md-menu-item>\n                            <md-menu-item class ="md-indent">\n                                <a href="https://webmail.kuleuven.be/">Webmail</a>\n                            </md-menu-item>\n                            <md-menu-item class ="md-indent">\n\n                                <a href="https://admin.kuleuven.be/intranet/">Intranet</a>\n                            </md-menu-item>\n                            <md-menu-item class ="md-indent">\n\n                                <a href="http://www.kuleuven.be/wieiswie">Wie-is-wie</a>\n                            </md-menu-item>\n                            <md-menu-item class ="md-indent">\n                                <a href="http://www.kuleuven.be/wieiswie/nl/unit/50000050">Organigram</a>\n                            </md-menu-item>\n                        </md-menu-content>\n                    </md-menu>\n                    <md-menu>\n                        <md-button> <a href="http://nieuws.kuleuven.be/">Nieuws</a> </md-button>\n                    </md-menu>\n                    <md-menu>\n                        <md-button>\n                            <a href="http://www.kuleuven.be/personeel/jobsite/">Jobs</a>\n                        </md-button>\n                    </md-menu>\n                    <md-menu>\n                        <md-button>\n                            <a href="http://www.kuleuven.be/kuleuven/contact">Contact</a>\n                        </md-button>\n                    </md-menu>\n                </md-menu-bar>\n\n        </div>\n    </md-toolbar>\n\n    </div>\n\n\n'
});
})();