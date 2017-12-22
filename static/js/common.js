$(function(){

	//通用选项卡
	$(".tabs-nav-list").find("li").each(function(){
		var liIndex=$(this).index();
		var divCont=$(this).parents(".tabs-nav").siblings(".tabs-cont").find(".tabs-det");
		$(this).on("click",function(){
			$(this).addClass("cur").siblings("li").removeClass("cur");
			divCont.eq(liIndex).fadeIn(300).addClass("active").siblings(".tabs-det").fadeOut(0).removeClass("active");
		});
	});
	
	//通用模态框
	$(".modal").click(function(){
		var id = $(this).attr("data-modal");
		var modalTarget=$('#'+id+'Modal');
		modalTarget.fadeIn(400);
		$("body").append(" <div class='blacklayer' style='position:fixed;left:0;top:0;width:100%;height:100%;z-index:998;background:rgba(0,0,0,0.8);'></div>");
		modalTarget.find(".colse-modal").click(function(){
			modalTarget.fadeOut(300);
			$(".blacklayer").fadeOut(400);
		});
	});


});