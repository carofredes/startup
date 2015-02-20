$(document).ready(function(){
        $("#hiddenS").fadeIn("slow", function(){
	        $("#alias").focus();
    });
});

$(document).ready(function(){
    $("#button7").on("click",function(){
        $.getJSON('http://bootcamp.aws.af.cm/welcome/'+$('#alias').val(),function(result){
            $("p").html(result.response);
        });
    });
});