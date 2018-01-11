/*
app.controller('prmTopbarAfterController', ['$scope', '$element', '$location', '$mdDialog', '$compile', '$templateCache', '$mdOpenMenu',
         function ($scope, $element, $location, $mdDialog, $compile, $templateCache, $mdOpenMenu) {
    var self = this;
    console.log ( this );

}]);
*/
/*
app.component('prmTopbarAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmTopbarAfterController',
    template: `
<prm-skip-to></prm-skip-to>

<header class="screen-only ng-scope">
<div class="navbar navbar--global navbar--no-padding">
    <div class="container">
        <a href="https://www.kuleuven.be/" class="logo logo--small logo--floating pull--left" title="KU Leuven"></a>
        <a href="#" class="navbar__toggle navbar__toggle--btn  show--bp-med">&nbsp;</a>
    </div>
</div>

<div class="navbar navbar--local">
    <div class="container">
        <div class="heading--2 navbar__title navbar__title--no-margin"><a href="/Lirias" class="ng-binding"><i class="material-icons">home</i> Lirias</a></div>
        <a href="/#" class="navbar__toggle pull--left hidden--bp-med" role="button" aria-expanded="false" data-toggle="collapse" data-target=".nav--tabs">Menu <span class="lines"></span></a>
        <!-- <div class="pull--left">
        </div> -->

        <div class="grid">
            <div class="grid__6 grid--bp-med__9">
                <a href="#" class="navbar__toggle hidden--bp-med" role="button" aria-expanded="false" data-toggle="collapse" data-target=".nav--tabs">Menu <span class="lines"></span></a>
                <nav class="nav nav--tabs nav--more">
                    <ul>
                        <li class="nav__item" id="projecten"><a href="#/projecten" class="ng-binding">Projecten</a></li>
                        <li class="nav__item" id="teams"><a href="#/teams">Teams</a></li>
                        <prm-main-menu></prm-main-menu>
                        <prm-main-menu></prm-main-menu>
                        <home-icon></home-icon>
                        <li class="nav__item" id="help"><a href="https://icts.kuleuven.be/docs/at/oz/onderzoeksinventaris/w/onderzoeksportaal">Hulp nodig ?</a></li>

                    </ul>
                </nav>
            </div>
            <div class="grid__6 grid--bp-med__3">
                <div class="pull--right__nav-user">

                        <ul class="pagination language">

                            <li class="pagination__item">
                                <a class="pagination__btn active" href="" ng-class="{'active':$parent.activeLanguage=='nl'}" ng-click="changeLanguage('nl')">NL</a>
                            </li>
                            <li class="pagination__item">
                                <a class="pagination__btn" href="" ng-class="{'active':$parent.activeLanguage=='en'}" ng-click="changeLanguage('en')">EN</a>
                            </li>

                        </ul>

                </div>
            </div>
        </div>
    </div>
</div>
</header>
`
});
*/
