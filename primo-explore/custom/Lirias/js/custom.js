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
// import {changeLangConfig} from './components/general/changeLang'
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
        //      {name: 'change-lang', config: changeLangConfig, enabled: true, appendTo: null}
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

var topbarHTML = '\r\n<div style="display: none " class="top-nav-bar" layout="row" flex-order="1" layout-align="start center" tabindex="0" role="navigation">\r\n            <!-- Accesibility skip to menu -->\r\n        <prm-skip-to tabindex="0"></prm-skip-to>\r\n        <!-- Institution logo -->\r\n        <prm-logo></prm-logo>\r\n        <!-- spacer -->\r\n        <div class="flex" flex></div>\r\n        <!-- Links menu -->\r\n        <prm-main-menu ng-if="$ctrl.showMainMenu" menu-type="menu" flex="50"></prm-main-menu>\r\n        <!-- spacer -->\r\n        <div flex></div>\r\n        <!-- view switcher: search <> favorites -->\r\n        <!-- User menu -->\r\n        <prm-user-area ></prm-user-area>\r\n    </div>\r\n\r\n\r\n<div class="top-nav-bar" layout="row" flex-order="1" layout-align="start center" tabindex="0" role="navigation">\r\n    <!-- Accesibility skip to menu -->\r\n    <prm-skip-to tabindex="0"></prm-skip-to>\r\n\r\n    <header class="screen-only ng-scope">\r\n        <div class="navbar navbar--global navbar--no-padding">\r\n            <div class="container">\r\n                <a href="https://www.kuleuven.be/" class="logo logo--small logo--floating pull--left" title="KU Leuven"></a>\r\n                <a href="#" class="navbar__toggle navbar__toggle--btn  show--bp-med">&nbsp;</a>\r\n            </div>\r\n\r\n            <!-- Institution logo -->\r\n            <!-- <prm-logo></prm-logo> -->\r\n        </div>\r\n        <!-- spacer -->\r\n        <div class="flex" flex></div>\r\n\r\n        <div class="navbar navbar--local">\r\n            <div class="container">\r\n                <div class="heading--2 navbar__title navbar__title--no-margin">\r\n                    <a href="/primo-explore/search?vid=Lirias" class="ng-binding">\r\n                        <i class="material-icons">home</i> Lirias</a>\r\n                </div>\r\n                <a href="/#" class="navbar__toggle pull--left hidden--bp-med" role="button" aria-expanded="false" data-toggle="collapse"\r\n                    data-target=".nav--tabs">Menu\r\n                    <span class="lines"></span>\r\n                </a>\r\n\r\n                <prm-search-bookmark-filter class="view-switcher" layout-align="end center" layout="row" hide-sm></prm-search-bookmark-filter>\r\n                \r\n                <div class="grid">\r\n                    <div class="grid__6 grid--bp-med__9">\r\n                        <a href="#" class="navbar__toggle hidden--bp-med" role="button" aria-expanded="false" data-toggle="collapse" data-target=".nav--tabs">Menu\r\n                            <span class="lines"></span>\r\n                        </a>\r\n                        <nav class="nav nav--tabs nav--more">\r\n                            \r\n                            <!-- Links menu -->\r\n                            <prm-main-menu ng-if="$ctrl.showMainMenu" menu-type="menu" flex="50"></prm-main-menu>\r\n\r\n                            <!-- view switcher: search <> favorites -->\r\n                            \r\n\r\n                        </nav>\r\n                    </div>\r\n\r\n<!-- TO DO: Creating a language switch  \r\n                    <div class="grid__6 grid--bp-med__3">\r\n                        <div class="pull--right__nav-user">\r\n                            <prm-user-area ></prm-user-area>\r\n                           <change-lang parent-ctrl="$ctrl"></change-lang>\r\n                           <prm-change-lang></prm-change-lang>\r\n                           </div>\r\n                    </div>\r\n-->                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n\r\n</div>';
var topbarMainMenuHTML = '<ul>\r\n    <li class="nav__item" id="{{\'mainmenu.label.\'+x.label | translate}}" tabindex="0" ng-repeat="x in ::$ctrl.viewUrlsList |limitTo:ctrl.showCount()">\r\n        <a href="#" (click)="$ctrl.updateUrl(x.url,x.target)">\r\n            <span class="item-content" translate="mainmenu.label.{{ ::x.label }}"></span>\r\n        </a>\r\n    </li>\r\n</ul>';

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
})
/*
.decorator(
"$UserSessionManagerService",
function userSessionManagerServiceDecorator($delegate) {
  // Return the decorated service.
  return (decoratedUserSessionManagerService);
  // I append a new message to the existing greeting.
  function decoratedUserSessionManagerService(service) {
    console.log(service)
    return ($delegate(service));
    }
  }
)
*/

.run(function ($templateCache) {
  $templateCache.put('components/search/topbar/topbar.html', topbarHTML);
  $templateCache.put('components/search/topbar/mainMenu/main-menu.html', topbarMainMenuHTML);
  // $templateCache.put('components/infra/lang/change-lang.html', selectLanguageHTML);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXExpcmlhc1xcanNcXGNvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXExpcmlhc1xcanNcXG1haW4uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXExpcmlhc1xcanNcXHV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FqQkNBQTs7Ozs7Ozs7Ozs7QUFTQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztJQUtxQixlOzs7Ozs7O3dCQUVGO0FBQ2Y7Ozs7Ozs7Ozs7O0FBWUEsYUFBTztBQUNMO0FBQ047QUFDQTs7OztBQUhXLFFBT0wsTUFQSyxDQU9FLFVBQUMsQ0FBRDtBQUFBLGVBQU8sRUFBRSxPQUFUO0FBQUEsT0FQRixDQUFQO0FBUUQ7Ozs7OztrQkF2QmtCLGU7OztBQ25CckI7Ozs7Ozs7Ozs7QUFVQTs7QUFFQTs7Ozs7Ozs7O0FBS0E7QUFDQTs7QUFDQSxDQUFDLFVBQVMsSUFBVCxFQUFlO0FBQ2QsVUFBUSxPQUFSLEdBQWtCLEVBQWxCO0FBQ0EsVUFBUSxNQUFSLEdBQWlCLFlBQVc7QUFDeEIsUUFBSSxVQUFVLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDdEIsY0FBUSxPQUFSLENBQWdCLElBQWhCLENBQXFCLFVBQVUsQ0FBVixDQUFyQjtBQUNIO0FBQ0QsV0FBTyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLFNBQWpCLENBQVA7QUFDSCxHQUxEO0FBTUQsQ0FSRCxFQVFHLFFBQVEsTUFSWDtBQVNBOztBQUdBO0FBQ0EsSUFBSSxNQUFNLFFBQVEsTUFBUixDQUFlLFlBQWYsRUFBNkIsRUFBN0IsRUFDUCxNQURPLENBQ0EsVUFBQyxvQkFBRCxFQUEwQjtBQUNoQyx1QkFBcUIsb0JBQXJCLENBQTBDLENBQ3hDLElBRHdDLENBQTFDO0FBR0QsQ0FMTztBQU1SOzs7Ozs7Ozs7Ozs7Ozs7QUFOUSxDQXVCUCxHQXZCTyxDQXVCSCxVQUFDLGNBQUQsRUFBb0I7QUFDdkIsaUJBQWUsR0FBZixDQUFtQixzQ0FBbkIsRUFBMkQsVUFBM0Q7QUFDQSxpQkFBZSxHQUFmLENBQW1CLGtEQUFuQixFQUF1RSxrQkFBdkU7QUFDQTtBQUNELENBM0JPLENBQVY7O0FBNkJBO0FBQ0EsSUFBSSxrQkFBa0IsRUFBdEI7O0FBRUE7QUFDQTtBQUNBLFFBQVEsR0FBUixDQUFZLG9CQUFaO0FBQ0EscUJBQVcsR0FBWCxDQUFlLE9BQWYsQ0FBdUIsVUFBQyxTQUFELEVBQWU7QUFDcEMsTUFBSSxVQUFVLFFBQWQsRUFBd0I7QUFDdEIsUUFBSSxXQUFXLGdCQUFnQixVQUFVLFFBQTFCLEtBQXVDLEVBQXREO0FBQ0EsYUFBUyxJQUFULENBQWMsVUFBVSxJQUF4QjtBQUNBLG9CQUFnQixVQUFVLFFBQTFCLElBQXNDLFFBQXRDO0FBQ0Q7O0FBRUQsVUFBUSxHQUFSLFVBQW1CLFVBQVUsSUFBN0I7QUFDQSxNQUFJLFNBQUosQ0FBYyxVQUFVLElBQVYsQ0FBZSxXQUFmLEVBQWQsRUFBNEMsVUFBVSxNQUF0RDtBQUNELENBVEQ7O0FBV0E7QUFDQSxPQUFPLElBQVAsQ0FBWSxlQUFaLEVBQTZCLE9BQTdCLENBQXFDLFVBQUMsU0FBRCxFQUFZLENBQVosRUFBa0I7QUFDckQsTUFBSSxnQkFBZ0IsZ0JBQWdCLFNBQWhCLENBQXBCOztBQUVBLE1BQUksU0FBSixDQUFjLFVBQVUsV0FBVixFQUFkLEVBQXVDO0FBQ3JDLGNBQVU7QUFDUixrQkFBWTtBQURKLEtBRDJCO0FBSXJDLGNBQVUsY0FBYyxHQUFkLENBQWtCO0FBQUEsbUJBQVMsQ0FBVCwrQkFBb0MsQ0FBcEM7QUFBQSxLQUFsQixFQUE0RCxJQUE1RCxDQUFpRSxFQUFqRTtBQUoyQixHQUF2QztBQU1ELENBVEQ7Ozs7O0FDL0VBOzs7Ozs7QUFNQSxPQUFPLFNBQVAsQ0FBaUIsV0FBakIsR0FBK0IsWUFBVztBQUN4QyxTQUFPLEtBQUssS0FBTCxDQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBb0IsVUFBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUw7QUFBQSxXQUFZLElBQUksQ0FBSixHQUFRLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBWSxXQUFaLEtBQTRCLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBcEMsR0FBZ0QsQ0FBNUQ7QUFBQSxHQUFwQixFQUFtRixJQUFuRixDQUF3RixFQUF4RixDQUFQO0FBQ0QsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxyXG4gIERlY2xhcmUgeW91ciBjb21wb25lbnRzIGhlcmUuXHJcblxyXG4gIFJld3JpdGUgdGhpcyB3aGVuIGltcG9ydHMgY2FuIGJlIGRvbmUgZHluYW1pY2FsbHlcclxuICBodHRwOi8vMmFsaXR5LmNvbS8yMDE3LzAxL2ltcG9ydC1vcGVyYXRvci5odG1sXHJcblxyXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XHJcbiAgTWVobWV0IENlbGlrXHJcbiovXHJcbmltcG9ydCAnLi91dGlscydcclxuXHJcbi8qIGltcG9ydCB5b3VyIGNvbXBvbmVudCBjb25maWd1cmF0aW9uKi9cclxuLy8gVE9ETzogQ3JlYXRpbmcgYSBsYW5ndWFnZSBzd2l0Y2ggIFxyXG4vLyBpbXBvcnQge2NoYW5nZUxhbmdDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2NoYW5nZUxhbmcnXHJcbi8qXHJcbmltcG9ydCB7Y2FtVGFic0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvY2FtVGFicydcclxuaW1wb3J0IHtjYW1Ccm93c2VCdXR0b25Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2NhbUJyb3dzZUJ1dHRvbidcclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFmdGVyQ29tcG9uZW50cyB7XHJcblxyXG4gIHN0YXRpYyBnZXQgYWxsKCkge1xyXG4gICAgLypcclxuICAgICAgbmFtZSA9IHRoZSBzdWIgZWxlbWVudCBpbiB0aGUgYWZ0ZXIgZWxlbWVudFxyXG4gICAgICBjb25maWcgPSB0aGUgaW1wb3J0ZWQgY29uZmlndXJhdGlvbiBvYmplY3RcclxuICAgICAgZW5hYmxlZCA9IHRydWUvZmFsc2Ugc2hvdWxkIHRoZSBjb21wb25lbnQgYmUgY3JlYXRlZFxyXG4gICAgICBhcHBlbmRUbyA9IFRoZSBjb21wb25lbnQgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gdGhpcyBhZnRlciBjb21wb25lbnQuXHJcblxyXG4gICAgICBleC4ge25hbWU6ICdob21lLWljb24nLCBjb25maWc6IGhvbWVJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJ31cclxuICAgICAgcmVzdWx0cyBpbjpcclxuICAgICAgICA8cHJtLWxvZ28tYWZ0ZXIgcGFyZW50Q3RybD0nJGN0cmwnPlxyXG4gICAgICAgICAgPGhvbWUtaWNvbiBwYXJlbnRDdHJsPSckY3RybCc+PC9ob21lLWljb24+XHJcbiAgICAgICAgPC9wcm0tbG9nby1hZnRlcj5cclxuICAgICovXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAvLyBUT0RPOiBDcmVhdGluZyBhIGxhbmd1YWdlIHN3aXRjaCAgXHJcbi8vICAgICAge25hbWU6ICdjaGFuZ2UtbGFuZycsIGNvbmZpZzogY2hhbmdlTGFuZ0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGx9XHJcbi8qXHJcbiAgICAgIHtuYW1lOiAnY2FtLXRhYnMnLCBjb25maWc6IGNhbVRhYnNDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiBudWxsfSxcclxuICAgICAge25hbWU6ICdjYW0tYnJvd3NlLWJ1dHRvbicsIGNvbmZpZzogY2FtQnJvd3NlQnV0dG9uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogbnVsbH1cclxuICAqLyAgICBcclxuICAgIF0uZmlsdGVyKChtKSA9PiBtLmVuYWJsZWQpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiLypcclxuICBWaWV3Q3VzdG9tIFBhY2thZ2UgTG9hZGVyIExpcmlhc1xyXG4gIEJhc2VkIG9uIGNhbWJyaWRnZS1zZWFyY2gtYmFyLXRhYnMgKE1laG1ldCBDZWxpaylcclxuXHJcbiAgRG8gTk9UIGVkaXQgdGhpcyBmaWxlLlxyXG4gIEFsbCBjb21wb25lbnRzIGFyZSBkZWNsYXJlZCBpbiBcImNvbXBvbmVudHMuanNcIlxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIFRvbSBWYW5tZWNoZWxlbiBcclxuKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXHJcbmltcG9ydCB0b3BiYXJIVE1MIGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3RvcGJhci5odG1sJ1xyXG5pbXBvcnQgdG9wYmFyTWFpbk1lbnVIVE1MIGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3RvcGJhci1tYWluLW1lbnUuaHRtbCdcclxuXHJcblxyXG4vKiBhbmd1bGFyLm1vZHVsZXMgaXMgbnUgYmVzY2hpa2JhYXIgaW4gZGUgY29uc29sZSAqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4oZnVuY3Rpb24ob3JpZykge1xyXG4gIGFuZ3VsYXIubW9kdWxlcyA9IFtdO1xyXG4gIGFuZ3VsYXIubW9kdWxlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgYW5ndWxhci5tb2R1bGVzLnB1c2goYXJndW1lbnRzWzBdKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gb3JpZy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gIH1cclxufSkoYW5ndWxhci5tb2R1bGUpO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHJcbi8vQ3JlYXRlIHRoZSBjZW50cmFsQ3VzdG9tIG1vZHVsZTtcclxubGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd2aWV3Q3VzdG9tJywgW10pXHJcbiAgLmNvbmZpZygoJHNjZURlbGVnYXRlUHJvdmlkZXIpID0+IHtcclxuICAgICRzY2VEZWxlZ2F0ZVByb3ZpZGVyLnJlc291cmNlVXJsV2hpdGVsaXN0KFtcclxuICAgICAgJyoqJ1xyXG4gICAgXSk7XHJcbiAgfSlcclxuICAvKlxyXG4gIC5kZWNvcmF0b3IoXHJcbiAgXCIkVXNlclNlc3Npb25NYW5hZ2VyU2VydmljZVwiLFxyXG4gIGZ1bmN0aW9uIHVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2VEZWNvcmF0b3IoJGRlbGVnYXRlKSB7XHJcbiAgICAvLyBSZXR1cm4gdGhlIGRlY29yYXRlZCBzZXJ2aWNlLlxyXG4gICAgcmV0dXJuIChkZWNvcmF0ZWRVc2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKTtcclxuICAgIC8vIEkgYXBwZW5kIGEgbmV3IG1lc3NhZ2UgdG8gdGhlIGV4aXN0aW5nIGdyZWV0aW5nLlxyXG4gICAgZnVuY3Rpb24gZGVjb3JhdGVkVXNlclNlc3Npb25NYW5hZ2VyU2VydmljZShzZXJ2aWNlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNlcnZpY2UpXHJcbiAgICAgIHJldHVybiAoJGRlbGVnYXRlKHNlcnZpY2UpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuICApXHJcbiovXHJcblxyXG4gIC5ydW4oKCR0ZW1wbGF0ZUNhY2hlKSA9PiB7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvc2VhcmNoL3RvcGJhci90b3BiYXIuaHRtbCcsIHRvcGJhckhUTUwpO1xyXG4gICAgJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL3NlYXJjaC90b3BiYXIvbWFpbk1lbnUvbWFpbi1tZW51Lmh0bWwnLCB0b3BiYXJNYWluTWVudUhUTUwpO1xyXG4gICAgLy8gJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL2luZnJhL2xhbmcvY2hhbmdlLWxhbmcuaHRtbCcsIHNlbGVjdExhbmd1YWdlSFRNTCk7XHJcbiAgfSk7XHJcblxyXG4vL0NvbnRhaW5zIHRoZSBhZnRlciBjb21wb25lbnQgc2VsZWN0b3JzIHRoYXQgd2lsbCBiZSBpbmplY3RlZFxyXG5sZXQgYWZ0ZXJDb21wb25lbnRzID0ge307XHJcblxyXG4vL0NyZWF0ZSBhbGwgY29tcG9uZW50cyBhbmQgZGV0ZXJtaW5lIGluIHdoaWNoIGFmdGVyIGNvbXBvbmVudCB0aGVzZSBuZWVkIHRvIGJlXHJcbi8vaW5qZWN0ZWRcclxuY29uc29sZS5sb2coJ0xvYWRpbmcgY29tcG9uZW50cycpO1xyXG5Db21wb25lbnRzLmFsbC5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICBpZiAoY29tcG9uZW50LmFwcGVuZFRvKSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSB8fCBbXTtcclxuICAgIGVsZW1lbnRzLnB1c2goY29tcG9uZW50Lm5hbWUpO1xyXG4gICAgYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudC5hcHBlbmRUb10gPSBlbGVtZW50cztcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGBcXHRcXHQke2NvbXBvbmVudC5uYW1lfWApO1xyXG4gIGFwcC5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUudG9DYW1lbENhc2UoKSwgY29tcG9uZW50LmNvbmZpZyk7XHJcbn0pO1xyXG5cclxuLy9JbmplY3QgcGxhY2UgaG9sZGVycyBpbnRvIHRoZSBhZnRlciBjb21wb25lbnRzXHJcbk9iamVjdC5rZXlzKGFmdGVyQ29tcG9uZW50cykuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XHJcbiAgbGV0IHN1YkNvbXBvbmVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50XTtcclxuXHJcbiAgYXBwLmNvbXBvbmVudChjb21wb25lbnQudG9DYW1lbENhc2UoKSwge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IHN1YkNvbXBvbmVudHMubWFwKG0gPT4gYDwke219IHBhcmVudC1jdHJsPVwiJGN0cmxcIj48LyR7bX0+YCkuam9pbihcIlwiKVxyXG4gIH0pO1xyXG59KTtcclxuIiwiLypcclxuICBHZW5lcmFsIFxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIE1laG1ldCBDZWxpa1xyXG4qL1xyXG5TdHJpbmcucHJvdG90eXBlLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHRoaXMuc3BsaXQoJy0nKS5tYXAoKGQsaSxhKSA9PiAgaSA+IDAgPyBkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZC5zbGljZSgxKSA6ZCkuam9pbignJyk7XHJcbn1cclxuIl19
