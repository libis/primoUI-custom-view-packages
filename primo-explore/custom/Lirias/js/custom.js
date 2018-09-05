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

var topbarHTML = '<prm-top-bar-before></prm-top-bar-before>\r\n<div class="top-nav-bar" layout="row" flex-order="1" layout-align="start center" tabindex="0" role="navigation">\r\n    <!-- Accesibility skip to menu -->\r\n    <prm-skip-to tabindex="0"></prm-skip-to>\r\n\r\n    <header class="screen-only ng-scope">\r\n        <div class="navbar navbar--global navbar--no-padding">\r\n            <div class="container">\r\n                <a href="https://www.kuleuven.be/" class="logo logo--small logo--floating pull--left" title="KU Leuven"></a>\r\n                <a href="#" class="navbar__toggle navbar__toggle--btn  show--bp-med">&nbsp;</a>\r\n            </div>\r\n\r\n            <!-- Institution logo -->\r\n            <!-- <prm-logo></prm-logo> -->\r\n        </div>\r\n        <!-- spacer -->\r\n        <div class="flex" flex></div>\r\n\r\n        <div class="navbar navbar--local">\r\n            <div class="container" style="position:  relative;">\r\n\r\n                <div class="heading--2 navbar__title navbar__title--no-margin">\r\n                    <a href="/primo-explore/search?vid=Lirias" class="ng-binding">\r\n                        <i class="material-icons">home</i> Lirias</a>\r\n                </div>\r\n\r\n                <a href="/#" class="navbar__toggle pull--left hidden--bp-med" role="button" aria-expanded="false" data-toggle="collapse"\r\n                    data-target=".nav--tabs">Menu\r\n                    <span class="lines"></span>\r\n                </a>\r\n\r\n                <div style="display:flex; justify-content:flex-end; bottom: 0; position: absolute; right: 0;">\r\n                    <div style="padding-right:1em">\r\n                        <prm-search-bookmark-filter class="view-switcher" layout-align="end center" layout="row" hide-sm></prm-search-bookmark-filter>\r\n                    </div>\r\n                    <div>\r\n                        <prm-change-lang></prm-change-lang>\r\n                    </div>\r\n                </div>\r\n\r\n                <prm-main-menu ng-if="$ctrl.showMainMenu" menu-type="menu"></prm-main-menu>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </header>\r\n\r\n</div>\r\n\r\n';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9MaXJpYXMvanMvY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0xpcmlhcy9qcy9tYWluLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vTGlyaWFzL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FqQkNBQTs7Ozs7Ozs7Ozs7QUFTQTs7OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7SUFLcUIsZTs7Ozs7Ozt3QkFFRjtBQUNmOzs7Ozs7Ozs7OztBQVlBLGFBQU87QUFDTDtBQUNIO0FBQ0g7Ozs7QUFIVyxRQU9MLE1BUEssQ0FPRSxVQUFDLENBQUQ7QUFBQSxlQUFPLEVBQUUsT0FBVDtBQUFBLE9BUEYsQ0FBUDtBQVFEOzs7Ozs7a0JBdkJrQixlOzs7QUNwQnJCOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7Ozs7Ozs7Ozs7QUFLQTtBQUNBOztBQUNBLENBQUMsVUFBUyxJQUFULEVBQWU7QUFDZCxVQUFRLE9BQVIsR0FBa0IsRUFBbEI7QUFDQSxVQUFRLE1BQVIsR0FBaUIsWUFBVztBQUN4QixRQUFJLFVBQVUsTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN0QixjQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBcUIsVUFBVSxDQUFWLENBQXJCO0FBQ0g7QUFDRCxXQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBaUIsU0FBakIsQ0FBUDtBQUNILEdBTEQ7QUFNRCxDQVJELEVBUUcsUUFBUSxNQVJYO0FBU0E7O0FBRUE7QUFDQSxJQUFJLE1BQU0sUUFBUSxNQUFSLENBQWUsWUFBZixFQUE2QixFQUE3QixFQUNQLE1BRE8sQ0FDQSxVQUFDLG9CQUFELEVBQTBCO0FBQ2hDLHVCQUFxQixvQkFBckIsQ0FBMEMsQ0FDeEMsSUFEd0MsQ0FBMUM7QUFHRCxDQUxPLEVBTVAsR0FOTyxDQU1ILFVBQUMsY0FBRCxFQUFvQjtBQUN2QixpQkFBZSxHQUFmLENBQW1CLHNDQUFuQixFQUEyRCxVQUEzRDtBQUNBLGlCQUFlLEdBQWYsQ0FBbUIsa0RBQW5CLEVBQXVFLGtCQUF2RTtBQUNBLGlCQUFlLEdBQWYsQ0FBbUIsd0NBQW5CLEVBQTRELGNBQTVEO0FBQ0QsQ0FWTyxDQUFWO0FBV0E7QUFDQSxJQUFJLGtCQUFrQixFQUF0Qjs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxHQUFSLENBQVksb0JBQVo7QUFDQSxxQkFBVyxHQUFYLENBQWUsT0FBZixDQUF1QixVQUFDLFNBQUQsRUFBZTtBQUNwQyxNQUFJLFVBQVUsUUFBZCxFQUF3QjtBQUN0QixRQUFJLFdBQVcsZ0JBQWdCLFVBQVUsUUFBMUIsS0FBdUMsRUFBdEQ7QUFDQSxhQUFTLElBQVQsQ0FBYyxVQUFVLElBQXhCO0FBQ0Esb0JBQWdCLFVBQVUsUUFBMUIsSUFBc0MsUUFBdEM7QUFDRDs7QUFFRCxVQUFRLEdBQVIsVUFBbUIsVUFBVSxJQUE3QjtBQUNBLE1BQUksU0FBSixDQUFjLFVBQVUsSUFBVixDQUFlLFdBQWYsRUFBZCxFQUE0QyxVQUFVLE1BQXREO0FBQ0QsQ0FURDs7QUFXQTtBQUNBLE9BQU8sSUFBUCxDQUFZLGVBQVosRUFBNkIsT0FBN0IsQ0FBcUMsVUFBQyxTQUFELEVBQVksQ0FBWixFQUFrQjtBQUNyRCxNQUFJLGdCQUFnQixnQkFBZ0IsU0FBaEIsQ0FBcEI7O0FBRUEsTUFBSSxTQUFKLENBQWMsVUFBVSxXQUFWLEVBQWQsRUFBdUM7QUFDckMsY0FBVTtBQUNSLGtCQUFZO0FBREosS0FEMkI7QUFJckMsY0FBVSxjQUFjLEdBQWQsQ0FBa0I7QUFBQSxtQkFBUyxDQUFULCtCQUFvQyxDQUFwQztBQUFBLEtBQWxCLEVBQTRELElBQTVELENBQWlFLEVBQWpFO0FBSjJCLEdBQXZDO0FBTUQsQ0FURDs7Ozs7QUM1REE7Ozs7OztBQU1BLE9BQU8sU0FBUCxDQUFpQixXQUFqQixHQUErQixZQUFXO0FBQ3hDLFNBQU8sS0FBSyxLQUFMLENBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFvQixVQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTDtBQUFBLFdBQVksSUFBSSxDQUFKLEdBQVEsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFZLFdBQVosS0FBNEIsRUFBRSxLQUFGLENBQVEsQ0FBUixDQUFwQyxHQUFnRCxDQUE1RDtBQUFBLEdBQXBCLEVBQW1GLElBQW5GLENBQXdGLEVBQXhGLENBQVA7QUFDRCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLypcclxuICBEZWNsYXJlIHlvdXIgY29tcG9uZW50cyBoZXJlLlxyXG5cclxuICBSZXdyaXRlIHRoaXMgd2hlbiBpbXBvcnRzIGNhbiBiZSBkb25lIGR5bmFtaWNhbGx5XHJcbiAgaHR0cDovLzJhbGl0eS5jb20vMjAxNy8wMS9pbXBvcnQtb3BlcmF0b3IuaHRtbFxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIE1laG1ldCBDZWxpa1xyXG4qL1xyXG5pbXBvcnQgJy4vdXRpbHMnXHJcblxyXG4vKiBpbXBvcnQgeW91ciBjb21wb25lbnQgY29uZmlndXJhdGlvbiovXHJcbi8vIFRPRE86IENyZWF0aW5nIGEgbGFuZ3VhZ2Ugc3dpdGNoXHJcbi8vaW1wb3J0IHtjaGFuZ2VMYW5nQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9jaGFuZ2VMYW5nJ1xyXG5cclxuLypcclxuaW1wb3J0IHtjYW1UYWJzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9jYW1UYWJzJ1xyXG5pbXBvcnQge2NhbUJyb3dzZUJ1dHRvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvY2FtQnJvd3NlQnV0dG9uJ1xyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWZ0ZXJDb21wb25lbnRzIHtcclxuXHJcbiAgc3RhdGljIGdldCBhbGwoKSB7XHJcbiAgICAvKlxyXG4gICAgICBuYW1lID0gdGhlIHN1YiBlbGVtZW50IGluIHRoZSBhZnRlciBlbGVtZW50XHJcbiAgICAgIGNvbmZpZyA9IHRoZSBpbXBvcnRlZCBjb25maWd1cmF0aW9uIG9iamVjdFxyXG4gICAgICBlbmFibGVkID0gdHJ1ZS9mYWxzZSBzaG91bGQgdGhlIGNvbXBvbmVudCBiZSBjcmVhdGVkXHJcbiAgICAgIGFwcGVuZFRvID0gVGhlIGNvbXBvbmVudCBzaG91bGQgYmUgY3JlYXRlZCBpbiB0aGlzIGFmdGVyIGNvbXBvbmVudC5cclxuXHJcbiAgICAgIGV4LiB7bmFtZTogJ2hvbWUtaWNvbicsIGNvbmZpZzogaG9tZUljb25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInfVxyXG4gICAgICByZXN1bHRzIGluOlxyXG4gICAgICAgIDxwcm0tbG9nby1hZnRlciBwYXJlbnRDdHJsPSckY3RybCc+XHJcbiAgICAgICAgICA8aG9tZS1pY29uIHBhcmVudEN0cmw9JyRjdHJsJz48L2hvbWUtaWNvbj5cclxuICAgICAgICA8L3BybS1sb2dvLWFmdGVyPlxyXG4gICAgKi9cclxuICAgIHJldHVybiBbXHJcbiAgICAgIC8vIFRPRE86IENyZWF0aW5nIGEgbGFuZ3VhZ2Ugc3dpdGNoICBcclxuICAgLy8gICB7bmFtZTogJ2NoYW5nZS1sYW5nJywgY29uZmlnOiBjaGFuZ2VMYW5nQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogbnVsbH1cclxuLypcclxuICAgICAge25hbWU6ICdjYW0tdGFicycsIGNvbmZpZzogY2FtVGFic0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGx9LFxyXG4gICAgICB7bmFtZTogJ2NhbS1icm93c2UtYnV0dG9uJywgY29uZmlnOiBjYW1Ccm93c2VCdXR0b25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiBudWxsfVxyXG4gICovICAgIFxyXG4gICAgXS5maWx0ZXIoKG0pID0+IG0uZW5hYmxlZCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gIFZpZXdDdXN0b20gUGFja2FnZSBMb2FkZXIgTGlyaWFzXHJcbiAgQmFzZWQgb24gY2FtYnJpZGdlLXNlYXJjaC1iYXItdGFicyAoTWVobWV0IENlbGlrKVxyXG5cclxuICBEbyBOT1QgZWRpdCB0aGlzIGZpbGUuXHJcbiAgQWxsIGNvbXBvbmVudHMgYXJlIGRlY2xhcmVkIGluIFwiY29tcG9uZW50cy5qc1wiXHJcblxyXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XHJcbiAgVG9tIFZhbm1lY2hlbGVuIFxyXG4qL1xyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cydcclxuaW1wb3J0IHRvcGJhckhUTUwgZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvdG9wYmFyLmh0bWwnXHJcbmltcG9ydCB0b3BiYXJNYWluTWVudUhUTUwgZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvdG9wYmFyLW1haW4tbWVudS5odG1sJ1xyXG5pbXBvcnQgY2hhbmdlTGFuZ0hUTUwgZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvY2hhbmdlTGFuZy5odG1sJ1xyXG5cclxuLyogYW5ndWxhci5tb2R1bGVzIGlzIG51IGJlc2NoaWtiYWFyIGluIGRlIGNvbnNvbGUgKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuKGZ1bmN0aW9uKG9yaWcpIHtcclxuICBhbmd1bGFyLm1vZHVsZXMgPSBbXTtcclxuICBhbmd1bGFyLm1vZHVsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgIGFuZ3VsYXIubW9kdWxlcy5wdXNoKGFyZ3VtZW50c1swXSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9yaWcuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICB9XHJcbn0pKGFuZ3VsYXIubW9kdWxlKTtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vQ3JlYXRlIHRoZSBjZW50cmFsQ3VzdG9tIG1vZHVsZTtcclxubGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd2aWV3Q3VzdG9tJywgW10pXHJcbiAgLmNvbmZpZygoJHNjZURlbGVnYXRlUHJvdmlkZXIpID0+IHtcclxuICAgICRzY2VEZWxlZ2F0ZVByb3ZpZGVyLnJlc291cmNlVXJsV2hpdGVsaXN0KFtcclxuICAgICAgJyoqJ1xyXG4gICAgXSk7XHJcbiAgfSlcclxuICAucnVuKCgkdGVtcGxhdGVDYWNoZSkgPT4ge1xyXG4gICAgJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL3NlYXJjaC90b3BiYXIvdG9wYmFyLmh0bWwnLCB0b3BiYXJIVE1MKTtcclxuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zZWFyY2gvdG9wYmFyL21haW5NZW51L21haW4tbWVudS5odG1sJywgdG9wYmFyTWFpbk1lbnVIVE1MKTtcclxuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9pbmZyYS9sYW5nL2NoYW5nZS1sYW5nLmh0bWwnLGNoYW5nZUxhbmdIVE1MKTtcclxuICB9KTtcclxuLy9Db250YWlucyB0aGUgYWZ0ZXIgY29tcG9uZW50IHNlbGVjdG9ycyB0aGF0IHdpbGwgYmUgaW5qZWN0ZWRcclxubGV0IGFmdGVyQ29tcG9uZW50cyA9IHt9O1xyXG5cclxuLy9DcmVhdGUgYWxsIGNvbXBvbmVudHMgYW5kIGRldGVybWluZSBpbiB3aGljaCBhZnRlciBjb21wb25lbnQgdGhlc2UgbmVlZCB0byBiZVxyXG4vL2luamVjdGVkXHJcbmNvbnNvbGUubG9nKCdMb2FkaW5nIGNvbXBvbmVudHMnKTtcclxuQ29tcG9uZW50cy5hbGwuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgaWYgKGNvbXBvbmVudC5hcHBlbmRUbykge1xyXG4gICAgbGV0IGVsZW1lbnRzID0gYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudC5hcHBlbmRUb10gfHwgW107XHJcbiAgICBlbGVtZW50cy5wdXNoKGNvbXBvbmVudC5uYW1lKTtcclxuICAgIGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnQuYXBwZW5kVG9dID0gZWxlbWVudHM7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhgXFx0XFx0JHtjb21wb25lbnQubmFtZX1gKTtcclxuICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLnRvQ2FtZWxDYXNlKCksIGNvbXBvbmVudC5jb25maWcpO1xyXG59KTtcclxuXHJcbi8vSW5qZWN0IHBsYWNlIGhvbGRlcnMgaW50byB0aGUgYWZ0ZXIgY29tcG9uZW50c1xyXG5PYmplY3Qua2V5cyhhZnRlckNvbXBvbmVudHMpLmZvckVhY2goKGNvbXBvbmVudCwgaSkgPT4ge1xyXG4gIGxldCBzdWJDb21wb25lbnRzID0gYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudF07XHJcblxyXG4gIGFwcC5jb21wb25lbnQoY29tcG9uZW50LnRvQ2FtZWxDYXNlKCksIHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBzdWJDb21wb25lbnRzLm1hcChtID0+IGA8JHttfSBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC8ke219PmApLmpvaW4oXCJcIilcclxuICB9KTtcclxufSk7XHJcbiIsIi8qXHJcbiAgR2VuZXJhbCBcclxuXHJcbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcclxuICBNZWhtZXQgQ2VsaWtcclxuKi9cclxuU3RyaW5nLnByb3RvdHlwZS50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB0aGlzLnNwbGl0KCctJykubWFwKChkLGksYSkgPT4gIGkgPiAwID8gZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGQuc2xpY2UoMSkgOmQpLmpvaW4oJycpO1xyXG59XHJcbiJdfQ==
