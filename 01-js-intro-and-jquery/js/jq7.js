$(document).ready(function(){
        $("#hiddenS").fadeIn("slow", function(){
	        $("#alias").focus();
    });
});

function redirect(){
	 window.location = 'http://bootcamp.aws.af.cm/welcome/'+$('#alias').val();
}

$(document).ready(function(){
	$("#button7").on("click", redirect);
});