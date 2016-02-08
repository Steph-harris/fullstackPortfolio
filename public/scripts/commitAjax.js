$(document).ready(function(){
  $(".list-group").on("click", "a", function(e){
    e.preventDefault(); 
    //Git call to collect commits for clicked repo name
    $.ajax({
      type:"GET",
      url:$(this).attr("href"),
      success: function(commits){
        $("tbody").empty();
        for (i=0; i<commits.length; i++) {
          $("tbody").append(buildTr(commits[i]));
        }
      },
      error: function(jqXHR, textStatus, errorThrown){
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      } 
    });
    //add links to github page through sha 
    function buildTr(commitInfo){
      var newA = $("<a>").append(commitInfo.sha.substr(0,9)).attr("href", commitInfo.html_url);
      var shaTd = $("<td>").append(newA);     
      var mesTd = $("<td>").append(commitInfo.commit.message);
      var autTd = $("<td>").append(commitInfo.commit.author.name);
      var dateTd = $("<td>").append(commitInfo.commit.author.date);

      return $("<tr>").append(shaTd)
        .append(autTd)
        .append(mesTd)
        .append(dateTd)
    }
  });  
});