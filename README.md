primoUI-custom-view-packages

install nvm

$ nvm list
$ nvm install latest
$ nvm install 10.22.1
$ nvm use 10.22.1
$ npm install

check gulp/config.js
    var PROXY_SERVER = 'https://limo.q.libis.be';
    
$ gulp custom-js --view  <VIEW_CODE>
$ gulp custom-css --view  <VIEW_CODE>
$ gulp run --view  <VIEW_CODE> --browserify --proxy http://limo.q.libis.be

=>  http://localhost:8003/primo-explore/search?openExplore=true&vid=<VIEW_CODE>

$ gulp create-package

$ gulp build-all-packages

