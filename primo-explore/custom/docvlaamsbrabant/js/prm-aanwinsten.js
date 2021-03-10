app.component('prmAanwinsten', {
    bindings: { parentCtrl: '<' },
    controller: 'prmAanwinstenController',
    template: `
         <p>
           Bekijk <a href="{{url}}">hier</a> welke publicaties de voorbije maand werden toegevoegd aan de catalogus
         </p>
`
});

app.controller("prmAanwinstenController", ['$scope', '$http', function ($scope, $http) {
    var self = this;
    var vid = window.appConfig['vid'];
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    if(month - 1 == 0){
      month = 12;
      year = year - 1;
    }else{
      month = month - 1;
    }
    month = ("0" + month).slice(-2);

    console.log("Current month is: " + month);

    $scope.url = window.location.origin + "/primo-explore/search?query=any,contains,acquisitionDate" + year + month + "DOCVB*,AND&tab=phys_items_tab&search_scope=PHYS_ITEMS&vid=docvlaamsbrabant&lang=nl_BE&mode=advanced&offset=0;"

}]);
