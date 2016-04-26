;$(function(){
//	var $banner = $(".banner"),
//		$bannerList = $(".bannerList li"),
//		$buddle = $(".buddle"),
//		$prevBtn = $("#prevBtn"),
//		$nextBtn = $("#nextBtn"),
//		bannerListLen = $bannerList.length,
//		index = 0,
//		_timer = "",
//		autoTime = 2000,
//		animateTime = 1000,
//		autoHeight = 100;
//	
//	$banner.height(autoHeight);
//	$banner.find(".bannerList").height(autoHeight);
//	$bannerList.height(autoHeight);
//	for (var i = 0; i < bannerListLen;i++ ) {
//		$bannerList.eq(i).css("z-index",bannerListLen - i);
//		$buddle.html(function(index,html){
//			return html+"<li></li>"
//		})
//	}
//	$buddle.find("li").eq(0).addClass("active");
////	index  = 1;
//	
//	$nextBtn.on("click",function(){
//		index++;
//		if(index == bannerListLen ){
//			index = 0;
//		}
//		changePic(index);
//	});
//	$prevBtn.on("click",function(){
//		index--;
//		if(index == -1 ){
//			index = bannerListLen - 1;
//		}
//		changePic(index);
//	});
//	
//	_timer = setInterval(function(){
////		clearInterval(_timer);
//		$nextBtn.click();
//	},autoTime);
//	
//	function changePic(index){
//		$bannerList.eq(index).stop(true,true).fadeIn(animateTime).siblings().fadeOut(animateTime);
//		$buddle.find("li").eq(index).addClass("active").siblings().removeClass("active");
//	}
//	
//	$buddle.find("li").on("click",function(){
//		index = $(this).index();//获取点击到的是哪一个
//		$(this).addClass("active").siblings().removeClass("active");
//		changePic(index);
//	})
//	
////	clearTimer($prevBtn);
////	clearTimer($nextBtn);
////	clearTimer($bannerList);
////	clearTimer($buddle.find("li"));
//	clearTimer($banner);
//	
//	
//	function clearTimer($ele){
//		$ele.hover(function(){
//			clearInterval(_timer);
//		},function(){
//			_timer = setInterval(function(){
//				$nextBtn.click();
//			},autoTime);
//		})
//	}

	$("#banner1").fade(360,2000,200);
	$("#banner2").fade(160,1000,500);
	
});
