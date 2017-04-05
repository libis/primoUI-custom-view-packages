/*
 * Add link to pnx and xml
 * Tom vanmechelen
 */

app.controller('addPnxXmlController', [function () {
    var vm = this;

    vm.getRecordId = getRecordId;
    vm.getLinkToPnx = getLinkToPnx;
    vm.getLinkToXml = getLinkToXml;

    function getRecordId() {
        return vm.parentCtrl.item.pnx.control.recordid;
    }

    function getLinkToPnx() {
        return '/primo_library/libweb/jqp/record/' + getRecordId() + '.pnx';
    }

    function getLinkToXml() {
        var patt = /^TN_/;
        if (!patt.test( getRecordId() ) ) {
            return '/primo_library/libweb/jqp/record/' + getRecordId() + '.xml';
        }else{
            return ;
        }
    }

 
}]);

/*
app.component('addPnxXml', {
    bindings: { parentCtrl: '<' },
    template: '<div ng-if="$ctrl.recordid" class="recordid"><span class="recordid-text">{{$ctrl.recordid}}</span></div>'
});
*/

app.component('prmBriefResultContainerAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'addPnxXmlController',
    template: `
        <add-pnx-xml>
            <div ng-if="$ctrl.getRecordId()" class ="pnx_xml">
            <a href="{{$ctrl.getLinkToPnx()}}" target='_blank'  ng-if="$ctrl.getLinkToPnx()"><span class ="recordid-text">PNX</span></a>
            <span ng-if="$ctrl.getLinkToXml()"> - </span>
            <a href="{{$ctrl.getLinkToXml()}}" target='xml'  ng-if="$ctrl.getLinkToXml()"><span class ="recordid-text">XML</span></a>
            </div>
            </add-pnx-xml>`
});
