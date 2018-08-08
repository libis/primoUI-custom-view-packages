(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Declare your components here.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Rewrite this when imports can be done dynamically
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       http://2ality.com/2017/01/import-operator.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       KULeuven/LIBIS (c) 2017
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Mehmet Celik
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* import your component configuration*/
// TODO: Creating a language switch
//import {changeLangConfig} from './components/general/changeLang'

/*
import {camTabsConfig} from './components/general/camTabs'
import {camBrowseButtonConfig} from './components/general/camBrowseButton'
*/

var AfterComponents = function () {
  function AfterComponents() {
    _classCallCheck(this, AfterComponents);
  }

  _createClass(AfterComponents, null, [{
    key: 'all',
    get: function get() {
      /*
        name = the sub element in the after element
        config = the imported configuration object
        enabled = true/false should the component be created
        appendTo = The component should be created in this after component.
         ex. {name: 'home-icon', config: homeIconConfig, enabled: true, appendTo: 'prm-logo-after'}
        results in:
          <prm-logo-after parentCtrl='$ctrl'>
            <home-icon parentCtrl='$ctrl'></home-icon>
          </prm-logo-after>
      */
      return [
        // TODO: Creating a language switch  
        //   {name: 'change-lang', config: changeLangConfig, enabled: true, appendTo: null}
        /*
              {name: 'cam-tabs', config: camTabsConfig, enabled: true, appendTo: null},
              {name: 'cam-browse-button', config: camBrowseButtonConfig, enabled: true, appendTo: null}
          */
      ].filter(function (m) {
        return m.enabled;
      });
    }
  }]);

  return AfterComponents;
}();

exports.default = AfterComponents;

},{"./utils":3}],2:[function(require,module,exports){
/*
  ViewCustom Package Loader Lirias
  Based on cambridge-search-bar-tabs (Mehmet Celik)

  Do NOT edit this file.
  All components are declared in "components.js"

  KULeuven/LIBIS (c) 2017
  Tom Vanmechelen 
*/
"use strict";

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var topbarHTML = '<prm-top-bar-before></prm-top-bar-before>\r\n<div class="top-nav-bar" layout="row" flex-order="1" layout-align="start center" tabindex="0" role="navigation">\r\n    <!-- Accesibility skip to menu -->\r\n    <prm-skip-to tabindex="0"></prm-skip-to>\r\n\r\n    <header class="screen-only ng-scope">\r\n        <div class="navbar navbar--global navbar--no-padding">\r\n            <div class="container">\r\n                <a href="https://www.kuleuven.be/" class="logo logo--small logo--floating pull--left" title="KU Leuven"></a>\r\n                <a href="#" class="navbar__toggle navbar__toggle--btn  show--bp-med">&nbsp;</a>\r\n            </div>\r\n\r\n            <!-- Institution logo -->\r\n            <!-- <prm-logo></prm-logo> -->\r\n        </div>\r\n        <!-- spacer -->\r\n        <div class="flex" flex></div>\r\n\r\n        <div class="navbar navbar--local">\r\n            <div class="container" style="position:  relative;">\r\n\r\n                <div class="heading--2 navbar__title navbar__title--no-margin">\r\n                    <a href="/primo-explore/search?vid=Lirias" class="ng-binding">\r\n                        <i class="material-icons">home</i> Lirias</a>\r\n                </div>\r\n\r\n                <a href="/#" class="navbar__toggle pull--left hidden--bp-med" role="button" aria-expanded="false" data-toggle="collapse"\r\n                    data-target=".nav--tabs">Menu\r\n                    <span class="lines"></span>\r\n                </a>\r\n\r\n                <div style="display:flex; justify-content:flex-end; bottom: 0; position: absolute; right: 0;">\r\n                    <div style="padding-right:1em">\r\n                        <prm-search-bookmark-filter class="view-switcher" layout-align="end center" layout="row" hide-sm></prm-search-bookmark-filter>\r\n                    </div>\r\n                    <div>\r\n                        --\r\n\r\n                            {{ $ctrl.showMainMenu }}\r\n--\r\n                        <prm-change-lang></prm-change-lang>\r\n                    </div>\r\n                </div>\r\n\r\n                <prm-main-menu ng-if="$ctrl.showMainMenu" menu-type="menu"></prm-main-menu>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </header>\r\n\r\n</div>\r\n\r\n';
var topbarMainMenuHTML = '<div style="position: relative; flex-direction:row" ng-if=" $ctrl.viewUrlsList.length > 0">\r\n        <nav class="nav nav--tabs nav--more">\r\n            <ul>\r\n                <li class="nav__item" id="{{\'mainmenu.label.\'+x.label | translate}}" tabindex="0" ng-repeat="x in ::$ctrl.viewUrlsList |limitTo:ctrl.showCount()">\r\n                    <a href="#" (click)="$ctrl.updateUrl(x.url,x.target)">\r\n                        <span class="item-content" translate="mainmenu.label.{{ ::x.label }}"></span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n</div>';
var changeLangHTML = '<ul ng-model="$ctrl.selectedLanguage" ng-change="$ctrl.changeLanguage()"\r\n    aria-label="{{\'nui.aria.account.details.langaugesselect\' | translate}}"\r\n    class="pagination language">\r\n    <li ng-repeat="language in ::$ctrl.languages">\r\n        <a class="pagination__btn" href="" \r\n            ng-class="{\'active\':$ctrl.selectedLanguage == \'{{language}}\'}" \r\n            ng-if="language == \'nl_BE\'"\r\n            ng-click="$ctrl.selectedLanguage=\'nl_BE\'; $ctrl.changeLanguage()">\r\n            NL\r\n        </a> \r\n        <a class="pagination__btn" href="" \r\n            ng-class="{\'active\':$ctrl.selectedLanguage==\'{{language}}\'}" \r\n            ng-if="language == \'en_US\'"\r\n            ng-click="$ctrl.selectedLanguage=\'en_US\'; $ctrl.changeLanguage()">     \r\n            EN\r\n        </a> \r\n    </li>\r\n</ul>';

/* angular.modules is nu beschikbaar in de console */
/***************************************************/

(function (orig) {
  angular.modules = [];
  angular.module = function () {
    if (arguments.length > 1) {
      angular.modules.push(arguments[0]);
    }
    return orig.apply(null, arguments);
  };
})(angular.module);
/***************************************************/

//Create the centralCustom module;
var app = angular.module('viewCustom', []).config(function ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
}).run(function ($templateCache) {
  $templateCache.put('components/search/topbar/topbar.html', topbarHTML);
  $templateCache.put('components/search/topbar/mainMenu/main-menu.html', topbarMainMenuHTML);
  $templateCache.put('components/infra/lang/change-lang.html', changeLangHTML);
});
//Contains the after component selectors that will be injected
var afterComponents = {};

//Create all components and determine in which after component these need to be
//injected
console.log('Loading components');
_components2.default.all.forEach(function (component) {
  if (component.appendTo) {
    var elements = afterComponents[component.appendTo] || [];
    elements.push(component.name);
    afterComponents[component.appendTo] = elements;
  }

  console.log('\t\t' + component.name);
  app.component(component.name.toCamelCase(), component.config);
});

//Inject place holders into the after components
Object.keys(afterComponents).forEach(function (component, i) {
  var subComponents = afterComponents[component];

  app.component(component.toCamelCase(), {
    bindings: {
      parentCtrl: '<'
    },
    template: subComponents.map(function (m) {
      return '<' + m + ' parent-ctrl="$ctrl"></' + m + '>';
    }).join("")
  });
});

},{"./components":1}],3:[function(require,module,exports){
'use strict';

/*
  General 

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
String.prototype.toCamelCase = function () {
  return this.split('-').map(function (d, i, a) {
    return i > 0 ? d.charAt(0).toUpperCase() + d.slice(1) : d;
  }).join('');
};

},{}]},{},[2])


//# sourceMappingURL=custom.js.map
