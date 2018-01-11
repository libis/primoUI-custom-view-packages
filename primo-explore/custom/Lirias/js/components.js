/*
  Declare your components here.

  Rewrite this when imports can be done dynamically
  http://2ality.com/2017/01/import-operator.html

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
import './utils'

/* import your component configuration*/
// TODO: Creating a language switch  
// import {changeLangConfig} from './components/general/changeLang'
/*
import {camTabsConfig} from './components/general/camTabs'
import {camBrowseButtonConfig} from './components/general/camBrowseButton'
*/

export default class AfterComponents {

  static get all() {
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
    ].filter((m) => m.enabled);
  }

}
