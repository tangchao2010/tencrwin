
				$(function(){	
					//��ȡҪ��λԪ�ؾ�������������ľ���
					var $navH = $(".navgtion");
					var navH = $(".navgation").offset().top;
					//�������¼�
					$(window).scroll(function(){
						//��ȡ�������Ļ�������
						var scroH = $(this).scrollTop();
						//�������Ļ���������ڵ��ڶ�λԪ�ؾ�������������ľ��룬�͹̶�����֮�Ͳ��̶�
						if(scroH>=navH){
							
							$(".navgation").css({"position":"fixed","top":0,"left":"0","margin-left":"px"});
							$(".submenu").css({"position":"fixed","z-index":"999"});
							
						}else if(scroH<navH){
							$(".navgation").css({"position":"static","margin":"auto"});
							$(".submenu").css({"position":"absolute"});
						}
						
					})
				})
