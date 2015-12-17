$("#sideMenuBarButton").click(function(){
  var worksSidebar = $(".worksSidebar");
  var showing = worksSidebar.css('display');
  if (showing === 'none') {
    worksSidebar.css("display", "block");
    $("#sideMenuBarButton").text("Hide");
  } else {
    worksSidebar.css("display", "none");
    $("#sideMenuBarButton").text("Menu");
  }
})
