$(document).ready(function(){
  $(".list-group").on("click", "a", function(e){
    e.preventDefault(); 
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

    function buildTr(commitInfo){
      var shaTd = $("<a>").addClass("td").append(commitInfo.sha).attr("href", commitInfo.parents[0].html_url);     
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