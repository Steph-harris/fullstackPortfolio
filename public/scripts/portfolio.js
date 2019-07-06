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

  // Submit Message Form
  $("#msgForm").on("submit", function(e){
     e.preventDefault();
     return;
  });
});

function submitMsg() {
  var form = $("#msgForm")[0];
  var name = $("#conName").val();
  var email = $("#conEmail").val();
  var msg = $("#conMessage").val();

  var success = `<div class="alert alert-success">
                  <h2>Your message has been sent!</h2><br />
                 </div>`;
  var fail = `<div class="alert alert-danger">
                <strong>Error:</strong> Message not sent.
              </div>`;
  var btn = $('#msgSubmit');
  btn.attr("disabled", true);
  btn.button('loading');

  $.post("/sendMessage", {
    name: name,
    email: email,
    message: msg
  })
  .done(function(data){
    $("#contactShow")
      .html(success);

    form.reset();
  })
  .fail(function() {
    $("#warningDiv")
      .html(fail)
      .show();

    setTimeout(function() {
       $("#warningDiv")
       .hide()
       .html('');
    }, 15000);

    btn.button('reset');
  });

  return false;
}
