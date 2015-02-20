$(document).ready(function(){
          $.getJSON('https://api.spotify.com/v1/search',{q:'Rolling Stones', type:'album'}, function(result) {
              console.log(result);
               $.each(result.albums.items,function(i,e){
                  var article =$("<article/>");
                  var aName =$("<h2>"+ e.name +"</h2>");
                  var data = $("<div/>");
                  
                  var link = $("<span/>");
                  link.html("<a href='"+ e.href+"'>Go to Spotify</a>");
                  data.append(link.clone());
                  link.html(e.type);
                  data.append(link.clone());
                  var imag = $("<img/>").attr("width", e.images[1].width).attr("src", e.images[1].url).attr("height", e.images[1].height);
                  data.append(imag);
                  article.append(aName,[data]);
                  $("section").append(article.clone());
              });
        });
});