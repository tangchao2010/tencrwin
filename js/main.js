var main = function(){
	var bannerResize = function(){
		$(".banner").height($(window).height());
		$(window).resize(function(){
			var scrollTop = $(document).scrollTop();
		   // if(scrollTop==0){
		   // 		$(".banner").height($(window).height());
		   // }
		   $(".banner").height($(window).height());
		});

	}
	return {
		init:function(){
			bannerResize();
		},
	}
}();


	jQuery(document).ready(function () {
			
			goTopEx();
			$("#goTopBtn").hide();
		 });

		function goTopEx() { 
				
				var obj = document.getElementById("goTopBtn"); 
				function getScrollTop() { 
				return document.documentElement.scrollTop + document.body.scrollTop; 
				} 
				function setScrollTop(value) { 
				if (document.documentElement.scrollTop) { 
				document.documentElement.scrollTop = value; 
				} else { 
				document.body.scrollTop = value; 
				} 
				} 
				window.onscroll = function() { 
				$("#goTopBtn").show();
				getScrollTop() > 800 ? obj.style.display = "block": obj.style.display = "none"; 
				} 
				obj.onclick = function() { 
				var goTop = setInterval(scrollMove, 10); 
				function scrollMove() { 
				setScrollTop(getScrollTop() / 1.1); 
				if (getScrollTop() < 1) clearInterval(goTop); 
				} 
				} 
			}			


