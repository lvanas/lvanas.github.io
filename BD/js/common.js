$(document).ready(function(){
	W=document.documentElement.clientWidth;
	if(W > 900){
		$('#bd_css').attr('href','css/bd_pc.css');
	}else{
		$('#bd_css').attr('href','css/bd_mobile.css');
	};

	// 给左侧弹出导航栏内容下部空白部分的一个高
	HeiCloseT=$("#menu .list").outerHeight() - $("#menu .list dl").outerHeight();
	$("#close_t").css('height',HeiCloseT);

	// 给移动端 footer bj 加上一个宽度。
	WFootBj=$(window).width();
	FooterLeft=$(window).width()-640;

	if(FooterLeft < 0){
		FooterLeft = 0;
	}else {
		FooterLeft = -FooterLeft;
	}
	$(".footer .bj").css({"width":WFootBj,"margin-left":FooterLeft/2});

	$("#menubtn").click(function(){
		event.stopPropagation();
		$("#menu").animate({left:'0'},"slow");
	});

	$("#fork,#close_r,#close_t").click(function(){
		event.stopPropagation();
		$("#menu").animate({left:'-840px'},"slow");
	});

	$('#navbar ul li').mouseover(function (){
		$(this).addClass('on').siblings().removeClass('on');
	});

	$("#pullbtn").mouseover(function(){
	  $("#pull").animate({opacity:"1"}).css('display','block');
	});
	$("#pullbtn").mouseleave(function(){
	  $("#pull").animate({opacity:"0"}).css('display','none');
	});
	$('#pull p').mouseover(function (){
		$(this).addClass('on').siblings().removeClass('on');
	});

	$("#product_ctinfo").click(function(){

		$("#product_pic").css({"opacity":"0","display":"none"});
		$("#product_info").css({"opacity":"1","display":"block"});
		$(".productcon").addClass("on");
	});

	$("#product_fork").click(function(){
		event.stopPropagation();
		$("#product_pic").css({"opacity":"1","display":"block"});
		$("#product_info").css({"opacity":"0","display":"none"});
		$(".productcon").removeClass("on");
	});
});
