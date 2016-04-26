;$(function(){
	var $banner = $(".banner"),
		$bannerList = $(".bannerList li"),
		$buddle = $(".buddle"),
		$prevBtn = $("#prevBtn"),
		$nextBtn = $("#nextBtn"),
		bannerListLen = $bannerList.length,
		index = 0,
		prevIndex = 0,
		_timer = "",
		autoTime = 2000,
		animateTime = 1000;
		/*autoHeight = 100;
	
	$banner.height(autoHeight);
	$banner.find(".bannerList").height(autoHeight);
	$bannerList.height(autoHeight);*/
	for (var i = 0; i < bannerListLen;i++ ) {
		$bannerList.eq(i).css("z-index",bannerListLen - i);
		$buddle.html(function(index,html){
			return html+"<li></li>"
		})
	}
	$buddle.find("li").eq(0).addClass("active");
	
	$nextBtn.on("click",function(){
		prevIndex = index;
		index++;
		if(index == bannerListLen){
			index = 0;
			prevIndex = bannerListLen - 1;
		}
		changePic(prevIndex,index);
		
	})
	$prevBtn.on("click",function(){
		prevIndex = index;
		index--;
		if(index == -1){
			index = bannerListLen - 1;
			prevIndex = 0;
		}
		changePic(prevIndex,index);
		
	})
	
	function changePic(prevIndex,index){
		
		if(prevIndex == bannerListLen - 1 && index == 0){//下一个点到最后一个继续
			$bannerList.eq(prevIndex).animate({"left":"-100%"},animateTime);
			$bannerList.eq(index).css("left","100%").animate({"left":"0"},animateTime);
		}else if(prevIndex == 0 && index == bannerListLen - 1) {//第一个向前点一次
			console.log("1")
			$bannerList.eq(prevIndex).css({"left":"0","z-index":"5"}).animate({"left":"100%"},animateTime);
			$bannerList.eq(index).css({"left":"-100%","z-index":"5"}).animate({"left":"0"},animateTime);
		}else if(index > prevIndex){//下一个
			$bannerList.eq(prevIndex).animate({"left":"-100%"},animateTime);
			$bannerList.eq(index).css("left","100%").animate({"left":"0"},animateTime);
		}else if(index < prevIndex){//上一个
			$bannerList.eq(prevIndex).animate({"left":"100%","z-index":"5"},animateTime);
			$bannerList.eq(index).css({"left":"-100%","z-index":"5"}).animate({"left":"0"},animateTime);
		}
		$buddle.find("li").eq(index).addClass("active").siblings().removeClass("active");
	}
	
	
});
