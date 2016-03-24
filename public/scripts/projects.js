$(document).ready(function(){
  //Create Project Objects
  var projects = [
    {
      title: "Show Us a Pet ",
      pic:"/images/petstiny.png" ,
      href:"https://showusapet.herokuapp.com",
      github:"https://github.com/Steph-harris/ourPetProject",
      summary:"This is a shelter pet app that displays pets up for adoption close to a users zip code with images (from Flickr and specific shelters), pet description, special needs, wikipedia article about that particular breed (if one is provided) as well as care information. Users can also leave a review of their pet via Firebase chat."
    }, {
      title: "Rutgers Flyers ",
      pic: "/images/rufly.png",
      href:"https://rufly2.herokuapp.com",
      github:"https://github.com/tammerg/rutgers_flyer",
      summary:"Group Project app that lets users sign up, add restaurants, and leave reviews."
    }, {
      title: "Jackie Minieri Fashion ",
      pic: "/images/jmfashion.png",
      href:"https://jackieminieri.herokuapp.com",
      github:"https://github.com/Steph-harris/fashionSite",
      summary:"I built this site for a client who is starting her own fashion line based on marine life designs.  She wanted a portfolio site that will eventually display her products. I set up the site in an MVC layout so that later we can easily work with a database and use Handlebars for the views."
    }, {
      title: "Rock, Paper, Scissors ",
      pic: "/images/rpstiny.png",
      href:"https://stephs-rps.herokuapp.com",
      github:"https://github.com/Steph-harris/RPSGame",
      summary:"My version of the popular game featuring Justin Aguilar's CSS3 animations. Users can play any odd number of rounds from 3-9, and any round ending in a tie will be replayed so that there is always a winner. I used Firebase to build a realtime Leaderboard for scores."
    }, {
      title: "Clicky Games ",
      pic: "/images/clickytiny.png",
      href:"https://candsclicky.herokuapp.com",
      github:"https://github.com/Steph-harris/jsClickGame" ,
      summary:"This was a 2 part assignment that took place a few months apart: first we were to create a clicky game using vanilla javascript that counted and displayed how many faces a user was able to click within 20 seconds (clicky game #2). After we learned jQuery, we were tasked with taking a friend's game and updating it. I added a visible point display, modals, picture background colors based on game state when on(clicked or unclicked), and made the css names more semantic.  I also added my stamp of approval to the bottom of the page which verifies that it passed JS linting."
    }, {
      title: "My First Portfolio ",
      pic: "/images/shweb.png",
      href:"http://painter-mildred-27247.bitballoon.com/",
      github:"https://github.com/Steph-harris/my_cf_page",
      summary:"This is the portfolio that I built as my introduction to web development in 2015"
    }
  ]

  for(var i=0; i<projects.length; i++){
   //build div with project image that toggles modal
   var newProj = '<div class="col-xs-12 col-sm-6 col-md-4 show-im">'
   newProj += '<a data-toggle="modal" data-target="#modal'+ [i+1] + '" target="_blank">'
   newProj += '<img id="projIm' + [i+1] + '" class="img-responsive fitRow "'
   newProj += 'src="' + projects[i].pic + '">'
   newProj += '<div class="imInfo"><h3>Click for Details</h3></div>';
   newProj += '</a></div>';

    var newModal = '<div class="modal fade" id="modal'+ [i+1] + '"'
    newModal += 'tabindex="-1" role="dialog"'
    newModal += 'aria-labelledby="mySmallModalLabel">'
    newModal += '<div class="modal-dialog" role="document">'
    newModal += '<div class="modal-content"><div class="modal-header">'
    newModal += '<button type="button" class="close" data-dismiss="modal"'
    newModal += 'aria-label="Close"><span aria-hidden="true">&times;</span></button>'
    newModal += '<h2 class="modal-title" id="modLabel' + [i+1] +'">'
    newModal += '<a href="' + projects[i].href + '" target="_blank">'
    newModal += projects[i].title + '</a>'
    newModal += '<a href="'+ projects[i].github + '" target="_blank">'
    newModal += '<i class="fa fa-github"></i></a>'
    newModal += '</h2></div>'
    newModal += '<div class="modal-body">'
    newModal += '<img class="img-responsive" src="'+ projects[i].pic +'">'
    newModal += '<h3>Summary</h3>'
    newModal += '<p>' + projects[i].summary + '</p></div>'
    newModal += '<div class="modal-footer">'
    newModal += '<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'
    newModal += '</div></div></div></div>'

   $("#projectIms").append(newProj).append(newModal);
  }

  // changes all project images to height of biggest pic...
  function picEqual() {
    var maxHeight = 0;
    maxHeight = $("#projIm1").height();

    $(".show-im").height(maxHeight);
  }
  //...whenever the window is resized
  $(window).resize(function() {
    picEqual();
  });
  //...when the page is first loaded
  $(window).load(function(){
    picEqual();
  });
  //do something when a projIm is hovered
  $(".show-im").on("mouseenter", function(){
    $(".imInfo", this).show();
  }).on("mouseleave", function(){
    $(".imInfo", this).hide();
  });
});
