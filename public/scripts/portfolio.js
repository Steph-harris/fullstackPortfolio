$(document).ready(function(){
  var navCol = $(".navbar-collapse");
  var navLink = $(".navbar-nav a");
  var today = new Date();
  var $body   = $(document.body);
  var homeHeight = $('#home').outerHeight(true);

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

  $("#extras").text("\u00A9 "+today.getFullYear()+" Stephanie Harris");

  navLink.on("click", function(){
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

  $body.scrollspy({
    target: '#sidebar',
  });

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
});
