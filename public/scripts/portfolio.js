$(document).ready(function(){
   // make navbar only affix from about me section
 $('#sidebar').affix({
    offset: {
    top: 715
    }
  });

  var $body   = $(document.body);
  var homeHeight = $('#home').outerHeight(true);

  $body.scrollspy({
    target: '#sidebar',
    // offset: homeHeight
  });        
});