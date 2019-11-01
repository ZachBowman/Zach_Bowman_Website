var zachbowman_site = angular.module ("zachbowman_site", []);

zachbowman_site.config (['$routeProvider', function ($routeProvider)
  {
  $routeProvider.
  when ('/',      {templateUrl: 'views/about.html'}).
  when ('/about', {templateUrl: 'views/about.html'}).
  when ('/game_development',
    {
    templateUrl: 'views/game_development.html'
    }).
  when ('/game_design',
    {
    templateUrl: 'views/game_design.html'
    }).
  when ('/web_development',
    {
    templateUrl: 'views/web_development.html'
    }).
  when ('/web_design',
    {
    templateUrl: 'views/web_design.html'
    }).
  when ('/level_design',
    {
    templateUrl: 'views/level_design.html'
    }).
  when ('/soundtracks',
    {
    templateUrl: 'views/soundtracks.html'
    }).
  otherwise (
    {
    templateUrl: 'views/about.html'
    });
  }]);
