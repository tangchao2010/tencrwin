$(function(){

	//从左侧显示遮罩效果 开始
	$(".con-four1").hover(function() {
		$(this).find(".txt-four1").stop().animate({"left": 0});
	}, function() {
		$(this).find(".txt-four1").stop().animate({"left":-185});
	})
	
	$(".con-four").hover(function() {
		$(this).find(".txt-four").stop().animate({"left": 0});
	}, function() {
		$(this).find(".txt-four").stop().animate({"left":-385});
	})
	
});

