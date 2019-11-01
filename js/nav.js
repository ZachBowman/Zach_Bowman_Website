$(document).ready (function ()
  {
  $(".menu_item").hover (function ()
    {
    $(this).css ("border", "solid 1px rgb(0, 204, 255)");
    //$(this).css ("margin", "3px");
    $(this).css ("background-color", "rgb(0, 48, 64)");
    $(this).css ("color", "rgb(97, 233, 255)");
    },
  function ()
    {
    //$(this).css ("border", "none");
    $(this).css ("border", "solid 1px rgb(0, 24, 32)");
    //$(this).css ("margin", "4px");
    $(this).css ("background-color", "rgb(0, 24, 32)");
    $(this).css ("color", "rgb(0, 204, 255)");
    });

  });
