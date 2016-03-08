$(document).ready(function(){
  //close navbar on selection
  var navCol = $(".navbar-collapse");
  var navLink = $(".navbar-nav a");
  //.navbar-collapse a needs to close nav too

  // navCol.on("blur", function(){
  //   navCol.collapse('hide');
  // }
  navLink.on("click", function(){
    //add logic to close nav if it's not in focus
    //logic to keep nav from closing on dropdown-toggle
    if($(this).hasClass("dropdown-toggle")){
      return
    }
    navCol.collapse('hide');
  });

$('.main-content-wrapper').stickyStack({
  containerElement: '.main-content-wrapper',
  stackingElement:  'section',
  boxShadow:      '0 -3px 20px rgba(0, 0, 0, 0.25)'
});

  var $body   = $(document.body);
  var homeHeight = $('#home').outerHeight(true);

  $body.scrollspy({
    target: '#sidebar',
  });

  // navbar JS
  <!-- Custom Theme JavaScript -->
   // Closes the sidebar menu
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

   // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Scrolls to the selected menu item on the page
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
             scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});
