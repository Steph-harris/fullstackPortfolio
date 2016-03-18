$(document).ready(function(){
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

    console.log(newProj);
    $(".projectIms").append(newProj);
  }
});

<!-- Small modal -->
// <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">Small modal</button>

// <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
//   <div class="modal-dialog modal-sm">
//     <div class="modal-content">
//       projects[i].title
//     </div>
//   </div>
// </div>
