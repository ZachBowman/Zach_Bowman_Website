$(document).ready (function ()
  {
  $("#icon_email").on    ("click", function () {window.location.href = "mailto:zachbowman0@gmail.com";});
  $("#icon_linkedin").on ("click", function () {window.location.href = "https://www.linkedin.com/pub/zach-bowman/88/525/15";});
  $("#icon_github").on   ("click", function () {window.location.href = "https://github.com/ZachBowman";});

  //////////////////////////////////////////////////

  $(".icon_link").hover (function ()
    {
    //var size = parseInt ($(this).css ("width"));
    //size -= 2;
    //size = size.toString() + "px";
    $(this).css ("border", "solid 1px rgb(255, 0, 0)");
    //$(this).css ("width", size);
    //$(this).css ("height", size);
    $(this).css ("background-color", "rgb(128, 0, 0)");
    },
  function ()
    {
    //var size = parseInt ($(this).css ("width"));
    //size += 2;
    //size = size.toString() + "px";
    //$(this).css ("border", "none");
    $(this).css ("border", "solid 1px rgb(96, 0, 0)");
    //$(this).css ("width", size);
    //$(this).css ("height", size);
    $(this).css ("background-color", "rgb(96, 0, 0)");
    });

  });
