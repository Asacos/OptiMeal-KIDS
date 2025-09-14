$(document).ready(function(){
	showDesc();
});

function showDesc(){
	$("#desc-info").show();
	$("#props-info").hide();
	$("#desc").css({
		"color": "#D07CC6",
		"text-decoration": "none",
	});
	$("#props").css({
		"color": "#FF5F4E",
		"text-decoration": "underline",
	});
}

function showProps(){
	$("#desc-info").hide();
	$("#props-info").show();
	$("#props").css({
		"color": "#D07CC6",
		"text-decoration": "none",
	});
	$("#desc").css({
		"color": "#FF5F4E",
		"text-decoration": "underline",
	});
}