app.component('prmSpotlight', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSpotlightController',
    template: `
    <md-card class="default-card _md md-primoExplore-theme">
      <img src="{{img}}" class="md-card-image" alt="image caption">
      <md-card-title>
          <md-card-title-text>
              <span class="md-headline">{{title}}</span>
          </md-card-title-text>
      </md-card-title>
      <md-card-content>
        <div ng-bind-html="description"></div>
      </md-card-content>
    </md-card>
`
});

app.controller("prmSpotlightController", ['$scope', '$http', function ($scope, $http) {
    let self = this;

    const RSS_URL = `https://documentatiecentrumvb.blogspot.com/feeds/posts/default/?alt=rss`;

    fetch("https://api.rss2json.com/v1/api.json?rss_url=" + RSS_URL)
    .then((res) => res.json())
    .then((data) => {

      const res = data.items;
        console.log(res);
      const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !


      function toText(node) {
       let tag = document.createElement('div')
       tag.innerHTML = node
       node = tag.innerText
       return node
    }
     function shortenText(text,startingPoint ,maxLength) {
     return text.length > maxLength?
        text.slice(startingPoint, maxLength):
        text
    }

    posts.forEach(el => {
        $scope.title = el.title;
        $scope.description = toText(el.description);

        var img = el.thumbnail;  //Get thumnail image from rss feed
        console.log(img);
        $scope.img = 'https://1.bp.blogspot.com/-tcxIdAf5xwU/YDO8JM4qqJI/AAAAAAAAAAk/aZ_hBh8KfdkE_l4Lhlqd7r6RcH5TDwjAgCLcBGAsYHQ/s971/Holle%2Bwegen.jpg';
        if(img){
          img = img.replace(/\/s72\-c/, "");//replace /s72\-c with nothing
          $scope.img = img;
        }

        $scope.url = el.linkL;
      });
    });
  }]);
