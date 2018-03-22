(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var topbarHTML = '<div class="top-nav-bar" layout="row" flex-order="1" layout-align="start center" tabindex="0" role="navigation">\r\n    <!-- Accesibility skip to menu -->\r\n    <prm-skip-to tabindex="0"></prm-skip-to>\r\n\r\n    <header class="screen-only ng-scope">\r\n        <div class="navbar navbar--global navbar--no-padding">\r\n            <div class="container">\r\n                <a href="https://www.kuleuven.be/" class="logo logo--small logo--floating pull--left" title="KU Leuven"></a>\r\n                <a href="#" class="navbar__toggle navbar__toggle--btn  show--bp-med">&nbsp;</a>\r\n            </div>\r\n\r\n            <!-- Institution logo -->\r\n            <!-- <prm-logo></prm-logo> -->\r\n        </div>\r\n        <!-- spacer -->\r\n        <div class="flex" flex></div>\r\n\r\n        <div class="navbar navbar--local">\r\n            <div class="container" style="position:  relative;">\r\n\r\n                <div class="heading--2 navbar__title navbar__title--no-margin">\r\n                    <a href="/primo-explore/search?vid=Lirias" class="ng-binding">\r\n                        <i class="material-icons">home</i> Lirias</a>\r\n                </div>\r\n\r\n                <a href="/#" class="navbar__toggle pull--left hidden--bp-med" role="button" aria-expanded="false" data-toggle="collapse"\r\n                    data-target=".nav--tabs">Menu\r\n                    <span class="lines"></span>\r\n                </a>\r\n\r\n                <div style="display:flex; justify-content:flex-end; bottom: 0; position: absolute; right: 0;">\r\n                    <div style="padding-right:1em">\r\n                        <prm-search-bookmark-filter class="view-switcher" layout-align="end center" layout="row" hide-sm></prm-search-bookmark-filter>\r\n                    </div>\r\n                    <div>\r\n                        <prm-change-lang></prm-change-lang>\r\n                    </div>\r\n                </div>\r\n\r\n                <prm-main-menu ng-if="$ctrl.showMainMenu" menu-type="menu"></prm-main-menu>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </header>\r\n\r\n</div>';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9MaXJpYXMvanMvY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0xpcmlhcy9qcy9tYWluLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vTGlyaWFzL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FqQkNBQTs7Ozs7Ozs7Ozs7QUFTQTs7OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7SUFLcUIsZTs7Ozs7Ozt3QkFFRjtBQUNmOzs7Ozs7Ozs7OztBQVlBLGFBQU87QUFDTDtBQUNIO0FBQ0g7Ozs7QUFIVyxRQU9MLE1BUEssQ0FPRSxVQUFDLENBQUQ7QUFBQSxlQUFPLEVBQUUsT0FBVDtBQUFBLE9BUEYsQ0FBUDtBQVFEOzs7Ozs7a0JBdkJrQixlOzs7QUNwQnJCOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7Ozs7Ozs7Ozs7QUFLQTtBQUNBOztBQUNBLENBQUMsVUFBUyxJQUFULEVBQWU7QUFDZCxVQUFRLE9BQVIsR0FBa0IsRUFBbEI7QUFDQSxVQUFRLE1BQVIsR0FBaUIsWUFBVztBQUN4QixRQUFJLFVBQVUsTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN0QixjQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBcUIsVUFBVSxDQUFWLENBQXJCO0FBQ0g7QUFDRCxXQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBaUIsU0FBakIsQ0FBUDtBQUNILEdBTEQ7QUFNRCxDQVJELEVBUUcsUUFBUSxNQVJYO0FBU0E7O0FBRUE7QUFDQSxJQUFJLE1BQU0sUUFBUSxNQUFSLENBQWUsWUFBZixFQUE2QixFQUE3QixFQUNQLE1BRE8sQ0FDQSxVQUFDLG9CQUFELEVBQTBCO0FBQ2hDLHVCQUFxQixvQkFBckIsQ0FBMEMsQ0FDeEMsSUFEd0MsQ0FBMUM7QUFHRCxDQUxPLEVBTVAsR0FOTyxDQU1ILFVBQUMsY0FBRCxFQUFvQjtBQUN2QixpQkFBZSxHQUFmLENBQW1CLHNDQUFuQixFQUEyRCxVQUEzRDtBQUNBLGlCQUFlLEdBQWYsQ0FBbUIsa0RBQW5CLEVBQXVFLGtCQUF2RTtBQUNBLGlCQUFlLEdBQWYsQ0FBbUIsd0NBQW5CLEVBQTRELGNBQTVEO0FBQ0QsQ0FWTyxDQUFWO0FBV0E7QUFDQSxJQUFJLGtCQUFrQixFQUF0Qjs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxHQUFSLENBQVksb0JBQVo7QUFDQSxxQkFBVyxHQUFYLENBQWUsT0FBZixDQUF1QixVQUFDLFNBQUQsRUFBZTtBQUNwQyxNQUFJLFVBQVUsUUFBZCxFQUF3QjtBQUN0QixRQUFJLFdBQVcsZ0JBQWdCLFVBQVUsUUFBMUIsS0FBdUMsRUFBdEQ7QUFDQSxhQUFTLElBQVQsQ0FBYyxVQUFVLElBQXhCO0FBQ0Esb0JBQWdCLFVBQVUsUUFBMUIsSUFBc0MsUUFBdEM7QUFDRDs7QUFFRCxVQUFRLEdBQVIsVUFBbUIsVUFBVSxJQUE3QjtBQUNBLE1BQUksU0FBSixDQUFjLFVBQVUsSUFBVixDQUFlLFdBQWYsRUFBZCxFQUE0QyxVQUFVLE1BQXREO0FBQ0QsQ0FURDs7QUFXQTtBQUNBLE9BQU8sSUFBUCxDQUFZLGVBQVosRUFBNkIsT0FBN0IsQ0FBcUMsVUFBQyxTQUFELEVBQVksQ0FBWixFQUFrQjtBQUNyRCxNQUFJLGdCQUFnQixnQkFBZ0IsU0FBaEIsQ0FBcEI7O0FBRUEsTUFBSSxTQUFKLENBQWMsVUFBVSxXQUFWLEVBQWQsRUFBdUM7QUFDckMsY0FBVTtBQUNSLGtCQUFZO0FBREosS0FEMkI7QUFJckMsY0FBVSxjQUFjLEdBQWQsQ0FBa0I7QUFBQSxtQkFBUyxDQUFULCtCQUFvQyxDQUFwQztBQUFBLEtBQWxCLEVBQTRELElBQTVELENBQWlFLEVBQWpFO0FBSjJCLEdBQXZDO0FBTUQsQ0FURDs7Ozs7QUM1REE7Ozs7OztBQU1BLE9BQU8sU0FBUCxDQUFpQixXQUFqQixHQUErQixZQUFXO0FBQ3hDLFNBQU8sS0FBSyxLQUFMLENBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFvQixVQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTDtBQUFBLFdBQVksSUFBSSxDQUFKLEdBQVEsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFZLFdBQVosS0FBNEIsRUFBRSxLQUFGLENBQVEsQ0FBUixDQUFwQyxHQUFnRCxDQUE1RDtBQUFBLEdBQXBCLEVBQW1GLElBQW5GLENBQXdGLEVBQXhGLENBQVA7QUFDRCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXHJcbiAgRGVjbGFyZSB5b3VyIGNvbXBvbmVudHMgaGVyZS5cclxuXHJcbiAgUmV3cml0ZSB0aGlzIHdoZW4gaW1wb3J0cyBjYW4gYmUgZG9uZSBkeW5hbWljYWxseVxyXG4gIGh0dHA6Ly8yYWxpdHkuY29tLzIwMTcvMDEvaW1wb3J0LW9wZXJhdG9yLmh0bWxcclxuXHJcbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcclxuICBNZWhtZXQgQ2VsaWtcclxuKi9cclxuaW1wb3J0ICcuL3V0aWxzJ1xyXG5cclxuLyogaW1wb3J0IHlvdXIgY29tcG9uZW50IGNvbmZpZ3VyYXRpb24qL1xyXG4vLyBUT0RPOiBDcmVhdGluZyBhIGxhbmd1YWdlIHN3aXRjaFxyXG4vL2ltcG9ydCB7Y2hhbmdlTGFuZ0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvY2hhbmdlTGFuZydcclxuXHJcbi8qXHJcbmltcG9ydCB7Y2FtVGFic0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvY2FtVGFicydcclxuaW1wb3J0IHtjYW1Ccm93c2VCdXR0b25Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2NhbUJyb3dzZUJ1dHRvbidcclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFmdGVyQ29tcG9uZW50cyB7XHJcblxyXG4gIHN0YXRpYyBnZXQgYWxsKCkge1xyXG4gICAgLypcclxuICAgICAgbmFtZSA9IHRoZSBzdWIgZWxlbWVudCBpbiB0aGUgYWZ0ZXIgZWxlbWVudFxyXG4gICAgICBjb25maWcgPSB0aGUgaW1wb3J0ZWQgY29uZmlndXJhdGlvbiBvYmplY3RcclxuICAgICAgZW5hYmxlZCA9IHRydWUvZmFsc2Ugc2hvdWxkIHRoZSBjb21wb25lbnQgYmUgY3JlYXRlZFxyXG4gICAgICBhcHBlbmRUbyA9IFRoZSBjb21wb25lbnQgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gdGhpcyBhZnRlciBjb21wb25lbnQuXHJcblxyXG4gICAgICBleC4ge25hbWU6ICdob21lLWljb24nLCBjb25maWc6IGhvbWVJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJ31cclxuICAgICAgcmVzdWx0cyBpbjpcclxuICAgICAgICA8cHJtLWxvZ28tYWZ0ZXIgcGFyZW50Q3RybD0nJGN0cmwnPlxyXG4gICAgICAgICAgPGhvbWUtaWNvbiBwYXJlbnRDdHJsPSckY3RybCc+PC9ob21lLWljb24+XHJcbiAgICAgICAgPC9wcm0tbG9nby1hZnRlcj5cclxuICAgICovXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAvLyBUT0RPOiBDcmVhdGluZyBhIGxhbmd1YWdlIHN3aXRjaCAgXHJcbiAgIC8vICAge25hbWU6ICdjaGFuZ2UtbGFuZycsIGNvbmZpZzogY2hhbmdlTGFuZ0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGx9XHJcbi8qXHJcbiAgICAgIHtuYW1lOiAnY2FtLXRhYnMnLCBjb25maWc6IGNhbVRhYnNDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiBudWxsfSxcclxuICAgICAge25hbWU6ICdjYW0tYnJvd3NlLWJ1dHRvbicsIGNvbmZpZzogY2FtQnJvd3NlQnV0dG9uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogbnVsbH1cclxuICAqLyAgICBcclxuICAgIF0uZmlsdGVyKChtKSA9PiBtLmVuYWJsZWQpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiLypcclxuICBWaWV3Q3VzdG9tIFBhY2thZ2UgTG9hZGVyIExpcmlhc1xyXG4gIEJhc2VkIG9uIGNhbWJyaWRnZS1zZWFyY2gtYmFyLXRhYnMgKE1laG1ldCBDZWxpaylcclxuXHJcbiAgRG8gTk9UIGVkaXQgdGhpcyBmaWxlLlxyXG4gIEFsbCBjb21wb25lbnRzIGFyZSBkZWNsYXJlZCBpbiBcImNvbXBvbmVudHMuanNcIlxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIFRvbSBWYW5tZWNoZWxlbiBcclxuKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXHJcbmltcG9ydCB0b3BiYXJIVE1MIGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3RvcGJhci5odG1sJ1xyXG5pbXBvcnQgdG9wYmFyTWFpbk1lbnVIVE1MIGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3RvcGJhci1tYWluLW1lbnUuaHRtbCdcclxuaW1wb3J0IGNoYW5nZUxhbmdIVE1MIGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2NoYW5nZUxhbmcuaHRtbCdcclxuXHJcbi8qIGFuZ3VsYXIubW9kdWxlcyBpcyBudSBiZXNjaGlrYmFhciBpbiBkZSBjb25zb2xlICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbihmdW5jdGlvbihvcmlnKSB7XHJcbiAgYW5ndWxhci5tb2R1bGVzID0gW107XHJcbiAgYW5ndWxhci5tb2R1bGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICBhbmd1bGFyLm1vZHVsZXMucHVzaChhcmd1bWVudHNbMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBvcmlnLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG59KShhbmd1bGFyLm1vZHVsZSk7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vL0NyZWF0ZSB0aGUgY2VudHJhbEN1c3RvbSBtb2R1bGU7XHJcbmxldCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndmlld0N1c3RvbScsIFtdKVxyXG4gIC5jb25maWcoKCRzY2VEZWxlZ2F0ZVByb3ZpZGVyKSA9PiB7XHJcbiAgICAkc2NlRGVsZWdhdGVQcm92aWRlci5yZXNvdXJjZVVybFdoaXRlbGlzdChbXHJcbiAgICAgICcqKidcclxuICAgIF0pO1xyXG4gIH0pXHJcbiAgLnJ1bigoJHRlbXBsYXRlQ2FjaGUpID0+IHtcclxuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zZWFyY2gvdG9wYmFyL3RvcGJhci5odG1sJywgdG9wYmFySFRNTCk7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvc2VhcmNoL3RvcGJhci9tYWluTWVudS9tYWluLW1lbnUuaHRtbCcsIHRvcGJhck1haW5NZW51SFRNTCk7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvaW5mcmEvbGFuZy9jaGFuZ2UtbGFuZy5odG1sJyxjaGFuZ2VMYW5nSFRNTCk7XHJcbiAgfSk7XHJcbi8vQ29udGFpbnMgdGhlIGFmdGVyIGNvbXBvbmVudCBzZWxlY3RvcnMgdGhhdCB3aWxsIGJlIGluamVjdGVkXHJcbmxldCBhZnRlckNvbXBvbmVudHMgPSB7fTtcclxuXHJcbi8vQ3JlYXRlIGFsbCBjb21wb25lbnRzIGFuZCBkZXRlcm1pbmUgaW4gd2hpY2ggYWZ0ZXIgY29tcG9uZW50IHRoZXNlIG5lZWQgdG8gYmVcclxuLy9pbmplY3RlZFxyXG5jb25zb2xlLmxvZygnTG9hZGluZyBjb21wb25lbnRzJyk7XHJcbkNvbXBvbmVudHMuYWxsLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gIGlmIChjb21wb25lbnQuYXBwZW5kVG8pIHtcclxuICAgIGxldCBlbGVtZW50cyA9IGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnQuYXBwZW5kVG9dIHx8IFtdO1xyXG4gICAgZWxlbWVudHMucHVzaChjb21wb25lbnQubmFtZSk7XHJcbiAgICBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSA9IGVsZW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coYFxcdFxcdCR7Y29tcG9uZW50Lm5hbWV9YCk7XHJcbiAgYXBwLmNvbXBvbmVudChjb21wb25lbnQubmFtZS50b0NhbWVsQ2FzZSgpLCBjb21wb25lbnQuY29uZmlnKTtcclxufSk7XHJcblxyXG4vL0luamVjdCBwbGFjZSBob2xkZXJzIGludG8gdGhlIGFmdGVyIGNvbXBvbmVudHNcclxuT2JqZWN0LmtleXMoYWZ0ZXJDb21wb25lbnRzKS5mb3JFYWNoKChjb21wb25lbnQsIGkpID0+IHtcclxuICBsZXQgc3ViQ29tcG9uZW50cyA9IGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnRdO1xyXG5cclxuICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC50b0NhbWVsQ2FzZSgpLCB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogc3ViQ29tcG9uZW50cy5tYXAobSA9PiBgPCR7bX0gcGFyZW50LWN0cmw9XCIkY3RybFwiPjwvJHttfT5gKS5qb2luKFwiXCIpXHJcbiAgfSk7XHJcbn0pO1xyXG4iLCIvKlxyXG4gIEdlbmVyYWwgXHJcblxyXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XHJcbiAgTWVobWV0IENlbGlrXHJcbiovXHJcblN0cmluZy5wcm90b3R5cGUudG9DYW1lbENhc2UgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gdGhpcy5zcGxpdCgnLScpLm1hcCgoZCxpLGEpID0+ICBpID4gMCA/IGQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkLnNsaWNlKDEpIDpkKS5qb2luKCcnKTtcclxufVxyXG4iXX0=
