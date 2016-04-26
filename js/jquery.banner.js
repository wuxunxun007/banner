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
				autoTime = autoTime,//动画切换时间
				animateTime = animateTime,//每一次动画的执行时间
				autoHeight = autoHeight,//banner的高度
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
		},
		"slide":function(autoHeight,autoTime){
			var $banner = $(this),//表示的是哪一个banner
				$bannerList = $(this).find(".bannerList li"),//找到当前banner下的多有图片所在的li
				$buddle = $(this).find(".buddle"),//同上
				$prevBtn = $(this).find("#prevBtn"),//同上
				$nextBtn = $(this).find("#nextBtn"),//同上
				bannerListLen = $bannerList.length,//获取的是当前有几个li
				index = 0,//后动的图片的索引值
				prevIndex = 0,//先动的图片的索引值
				_timer = "",//定时器
				autoTime = autoTime,//默认的动画切换时间
				animateTime = 330,//执行一次动画需要的时间,不建议使用变量赋值，否则后果自负
				autoHeight = autoHeight;
			
			$banner.height(autoHeight);
			$banner.find(".bannerList").height(autoHeight);
			$bannerList.height(autoHeight);
			var html = $buddle.html();
			for (var i = 0; i < bannerListLen;i++ ) {
				$bannerList.eq(i).css("display","none");//将所有的图片都变得不可见
				/*$buddle.html(function(index,html){
					return html+"<li></li>"
				})*/
		//		$buddle.append("<li></li>");
				html += "<li></li>";
				$buddle.html(html);//创建了控制的小点
			}
			$bannerList.eq(0).css("display","block");//将第一张图片显示出来
			$buddle.find("li").eq(0).addClass("active");//给第一个小点添加class表示的是第一张图片现在是响应的
			
			/*prevIndex = 0;
			index = 1;*/
			$nextBtn.on("click",function(){
				/*prevIndex = index;
				index++;
				changePic(prevIndex,index);*/
				//由于到了最后一张，点击下一张的时候，会发现没有图片可以使用了，所以得重新指定第0张为它的下一张
				prevIndex = index;
				index++;
				if(index == bannerListLen){//因为上面的index的值在此时已经变为了4（执行了一次index++）
					prevIndex = bannerListLen -1;
					index = 0;
				}
				changePic(prevIndex,index);
			})
			
		/*	prevIndex = 1;
			index = 0;*/
			
			function changePrevPic(prevIndex,index){
				$bannerList.eq(prevIndex).stop(true,true).animate({"left":"100%"},animateTime,function(){
					$(this).css("display","none");
				});
				$bannerList.eq(index).css({"display":"block","left":"-100%"}).stop(true,true).animate({"left":"0"},animateTime);
				$buddle.find("li").eq(index).addClass("active").siblings().removeClass("active");
			}
			
			$prevBtn.on("click",function(){
				prevIndex = index;
				index--;
				if(index == -1){
					index = bannerListLen - 1;
					prevIndex = 0;
				}
				changePrevPic(prevIndex,index)
			});
			
			function changePic(prevIndex,index){
				$bannerList.eq(prevIndex).stop(true,true).animate({"left":"-100%"},animateTime,function(){
					$(this).css("display","none");
				})
				$bannerList.eq(index).css({"display":"block","left":"100%"}).stop(true,true).animate({"left":"0"},animateTime);
				$buddle.find("li").eq(index).addClass("active").siblings().removeClass("active");
			}
			autoPlay();
			function autoPlay(){
				_timer = setInterval(function(){
					$nextBtn.click();
				},autoTime);
			}
			
			clearTimer($banner);
			
			function clearTimer(obj){
				obj.hover(function(){
					clearInterval(_timer);
				},function(){
					autoPlay();
				})
			}
		}
	})
})(jQuery);
