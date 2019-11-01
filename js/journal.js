var journal_program = angular.module ("journal_program", ["ngRoute"]);

journal_program.config (['$routeProvider', function ($routeProvider)
  {
  $routeProvider.
  when ('/',
    {
    templateUrl: 'templates/journal_read.html'
    }).
  when ('/journal_read',
    {
    templateUrl: 'templates/journal_read.html'
    }).
  when ('/journal_post',
    {
    templateUrl: 'templates/journal_post.html'
    }).
  otherwise (
    {
    templateUrl: 'templates/journal_read.html'
    });
  }]);

$(document).ready (function ()
  {
  $("#login_button").on ("click", function ()
    {
    $("#login_window").slideToggle();
    });

  $("#login_button2").on ("click", function ()
    {
    window.location.href = "#journal_post";
    });

  $("#post_button").on ("click", function ()
    {
    });
  });
