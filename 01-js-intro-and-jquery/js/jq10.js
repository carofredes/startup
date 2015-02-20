$(document).ready(function(){
        $("#hiddenS").fadeIn("slow", function(){
            $("#alias").focus();
    });
});

function highlightName(div){
    var span = $("<span/>").text(div.html().replace("Welcome ","").replace("!",""));
    span.addClass("highlight");
    div.html(div.text().substring(0,8));
    div.append(span);
    div.append("!");
}

$(document).ready(function(){
    $("#button7").on("click",function(){
        $.getJSON('http://bootcamp.aws.af.cm/welcome/'+$('#alias').val(),function(result){
            if (result.error!=undefined)
               {$("div").html(result.error).css("color","red");} 
            else
                {$("div").html(result.response).css("color","black");}
        }).done(function () {
            highlightName($("div"));
        });
    });
});

