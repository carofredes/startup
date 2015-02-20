$(document).ready(function(){
          $.getJSON('https://api.spotify.com/v1/search',{q:'Rolling Stones', type:'album'}, function(result) {
              console.log(result);
             
});