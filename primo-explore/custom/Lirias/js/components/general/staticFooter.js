
class StaticFooterController {
    constructor($scope, $http, $mdDialog, $element) {
        let self = this;
        var locale = "en_US"
/*
        var locale = self.parentCtrl.parentCtrl.searchService.userSessionManagerService.i18nService.getLanguage();
        var vid = window.appConfig['vid'];
       //       $templateCache.put(staticFooterTemplateName, 'custom/CENTRAL_PACKAGE/html/templates/footer_' + locale + '.html');
*/
/*
        var vid = window.appConfig['vid'];
        console.log("FOTTTTTT")
        console.log(vid)
*/
        $scope.getTemplateUrl = function () {
            return 'custom/Lirias/html/templates/footer_' + locale + '.html';
        }
    }
}

StaticFooterController.$inject = ['$scope', '$http', '$mdDialog', '$element']

export let staticVidFooterConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: StaticFooterController,
    template: '<ng-include src="getTemplateUrl()"/>',
}
