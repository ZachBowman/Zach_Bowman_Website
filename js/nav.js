$(document).ready (function ()
  {

  $("#nav_about").on      ("click", function () {window.location.href = "./index.html";});
  $("#nav_gamedev").on    ("click", function () {window.location.href = "game_development.html";});
  $("#nav_gamedesign").on ("click", function () {window.location.href = "game_design.html";});
  $("#nav_webdev").on     ("click", function () {window.location.href = "web_development.html";});
  $("#nav_webdesign").on  ("click", function () {window.location.href = "web_design.html";});
  $("#nav_levels").on     ("click", function () {window.location.href = "levels.html";});
  $("#nav_music").on      ("click", function () {window.location.href = "music.html";});
  $("#nav_contact").on    ("click", function () {window.location.href = "mailto:zachbowman0@gmail.com";});

  //////////////////////////////////////////////////

  $(".menu_item").hover (function ()
    {
    $(this).css ("border", "solid 1px rgb(0, 204, 255)");
    $(this).css ("margin", "3px");
    $(this).css ("background-color", "rgb(0, 48, 64)");
    $(this).css ("color", "rgb(97, 233, 255)");
    },
  function ()
    {
    $(this).css ("border", "none");
    $(this).css ("margin", "4px");
    $(this).css ("background-color", "rgb(0, 24, 32)");
    $(this).css ("color", "rgb(0, 204, 255)");
    });

  });
