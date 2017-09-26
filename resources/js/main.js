
$(window).on("load",function(){
	$(".nav li").removeClass("active");
	$(".nav li:first-child").addClass("active");
	to_load = "Homepage.html";
	$( "#PageContainer" ).empty();
	$( "#PageContainer" ).load( to_load,function(){
		$("#PageContainer").height(100);
	});
});


$(".nav li").on("click", function(e) {
	$(".nav li").removeClass("active");
	$(this).addClass("active");
	to_load = $(this).attr("name") + ".html";
	$( "#PageContainer" ).empty();
	$( "#PageContainer" ).load( to_load,function(){
		$("#PageContainer").height(100);
	});
	return false;
});