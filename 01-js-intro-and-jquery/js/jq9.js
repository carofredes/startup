$(document).ready(function(){
        $("#hiddenS").fadeIn("slow", function(){
	        $("#alias").focus();
    });
});

$(document).ready(function(){
    $("#button7").on("click",function(){
        $.getJSON('http://bootcamp.aws.af.cm/welcome/'+$('#alias').val(),function(result){
        	if (result.error!=undefined)
            	$("p").html(result.error).css("color","red")
            else
            	$("p").html(result.response).css("color","black");
        });
    });
});

