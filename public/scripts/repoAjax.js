$(document).ready(function(){
  $.ajax({
    type:"GET",
    url:"https://api.github.com/users/Steph-harris/repos?sort=pushed",
    success: function (userInfo) {
      // debugger;
      for(var i=0; i<userInfo.length; i++){
        var repoNms = repoLink(userInfo[i]);
        // var newH2 = $("<h2>").append(repoNms);
        $(".list-group").append(repoNms);
      // .append(repoNms)
      }
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    }  
  });

  function repoLink (repoData) {
    // create unique url for each repo
    var commitUrl = "https://api.github.com/repos/Steph-harris/"
    commitUrl += repoData.name + "/commits";
    
    // create a link to attach to each repo
    var newLink = $("<a>")
      .attr("href", commitUrl)
      .addClass("list-group-item")
      .append(repoData.name)

    return newLink;
  }   
});