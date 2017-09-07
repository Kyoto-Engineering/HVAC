
// 轮播
var slider = {
  init: function () {
    var $slider = $(".flexslider");
    var $items = $slider.find(".slide-item");

    $slider.each(function (index, element) {
      //var $items = $(this).find(".slide-item");
      //      var _namespace = $(this).data("namespace");
		var _animation = $(this).data("animation") == "fade" ? "fade" : "slide";
		var _speed = $(this).data("speed") || 5000;
		//      var _controlsContainer = $(this).data("controls-container");
		var _controlNav = $(this).data("control") == false ? false : true;
		var _directionNav = $(this).data("direction") == true ? true : false;
		var _autoPlay = ($(this).data("autoplay") == true) ? true : false;
		var _loop = ($(this).data("loop") == true) ? true : false;

		var slider = $(this).flexslider({
			//  namespace: _namespace,
			selector: ".slides > li",
			animation: _animation,
			slideshow: true,
			slideshowSpeed: 5000,
			animationLoop: true,
			smoothHeight: true,
			animationSpeed: 1000,
			easing: "easeInOutExpo",
			pauseOnAction: false,
			pauseOnHover: false,
			touch: true,
			useCSS: false,
			//        controlsContainer: _controlsContainer,
			controlNav: _controlNav,
			directionNav: true,
			prevText: "",
			nextText: "",
			itemWidth: ".flexslider",

			before: function (slider) {
			  var id = slider.animatingTo;
			  if ($items.eq(id).data('img') != undefined && !$items.eq(id).children().is('img'))
			    loadImg(id);
			}
		});
    })
    $(".flex-control-nav a").text("");
    if ($items.length <= 1) {
        $(".flex-control-nav").remove();
    }
  }
}



$(document).ready(function(){
	
	// 轮播js
	slider.init();
	$(window).resize(function(){
		var win = { w:$(window).width(),h:$(window).height() }
		var screen_width = $(window).width()+scrollBarWidth();
		// menu
		$(".asider_bottom").css({ "width":Math.floor($("#menu_side").width()) });
		// index
		$(".wap_zixun li:not(:first-child)").css({
			"width":($(".wap_zixun").width()-10)/2
		});
		$(".pc_show").css({
			"height":Math.floor($(".i_show ul").width()*0.553)
		});
		$(".wap_show li:not(:first-child,:last-child)").each(function(){
			$(this).css({ "width":Math.floor(($(this).parent().width()-10)/2) });
		});
		//banner高度
//		if(win.w>1200){
//			$("#banner").css({ "height": win.h });
//			$("#banner").parent("section").css({ "height": win.h });
//		}else{
//			var b_h = (0.85*win.w)/1920*1014
//			$("#banner").css({ "height": b_h });
//			$("#banner").parent("section").css({ "height": b_h });
//		}


	}).resize();
});

