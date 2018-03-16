
				$(function(){	
					//获取要定位元素距离浏览器顶部的距离
					var $navH = $(".navgtion");
					var navH = $(".navgation").offset().top;
					//滚动条事件
					$(window).scroll(function(){
						//获取滚动条的滑动距离
						var scroH = $(this).scrollTop();
						//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
						if(scroH>=navH){
							
							$(".navgation").css({"position":"fixed","top":0,"left":"0","margin-left":"px"});
							$(".submenu").css({"position":"fixed","z-index":"999"});
							
						}else if(scroH<navH){
							$(".navgation").css({"position":"static","margin":"auto"});
							$(".submenu").css({"position":"absolute"});
						}
						
					})
				})
