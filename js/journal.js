$(document).ready (function ()
  {
  $("#login_button").on ("click", function ()
    {
    $("#login_window").slideToggle();
    });

  $("#login_button2").on ("click", function ()
    {
    window.location.href = "post.html";
    });

  $("#post_button").on ("click", function ()
    {
    });
  });
