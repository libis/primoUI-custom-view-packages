
app.component('prmUserAreaExpandableAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmUserAreaExpandableController'
});

app.controller("prmUserAreaExpandableController", ['$scope', function ($scope) {
    console.log ($scope)
    var self = this;
    console.log (self)
    console.log (self.parentCtrl.showUserArea);
    self.parentCtrl.showUserArea = false;
}]);
