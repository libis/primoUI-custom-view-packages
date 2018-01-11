/*
  ViewCustom Package Loader Lirias
  Based on cambridge-search-bar-tabs (Mehmet Celik)

  Do NOT edit this file.
  All components are declared in "components.js"

  KULeuven/LIBIS (c) 2017
  Tom Vanmechelen 
*/
"use strict";

import Components from './components'
import topbarHTML from './components/general/topbar.html'
import topbarMainMenuHTML from './components/general/topbar-main-menu.html'


/* angular.modules is nu beschikbaar in de console */
/***************************************************/
(function(orig) {
  angular.modules = [];
  angular.module = function() {
      if (arguments.length > 1) {
          angular.modules.push(arguments[0]);
      }
      return orig.apply(null, arguments);
  }
})(angular.module);
/***************************************************/


//Create the centralCustom module;
let app = angular.module('viewCustom', [])
  .config(($sceDelegateProvider) => {
    $sceDelegateProvider.resourceUrlWhitelist([
      '**'
    ]);
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

  .run(($templateCache) => {
    $templateCache.put('components/search/topbar/topbar.html', topbarHTML);
    $templateCache.put('components/search/topbar/mainMenu/main-menu.html', topbarMainMenuHTML);
    // $templateCache.put('components/infra/lang/change-lang.html', selectLanguageHTML);
  });

//Contains the after component selectors that will be injected
let afterComponents = {};

//Create all components and determine in which after component these need to be
//injected
console.log('Loading components');
Components.all.forEach((component) => {
  if (component.appendTo) {
    let elements = afterComponents[component.appendTo] || [];
    elements.push(component.name);
    afterComponents[component.appendTo] = elements;
  }

  console.log(`\t\t${component.name}`);
  app.component(component.name.toCamelCase(), component.config);
});

//Inject place holders into the after components
Object.keys(afterComponents).forEach((component, i) => {
  let subComponents = afterComponents[component];

  app.component(component.toCamelCase(), {
    bindings: {
      parentCtrl: '<'
    },
    template: subComponents.map(m => `<${m} parent-ctrl="$ctrl"></${m}>`).join("")
  });
});
