
app.controller('prmTopbarAfterController', ['$scope', '$element', '$location', '$mdDialog', '$compile', '$templateCache', '$mdOpenMenu', function ($scope, $element, $location, $mdDialog, $compile, $templateCache, $mdOpenMenu) {
    var self = this;
}]);


app.component('prmTopBarBefore', {
    bindings: { parentCtrl: '<' },
    controller: 'prmLogoAfterController',
    template: `

<prm-skip-to></prm-skip-to>

<div class ="top-nav-bar layout-row" layout="row" tabindex="0" role="navigation">
  <prm-logo></prm-logo>

  <md-toolbar class ="md-menu-toolbar">
        <div layout="row"  layout-sm='hide' style="flex-direction: row-reverse;" flex>
                <md-menu-bar>
                    <md-menu>
                        <md-button ng-click="$mdOpenMenu()">A-Z</md-button>
                        <md-menu-content>
                            <md-menu-item><a href="http://bib.kuleuven.be/">Bibliotheken</a></md-menu-item>
                            <md-menu-item><a href="http://www.kuleuven.be/campus">Campussen</a></md-menu-item>
                            <md-menu-item><a href="https://admin.kuleuven.be/">Diensten</a></md-menu-item>
                            <md-menu-item><a href="http://www.kuleuven.be/onderzoek/onderzoekstructuur.html">Departementen</a></md-menu-item>
                            <md-menu-item><a href="http://www.kuleuven.be/kuleuven/faculteiten">Faculteiten</a></md-menu-item>
                            <md-menu-item><a href="http://www.kuleuven.be/wieiswie">Personeelsleden</a></md-menu-item>
                        </md-menu-content>
                    </md-menu>
                    <md-menu>
                        <md-button ng-click="$mdOpenMenu()">Info voor </md-button>
                        <md-menu-content>
                            <md-menu-item class ="md-indent">
                                <a href="http://www.kuleuven.be/toekomstigestudenten/">Toekomstige student</a>
                            </md-menu-item>
                            <md-menu-item class ="md-indent">
                                <a href="http://www.kuleuven.be/studenten/">Student</a>
                            </md-menu-item>
                            <md-menu-item class ="md-indent">
                                <a href="http://www.kuleuven.be/personeel/jobsite/">Sollicitant</a>
                            </md-menu-item>
                            <md-menu-item class ="md-indent">
                                <a href="http://admin.kuleuven.be/intranet/">Personeelslid</a>
                            </md-menu-item>
                            <md-menu-item class ="md-indent">
                                <a href="http://alum.kuleuven.be/">Alumnus</a>
                            </md-menu-item>
                            <md-menu-item class ="md-indent">
                                <a href="http://www.kuleuven.be/onderzoek/overheid/">Overheid, bedrijf en maatschappij</a>
                            </md-menu-item>
                            <md-menu-item class ="md-indent">
                                <a href="http://www.kuleuven.be/pers/">Pers</a>
                            </md-menu-item>
                            <md-menu-item class ="md-indent">
                                <a href="http://www.kuleuven.be/mecenaat/">Schenker</a>
                            </md-menu-item>
                        </md-menu-content>
                    </md-menu>
                    <md-menu>
                        <md-button ng-click="$mdOpenMenu()">    Interne tools  </md-button>
                        <md-menu-content>
                            <md-menu-item class ="md-indent">
                                <a href="http://toledo.kuleuven.be/">Toledo</a>
                            </md-menu-item>
                            <md-menu-item class ="md-indent">
                                <a href="http://www.kuleuven.be/sapredir/kuloket">KU&nbsp; Loket</a>
                            </md-menu-item>
                            <md-menu-item class ="md-indent">

                                <a href="https://webmail.kuleuven.be/">Webmail</a>
                            </md-menu-item>
                            <md-menu-item class ="md-indent">

                                <a href="https://admin.kuleuven.be/intranet/">Intranet</a>
                            </md-menu-item>
                            <md-menu-item class ="md-indent">

                                <a href="http://www.kuleuven.be/wieiswie">Wie-is-wie</a>
                            </md-menu-item>
                            <md-menu-item class ="md-indent">
                                <a href="http://www.kuleuven.be/wieiswie/nl/unit/50000050">Organigram</a>
                            </md-menu-item>
                        </md-menu-content>
                    </md-menu>
                    <md-menu>
                        <md-button> <a href="http://nieuws.kuleuven.be/">Nieuws</a> </md-button>
                    </md-menu>
                    <md-menu>
                        <md-button>
                            <a href="http://www.kuleuven.be/personeel/jobsite/">Jobs</a>
                        </md-button>
                    </md-menu>
                    <md-menu>
                        <md-button>
                            <a href="http://www.kuleuven.be/kuleuven/contact">Contact</a>
                        </md-button>
                    </md-menu>
                </md-menu-bar>

        </div>
    </md-toolbar>

    </div>


`
});
