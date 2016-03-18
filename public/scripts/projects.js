$(document).ready(function(){
  //Create Project Objects
  var projects = [
    {
      title: "Show Us a Pet",
      pic:"/images/petstiny.png" ,
      href:"https://showusapet.herokuapp.com"
    }, {
      title: "Rutgers Flyers",
      pic: "/images/rufly.png",
      href:"https://rufly2.herokuapp.com"
    }, {
      title: "Jackie Minieri Fashion",
      pic: "/images/jmfashion.png",
      href:"https://jackieminieri.herokuapp.com"
    }, {
      title: "Rock, Paper, Scissors",
      pic: "/images/rpstiny.png",
      href:"https://stephs-rps.herokuapp.com"
    }, {
      title: "Clicky Games",
      pic: "/images/clickytiny.png",
      href:"https://candsclicky.herokuapp.com"
    }, {
      title: "My First Portfolio",
      pic: "/images/shweb.png",
      href:"http://painter-mildred-27247.bitballoon.com/"
    }
  ]

  for(var i=0; i<projects.length; i++){
    var newProj = '<div class="col-xs-12 col-sm-6 col-md-4 show-im">'
    newProj += '<a href="' + projects[i].href + '"target="_blank">'
    newProj += '<img id="projIm' + [i+1] + '" class="img-responsive fitRow "'
    newProj += 'src="' + projects[i].pic + '"></a></div>';

    console.log(newProj);
    $(".projectIms").append(newProj);
  }

  // changes all project images to height of biggest pic
  $(window).resize(function() {
    debugger;
    var maxHeight = 0;
    maxHeight = $("#projIm1").height();

    $("div .show-im").height(maxHeight);
    // $(".fitRow").height(maxHeight);
  });

  $(".show-im").on("mouseenter", function(){
    console.log(this);
  });
});


