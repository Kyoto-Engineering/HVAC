//首页产品列表切换效果
$(document).ready(function() {
	$('.index-box1-nav-right a').mouseover(function() {
		//鼠标悬停在导航时的下划线动画
		$('.index-box1-nav-right a').removeClass('active'); //先删除所有的class下划线
		$(this).addClass('active'); //添加选中的class下划线
		var CpNav = $(this).attr('data-nav'); //获取data-nav的值赋给CpNav变量
		//根据获取的cpnav值更换列表模块
		$('#klb>div').css('display', 'none'); //先隐藏所有列表
		$('#klb>div:nth-child(' + CpNav + ')').css('display', 'block'); //然后显示获取到CpNav值得列表
	});

});

//搜索框
$(document).ready(function() {
//	手机端搜索
	$(".module3-ssbtn").click(function() {
		$(".navbar-nav-wap-ss-box").slideToggle("slow");
	});

//	pc端搜索
		$(document).click(function(e) {
			e = window.event || e; // 兼容IE7
			obj = $(e.srcElement || e.target);
			if($(obj).is(".pc-ss-button, .pc-ss-button>i")) {
				$(".ss").slideToggle("slow");
			} else {
				if($(obj).is(".ss,.ss>p,.ss>p>input") == false) {
					$(".ss").slideUp();
				}
			}
		});

});

//手机端banner图api
var mySwiper = new Swiper('.swiper-container', {
	loop: true,
	autoplay: 3000,
	speed: 600,
	pagination : '.swiper-pagination',
	paginationClickable:true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
});

//产品banner图api
var mySwiper = new Swiper('.swiper-container-cp', {
	loop: true,
	autoplay: 3000,
	speed: 600,
	pagination : '.swiper-pagination',
	paginationClickable:true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	grabCursor : true,
});

//内页wap端一级导航展开收缩
$(".wap-nydh-box-bt-btn").click(function() {
	$(".wap-nydh-box-list").slideToggle("slow");
});

//wap导航汉堡按钮动画切换
$(document).ready(function() {
	$(".hamburger").click(function() {
		//汉堡按钮折叠和交叉状态
		$(this).toggleClass("is-active");
		//判断汉堡按钮的状态来收缩菜单栏
		if($(this).hasClass('is-active')) {
			$('.wap-nav-list').slideDown();
		} else {
			$('.wap-nav-list').slideUp();
		}
	});
});

//内页三级菜单
$('.nr-sj-level1>a').click(function() {
		$(this).toggleClass('active') 		//给当前元素添加“current”样式
		.next().slideToggle("slow") 		//下一个元素显示
		.parent().siblings().children('a').removeClass('active')
											//父元素的同辈元素的子元素<a>移除“current”样式
		.next().slideUp(); 					//它们的下一个元素隐藏
		
		//$(this).toggleClass('active');
	return false;
});

//wap内页三级菜单
$('.wap-nr-sj-level1>a').click(function() {
		$(this).toggleClass('active') 		//给当前元素添加“current”样式
		.next().slideToggle("slow") 		//下一个元素显示
		.parent().siblings().children('a').removeClass('active')
											//父元素的同辈元素的子元素<a>移除“current”样式
		.next().slideUp(); 					//它们的下一个元素隐藏
		
		//$(this).toggleClass('active');
	return false;
});

//服务下载点击按钮弹出密码框
$('.download-btn-play').click(function(){
	$(this).css('display','none');
	$(this).siblings('.download-box').css('display','block');
});

//内页分享按钮JS
window._bd_share_config = {
	"common": {
		"bdSnsKey": {},
		"bdText": "",
		"bdMini": "2",
		"bdMiniList": false,
		"bdPic": "",
		"bdStyle": "1",
		"bdSize": "16"
	},
	"share": {},
	"selectShare": {
		"bdContainerClass": null,
		"bdSelectMiniList": ["qzone", "tsina", "tqq", "weixin"]
	}
};
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = '../../bdimg.share.baidu.com/static/api/js/share6e53.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];