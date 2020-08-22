/**
**  belatedPNG
**/
document.write("<!--[if IE 6]>");
document.write("<script type='text/javascript' src='/static//js/reg/belatedPNG.min.js'></script>");
document.write("<script type='text/javascript' src='/static/js/reg/common_game_in.js'></script>");
document.write("<![endif]--> ");

$(function () {
	$(".intbox input").focus(function(){
		  $(this).addClass("intOn");
	}).blur(function(){
		  $(this).removeClass("intOn");
	});

	$(".iconqa p").toggle(
	  function () {
		$(this).next('.text').slideDown("slow");
	  },
	  function () {
		$(this).next('.text').slideUp("slow");
	  }
	);

	$("#sedmail").click(function(){
		$("#floatBox").fadeIn("fast");
		return false;
	});
	$("#floatBox .close, #floatBox .closeX").click(function(){
		$("#floatBox").fadeOut("fast");
		return false;
	});

});
