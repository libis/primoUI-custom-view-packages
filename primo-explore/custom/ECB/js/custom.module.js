var app = angular.module('viewCustom', ['angularLoad']);




/* Redirect for PrimoVE ECB */
if ( window.location.search.match(/[?&]vid=ECB[&]?/) ){
    var url = "https://ecb." + window.location.hostname + window.location.pathname + window.location.search
    // console.log ( url  )
    window.location.href = url
  }
  