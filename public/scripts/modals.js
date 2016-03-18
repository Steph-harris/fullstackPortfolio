$(document).ready(function(){
  for(var i=0; i<projects.length; i++){
    //build div with project image that toggles modal
    var newProj = '<div class="col-xs-12 col-sm-6 col-md-4 show-im">'
    newProj += '<a data-toggle="modal" data-target="#modal'+ [i+1] + '" target="_blank">'
    newProj += '<img id="projIm' + [i+1] + '" class="img-responsive fitRow "'
    newProj += 'src="' + projects[i].pic + '"></a></div>';

    //build modal with this objects' info
    var newModal = '<div class="modal fade" id="modal'+ [i+1] + '"'
    newModal += 'tabindex="-1" role="dialog"'
    newModal += 'aria-labelledby="mySmallModalLabel">'
    newModal += '<div class="modal-dialog" role="document">'
    newModal += '<div class="modal-content"><div class="modal-header">'
    newModal += '<button type="button" class="close" data-dismiss="modal"'
    newModal += 'aria-label="Close"><span aria-hidden="true">&times;</span></button>'
    newModal += '<h4 class="modal-title" id="modLabel' + [i+1] +'">'
    newModal += projects[i].title + '</h4></div>'
    newModal += '<div class="modal-body"></div>'
    newModal += '<div class="modal-footer">'
    newModal += '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
    newModal += '<button type="button" class="btn btn-primary">Save changes</button>'
    newModal += '</div></div></div></div>'

    console.log(newModal);
    console.log(newProj);
    $(".projectIms").append(newProj).append(newModal);
  }
});

<!-- Button trigger modal -->
<!-- Modal -->
// <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  // <div class="modal-dialog" role="document">
    // <div class="modal-content">
    //   <div class="modal-header">
        // <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      //   ">Modal title</h4>
      // </div>
      // <div class="modal-body">
      //   ...
      // </div>
      // <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
