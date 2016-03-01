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
