$(document).ready(function(){
  //close navbar on selection
  var navCol = $(".navbar-collapse");
  var navLink = $(".navbar-nav a");

  navLink.on("click", function(){
    //logic to keep nav from closing on dropdown-toggle
    if($(this).hasClass("dropdown-toggle")){
      return
    }
    navCol.collapse('hide');
  });

   // make navbar only affix from about me section
 // $('#sidebar').affix({
 //    offset: {
 //    top: 715
 //    }
 //  });

  var $body   = $(document.body);
  var homeHeight = $('#home').outerHeight(true);

  $body.scrollspy({
    target: '#sidebar',
  });
});
