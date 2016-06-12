var home = "<h1 class='homeContent'>Welcome to Chicks 'N Salsa!</h1>";
var menu = "<h1 class='menuContent'>What's On The Menu</h1> <p class='menuContent'>Good food coming your way</p>";
var contact = "<h2 class='contactContent'>Chicks 'N Salsa</h2> <p class='contactContent'>1123 S 23rd St.<br> Fort Smith, AR 72916</p>";

$(document).ready(function(){
	$(".container").append(home);	
})


$("#home").click(function(){
	$(".container").append(home);
		$("#home").addClass("active");
		$("#menu").removeClass("active");
		$("#contact").removeClass("active");
		$(".menuContent").remove();
		$(".contactContent").remove();
});

	
	$("#menu").click(function(){
		$(".container").append(menu);
			$("#menu").addClass("active");
			$("#home").removeClass("active");
			$("#contact").removeClass("active");
			$(".homeContent").remove();
			$(".contactContent").remove();
	});

$("#contact").click(function(){
		$(".container").append(contact);
			$("#contact").addClass("active");
			$("#home").removeClass("active");
			$("#menu").removeClass("active");
			$(".homeContent").remove();
			$(".menuContent").remove();
	});

	



