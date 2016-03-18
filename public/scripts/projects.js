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
 //ORIGINAL
  // for(var i=0; i<projects.length; i++){
  //   //build div with project image
  //   var newProj = '<div class="col-xs-12 col-sm-6 col-md-4 show-im">'
  //   newProj += '<a href="' + projects[i].href + '"target="_blank">'
  //   newProj += '<img id="projIm' + [i+1] + '" class="img-responsive fitRow "'
  //   newProj += 'src="' + projects[i].pic + '"></a></div>';

  //   console.log(newProj);
  //   $(".projectIms").append(newProj);
  // }

  for(var i=0; i<projects.length; i++){
    //build div with project image that toggles modal
    var newProj = '<div class="col-xs-12 col-sm-6 col-md-4 show-im">'
    newProj += '<a data-toggle="modal" data-target=".modal'+ [i] + '" target="_blank">'
    newProj += '<img id="projIm' + [i+1] + '" class="img-responsive fitRow "'
    newProj += 'src="' + projects[i].pic + '"></a></div>';

    //build modal with this objects' info
    var newModal = '<div class="modal fade modal'+ [i] + '"'
    newModal += 'tabindex="-1" role="dialog"'
    newModal += 'aria-labelledby="mySmallModalLabel">'
    newModal += '<div class="modal-dialog modal-sm">'
    newModal += '<div class="modal-content">'
    newModal += projects[i].title
    newModal += '</div></div></div>'

    console.log(newModal);
    console.log(newProj);
    $(".projectIms").append(newProj).append(newModal);
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

  $(".show-im").on("mouseenter", function(){
      console.log(this);
  });
});
//
