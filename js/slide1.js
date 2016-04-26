;$(function(){
//	var $banner = $(".banner"),
//		$bannerList = $(".bannerList li"),
//		$buddle = $(".buddle"),
//		$prevBtn = $("#prevBtn"),
//		$nextBtn = $("#nextBtn"),
//		bannerListLen = $bannerList.length,
//		index = 0,//后动的图片的索引值
//		prevIndex = 0,//先动的图片的索引值
//		_timer = "",//定时器
//		autoTime = 2000,//默认的动画切换时间
//		animateTime = 330,//执行一次动画需要的时间
//		autoHeight = 100;
//	
//	$banner.height(autoHeight);
//	$banner.find(".bannerList").height(autoHeight);
//	$bannerList.height(autoHeight);
//	var html = $buddle.html();
//	for (var i = 0; i < bannerListLen;i++ ) {
//		$bannerList.eq(i).css("display","none");//将所有的图片都变得不可见
//		/*$buddle.html(function(index,html){
//			return html+"<li></li>"
//		})*/
////		$buddle.append("<li></li>");
//		html += "<li></li>";
//		$buddle.html(html);//创建了控制的小点
//	}
//	$bannerList.eq(0).css("display","block");//将第一张图片显示出来
//	$buddle.find("li").eq(0).addClass("active");//给第一个小点添加class表示的是第一张图片现在是响应的
//	
//	/*prevIndex = 0;
//	index = 1;*/
//	$nextBtn.on("click",function(){
//		/*prevIndex = index;
//		index++;
//		changePic(prevIndex,index);*/
//		//由于到了最后一张，点击下一张的时候，会发现没有图片可以使用了，所以得重新指定第0张为它的下一张
//		prevIndex = index;
//		index++;
//		if(index == 4){//因为上面的index的值在此时已经变为了4（执行了一次index++）
//			prevIndex = 3;
//			index = 0;
//		}
//		changePic(prevIndex,index);
//	})
//	
///*	prevIndex = 1;
//	index = 0;*/
//	
//	function changePrevPic(prevIndex,index){
//		$bannerList.eq(prevIndex).stop(true,true).animate({"left":"100%"},animateTime,function(){
//			$(this).css("display","none");
//		});
//		$bannerList.eq(index).css({"display":"block","left":"-100%"}).stop(true,true).animate({"left":"0"},animateTime);
//		$buddle.find("li").eq(index).addClass("active").siblings().removeClass("active");
//	}
//	
//	$prevBtn.on("click",function(){
//		prevIndex = index;
//		index--;
//		if(index == -1){
//			index = 3;
//			prevIndex = 0;
//		}
//		changePrevPic(prevIndex,index)
//	});
//	
//	function changePic(prevIndex,index){
//		$bannerList.eq(prevIndex).stop(true,true).animate({"left":"-100%"},animateTime,function(){
//			$(this).css("display","none");
//		})
//		$bannerList.eq(index).css({"display":"block","left":"100%"}).stop(true,true).animate({"left":"0"},animateTime);
//		$buddle.find("li").eq(index).addClass("active").siblings().removeClass("active");
//	}
//	autoPlay();
//	function autoPlay(){
//		_timer = setInterval(function(){
//			$nextBtn.click();
//		},autoTime);
//	}
//	
//	clearTimer($banner);
//	
//	function clearTimer(obj){
//		obj.hover(function(){
//			clearInterval(_timer);
//		},function(){
//			autoPlay();
//		})
//	}
	
	$("#banner1").fade(500,2000,1000);
	$("#banner2").slide(360,1000);
	
/*	var a = {
		x:***,
		y:***
	}
	
	a.x
	a.y*/
});
