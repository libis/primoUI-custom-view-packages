var feeds = [
        {
            feedUrl: "https://khbobibliotheken.wordpress.com/feed/",
            feedLang: ['nl_BE', 'en_US'],
            feedContentType: 'snippet',
            feedInst: "KHBO",
            feedFilter: [
            ]
        },
        {
            feedUrl: "https://kathoko.wordpress.com/feed/",
            feedLang: ['nl_BE', 'en_US'],
            feedContentType: 'snippet',
            feedInst: "KATHO",
            feedFilter: [
                    { param: "entry.categories", value: "limo" },
                    { param: "entry.categories", value: "e-bronnen" }

            ]
        },
        {
            feedUrl: "https://limo-libis.blogspot.com/feeds/posts/default",
            feedLang: ['en_US'],
            feedContentType: 'full',
            feedInst: "LIMO",
            feedFilter: [
                    { param: "entry.categories", value: "All Views" },
                    { param: "entry.categories", value: "VIVES" },
                    { param: "entry.categories", value: "KU Leuven Association" }
            ]

        },
        {
            feedUrl: "https://limo-libis-nl.blogspot.com/feeds/posts/default",
            feedLang: ['nl_BE'],
            feedContentType: 'full',
            feedInst: "LIMO",
            feedFilter: [
                    { param: "entry.categories", value: "All Views" },
                    { param: "entry.categories", value: "VIVES" },
                    { param: "entry.categories", value: "KU Leuven Association" }
            ]

        }
];

app.component('prmNews', {
    bindings: { parentCtrl: '<' },
    controller: 'prmNewsController',
    template: `
      <md-card ng-hide="!feedresults.length" class ="default-card _md md-primoExplore-theme">
        <md-card-content>
         <h1 ng-hide="!feedresults.length || title==='' ">{{title}}</h1>
         <md-list>
         <md-list-item ng-repeat="feed in feedresults | limitTo: maxfeeds">
         <div class ="md-list-item-text"> <a href="{{ feed.link }}" target="_news">{{ feed.title }}</a>
            <div class ="blogheaderbody">{{ feed.contentSnippet }}</div>
         </div>
         </md-list-item>
         </md-list>
        </md-card-content>
      </md-card>
`
});

app.controller("prmNewsController", ['$scope', '$http', 'FeedService', function ($scope, $http, FeedService) {
    var self = this;
    var locale = self.parentCtrl.staticService.userSessionManagerService.i18nService.getLanguage();
    var vid = window.appConfig['vid'];

    var dm = new Date();
    dm.setHours(24, 0, 0, 0);
    $scope.maxfeeds = 3;

    /* set title for locale to '' to hide Title */
    var title = {
        'nl_BE': 'Nieuws',
        'en_US': 'News',
        'fr_FR': 'Nouvelles',
    }

    $scope.title = title[locale];
    $scope.feedresults = [];

    var filteredFeeds = feeds.filter(function (item) {
        return item.feedLang.indexOf(locale) >= 0;
    }); //feedLang equals locale language
    //console.log (filteredFeeds)

    for (var f = 0; f <= 10 && f < filteredFeeds.length; f++) {
        var feedConf = filteredFeeds[f];
        // console.log(feedConf.feedUrl)
        FeedService.parseFeed(feedConf).then(function (res) {
            //    console.log('----FeedService.parseFeed(feedConf) ---------------------')
            $scope.feedresults = $scope.feedresults.concat(res);

            FeedService.sortFeed($scope.feedresults);
        });
    }
}]);
