;(function($){
	$.fn.extend({
		"fade":function(autoHeight,autoTime,animateTime){
			var $bannerList = $(this).find(".bannerList li"),
				$buddle = $(this).find(".buddle"),
				$prevBtn = $(this).find("#prevBtn"),
				$nextBtn = $(this).find("#nextBtn"),
				bannerListLen = $bannerList.length,
				index = 0,
				_timer = "",
				autoTime = autoTime,
				animateTime = animateTime,
				autoHeight = autoHeight,
				$bannerW = $(this).width();
			
			if($bannerW < 400){
				$prevBtn.css({"left":"10px"});
				$nextBtn.css({"right":"10px"});
			}
			
			$(this).height(autoHeight);
			$(this).find(".bannerList").height(autoHeight);
			$bannerList.height(autoHeight);
			
			for (var i = 0; i < bannerListLen;i++ ) {
				$bannerList.eq(i).css("z-index",bannerListLen - i);
				$buddle.html(function(index,html){
					return html+"<li></li>"
				});
			}
			
			$buddle.find("li").eq(0).addClass("active");
			
			$nextBtn.on("click",function(){
				index++;
				if(index == bannerListLen ){
					index = 0;
				}
				changePic(index);
			});
			
			$prevBtn.on("click",function(){
				index--;
				if(index == -1 ){
					index = bannerListLen - 1;
				}
				changePic(index);
			});
			
			_timer = setInterval(function(){
				$nextBtn.click();
			},autoTime);
			
			function changePic(index){
				$bannerList.eq(index).stop(true,true).fadeIn(animateTime).siblings().fadeOut(animateTime);
				$buddle.find("li").eq(index).addClass("active").siblings().removeClass("active");
			}
			
			$buddle.find("li").on("click",function(){
				index = $(this).index();//获取点击到的是哪一个
				$(this).addClass("active").siblings().removeClass("active");
				changePic(index);
			});
			
			clearTimer($(this));
			
			function clearTimer($ele){
				$ele.hover(function(){
					clearInterval(_timer);
				},function(){
					_timer = setInterval(function(){
						$nextBtn.click();
					},autoTime);
				});
			}
		}
	})
})(jQuery);
