$(document).ready(function(){
  $('.main-content-wrapper').stickyStack({
    containerElement: '.main-content-wrapper',
    stackingElement:  'section',
    boxShadow:      '0 -3px 20px rgba(0, 0, 0, 0.25)'
  });

  var $body   = $(document.body);
  var homeHeight = $('#home').outerHeight(true);

  $body.scrollspy({
    target: 'ul.sidebar-nav li',
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
