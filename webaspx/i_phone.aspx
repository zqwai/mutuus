﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="DB.Web.index" %>

<!doctype html>
<html lang="zh-CN">
<head runat="server">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <link rel="shortcut icon" href="http://www.imutuus.com/images/mutuus.png">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="email=no"/>

    <title>mutuus - being imaginative, being different</title>
    <meta name="keywords" content="mutuus mutuus早教 mutuus托班 mutuus英式双语托班 mutuus开放式儿童成长中心">
    <meta name="description" content="为了我们自己的孩子，为了实践我们期望中的教学体验，我们创办了mutuus，希望我们的孩子们能以自己的内因驱动进行自主的学习、探索、思考，成为能够适应未来快速变化的人。">

    <link href="css/i_phone.css" rel="stylesheet">

    <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
		<script src="http://www.imutuus.com/js/swiper/js/swiper.min.js"></script>
		<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
</head>
<body>

<form id="form1" runat="server" class="swiper-container page__phone">

  <div id="audiocontainer"></div>
    <div class="swiper-wrapper">

  		<div class="page0 swiper-slide" data-hash="p0">
  			<div class="bg"></div>
  			<div class="inner">
  					<div class="logo">
  						<svg version="1.1" id="logo" viewBox="0 0 200 200">

  						<g id="logo-pic">
  						    <circle class="st0" cx="89.5" cy="106.8" r="2.3"></circle>
  						    <path class="st0" d="M107.9,114.6c-0.4,0-0.7,0.2-0.8,0.6l0,0c0,0,0,0,0,0c-1.2,2.5-3.8,4.3-6.8,4.3c-2,0-3.9-0.8-5.2-2.1l0,0
  						        c0,0-0.2-0.3-0.7-0.3c-0.5,0-0.9,0.4-0.9,0.9c0,0.3,0.3,0.7,0.3,0.7c1.7,1.6,4,2.7,6.5,2.7c3.8,0,7-2.2,8.5-5.4l0,0
  						        c0.1-0.1,0.1-0.3,0.1-0.4C108.8,115.1,108.4,114.6,107.9,114.6z"></path>
  						    <path class="st0" d="M100,0.1c-34.2,0-53.7,22.3-61.4,35.3c0,0-2.6,4.2-4.3,9.9c-1.5,4.7-2.2,10.4-2.2,14.4
  						        c0,18.3,10.1,34.2,25,42.3c0.4,6,1.5,9.4,4.5,15c0,0.1,0.1,0.2,0.2,0.3c0,0,0,0,0,0l0,0c0.3,0.5,0.9,0.8,1.5,0.8
  						        c1,0,1.8-0.8,1.8-1.8c0-0.4-0.1-0.8-0.3-1l0,0c-2.8-5.7-3.5-8.3-3.9-15.2c-10-4.3-16.3-11-20-17.2c-2.7-4.6-4.7-8.1-5.8-12.2
  						        c-0.9-3.3-1.8-6.9-1.8-11.4c0-5.5,0.5-10.1,1.9-14.8c1.5-5.2,3.6-8.7,3.7-8.9c0,0,0-0.1,0-0.1c3.7,0.4,8.5,2.3,10.5,7
  						        C55.7,57.3,66,69.2,73.7,75.2c7.9,6.1,14.8,10.3,22.7,13.2c0,0.9,0,2.9,1.9,5.6c2.7,3.4,4.3,11.6,0.1,17.1
  						        c5.6-2.5,12.1-9.4,12.5-19.1c2.3,1.7,8.5,6.9,8.5,16.6c0.2,10.2-8,20.4-20.4,20.4c-12.3,0-20.4-10.1-20.4-20.4
  						        c-3.9,0.5-9.3,3.8-9.3,10.7c0,3.7,1.8,6.4,3.8,8.2c-5.4,4.3-11.4,3.6-16,0.4c2.3,1.6,8.2,5.9,15.4,8.8c6.8,2.8,15.6,5.5,29.3,5.5
  						        c30.4,0,69-26.1,69-71C171,30,137.5,0.1,100,0.1z M104.6,64.4c0,0.9-0.7,1.5-1.5,1.5c-0.7,0-1.3-0.5-1.5-1.1c0,0-0.6-1.8-2.4-1.8
  						        c-1.2,0-1.9,0.8-1.9,0.8c-0.3,0.3-0.7,0.4-1.1,0.4c-0.9,0-1.5-0.7-1.5-1.5c0-0.4,0.2-0.8,0.4-1.1c0,0,0,0,0,0
  						        c1.2-1.2,2.4-1.7,4-1.7c2.6,0,4.6,1.7,5.4,3.9C104.6,64.1,104.6,64.2,104.6,64.4z"></path>
  						</g>
  						<g id="logo-text-en">
  						    <path class="st1" d="M44,168.8c-2.6-2.8-5.8-4.2-9.5-4.2c-4.4,0-7.9,1.7-10.5,5c-2.7-3.4-6.1-5-10.5-5c-3.7,0-6.9,1.4-9.5,4.2
  						        c-2.6,2.8-3.9,6.1-3.9,9.9c0,6.6,0,13.1,0,19.7c0,0.4,1.3,0.8,2.9,0.8c1.6,0,2.9-0.3,2.9-0.8c0-6.6,0-13.1,0-19.7
  						        c0-2.2,0.7-4.1,2.2-5.7c1.5-1.6,3.3-2.5,5.4-2.5c2.4,0,4.2,0.8,5.5,2.3c1.4,1.6,2.1,3.5,2.1,5.9c0,6.6,0,13.1,0,19.7
  						        c0,0.4,1.3,0.8,2.9,0.8c1.6,0,2.9-0.3,2.9-0.8c0-6.6,0-13.1,0-19.7c0-2.4,0.7-4.3,2.1-5.9c1.4-1.5,3.2-2.3,5.6-2.3
  						        c2.1,0,3.9,0.8,5.4,2.5c1.5,1.6,2.2,3.5,2.2,5.7c0,6.6,0,13.1,0,19.7c0,0.4,1.3,0.8,2.9,0.8c1.6,0,2.9-0.3,2.9-0.8
  						        c0-6.6,0-13.1,0-19.7C47.9,174.9,46.6,171.6,44,168.8z"></path>
  						    <path class="st1" d="M104.3,193.7c-2.5-0.2-4.7-0.5-6.8-2c-1.9-1.5-3.1-3.8-3.1-6.3l0-14.6h8.7c0.4,0,0.8-1.3,0.8-2.9
  						        c0-1.6-0.3-2.9-0.8-2.9h-8.6v-10.1c0-0.4-1.3-0.8-2.9-0.8c-1.6,0-2.9,0.3-2.9,0.8c0,10.2,0,20.4,0,30.6c0,9.8,6.5,14.1,15.1,14.1
  						        c0,0,0,0,0,0c0.4,0,0.9-1.2,1-2.8C104.9,195,104.7,193.7,104.3,193.7z"></path>
  						    <path class="st1" d="M196,182.1c-2.1-1.3-4.8-2.2-7.1-3.2c-2-0.9-4-2-4-4.4c0-1.1,0.5-2.1,1.4-2.9c0.9-0.8,1.7-1.4,2.9-1.4l9.8,0
  						        c0.4,0,0.8-1.2,0.8-2.7c0-1.5-0.3-2.8-0.8-2.8l-10,0c-0.5,0-1.1,0.1-1.6,0.2c-2,0.4-3.8,1.3-5.3,2.6c-4.3,3.9-4.3,11.5,0.8,14.9
  						        c0.6,0.4,1.3,0.6,1.9,0.9c2.8,1.3,9.2,3,9.2,6.7c0,2.8-2.8,4.4-5.4,4.3l-9.2,0c-0.4,0-0.8,1.2-0.8,2.8c0,1.5,0.3,2.8,0.8,2.8h8.7
  						        c3.6,0,6.3-0.6,8.9-3C201.3,193.1,201.1,185.5,196,182.1z"></path>
  						    <path class="st1" d="M80.9,164.6c-1.6,0-2.9,0.3-2.9,0.8c0,6.6,0,13.2,0,19.8c0,2.6-0.9,4.8-2.8,6.6c-1.8,1.8-4,2.7-6.6,2.7
  						        c-2.6,0-4.8-0.9-6.6-2.7c-1.8-1.8-2.7-4-2.7-6.6c0-6.6,0-13.2,0-19.8c0-0.4-1.3-0.8-2.9-0.8c-1.6,0-2.9,0.3-2.9,0.8
  						        c0,6.6,0,13.2,0,19.8c0,4,1.5,7.5,4.6,10.6c3,3,6.6,4.6,10.6,4.6c4,0,7.5-1.5,10.6-4.6c3.1-3.1,4.6-6.6,4.6-10.6
  						        c0-6.6,0-13.2,0-19.8C83.8,164.9,82.5,164.6,80.9,164.6z"></path>
  						    <path class="st1" d="M135.7,164.8c-1.6,0-2.9,0.3-2.9,0.8v4.2c0,0,0,0.1,0,0.1c0,6.7,0,8.8,0,15.5c0,2.6-0.9,4.8-2.8,6.6
  						        c-1.8,1.8-4,2.7-6.6,2.7c-2.6,0-4.8-0.9-6.6-2.7c-1.8-1.8-2.7-4-2.7-6.6c0-6.6,0-13.2,0-19.8c0-0.4-1.3-0.8-2.9-0.8
  						        c-1.6,0-2.9,0.3-2.9,0.8v4.3c0,0,0,0,0,0c0,6.7,0,8.8,0,15.5c0,4,1.5,7.5,4.6,10.6c3,3,6.6,4.6,10.6,4.6c4,0,7.5-1.5,10.6-4.6
  						        c3.1-3.1,4.6-6.6,4.6-10.6c0-6.6,0-13.2,0-19.8C138.6,165.1,137.3,164.8,135.7,164.8z"></path>
  						    <path class="st1" d="M171.5,164.8c-1.6,0-2.9,0.3-2.9,0.8v4.2c0,0,0,0.1,0,0.1c0,6.7,0,8.8,0,15.5c0,2.6-0.9,4.8-2.8,6.6
  						        c-1.8,1.8-4,2.7-6.6,2.7c-2.6,0-4.8-0.9-6.6-2.7c-1.8-1.8-2.7-4-2.7-6.6c0-6.6,0-13.2,0-19.8c0-0.4-1.3-0.8-2.9-0.8
  						        c-1.6,0-2.9,0.3-2.9,0.8v4.3c0,0,0,0,0,0c0,6.7,0,8.8,0,15.5c0,4,1.5,7.5,4.6,10.6c3,3,6.6,4.6,10.6,4.6c4,0,7.5-1.5,10.6-4.6
  						        c3.1-3.1,4.6-6.6,4.6-10.6c0-6.6,0-13.2,0-19.8C174.5,165.1,173.1,164.8,171.5,164.8z"></path>
  						</g>
  						</svg>
  					</div>
  					<div class="text en">student-centred learning centre</div>
  					<div class="text cn">妙拓思开放式儿童成长中心</div>
  			</div>
  			<div class="swiper-button-prev arrow-up swiper-button-white"></div>
  		</div>

  		<div class="page1 swiper-slide" data-hash="p1">
  			<div class="bg"></div>
  			<ul class="inner">
  				<li>妙拓思英式双语托班</li>
  				<li>我们致力于</li>
  				<li>让孩子们拥有更宽广的视野</li>
  				<li>更活跃的思维</li>
  				<li>更大气的格局</li>
  				<li>成为能适应未来快速变化的</li>
  				<li>终身学习者</li>
  			</ul>
  			<div class="swiper-button-prev arrow-up swiper-button-white"></div>
  		</div>

  		<div class="page2 swiper-slide" data-hash="p2">
  			<div class="bg"></div>
  			<ul class="inner">
  				<li>CDTS</li>
  				<li>儿童成长追踪系统</li>
  				<li>以英国EYFS为基础架构</li>
  				<li>我们将孩子的成长</li>
  				<li>以数据化的方式进行描述</li>
  				<li>通过CDTS</li>
  				<li>家长能知道孩子的天赋分布</li>
  				<li>能让孩子以自己喜爱的成长节奏</li>
  				<li>快速成长</li>
  			</ul>
  			<div class="swiper-button-prev arrow-up swiper-button-white"></div>
  		</div>

  		<div class="page3 swiper-slide" data-hash="p3">
  			<div class="bg"></div>
  			<ul class="inner">
  				<li>游戏化的探索式课程</li>
  				<li>孩子们的动手能力</li>
  				<li>语言能力团队协作能力</li>
  				<li>能够在我们的引导方式下</li>
  				<li>得到极大开发</li>
  				<li>孩子们的真正潜能</li>
  				<li>绝对能令家长们大吃一惊</li>
  			</ul>
  			<div class="swiper-button-prev arrow-up swiper-button-white"></div>
  		</div>

  		<div class="page4 swiper-slide" data-hash="p4">
  			<div class="bg"></div>
  			<ul class="inner">
  				<li>妙拓思开放式儿童成长中心</li>
  				<li>期待您的来访</li>
  					<li>杭州未来科技城赛银国际8号楼2层</li>
  					<li>0571-88681657</li>
  					<li><a href="form.aspx">预约参观</a></li>
  				</ul>

  		</div>

  	</div>

  	<div class="swiper-pagination"></div>



</form>
</body>


<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
var wxAppid = 'wxf1b528cc436d1f15';
var wxTitle = 'mutuus - being imaginative, being different';
var wxDesc = '为了我们自己的孩子，为了实践我们期望中的教学体验，我们创办了mutuus，希望我们的孩子们能以自己的内因驱动进行自主的学习、探索、思考，成为能够适应未来快速变化的人。';
var wxLink = 'http://www.imutuus.com/i_phone.aspx';
var wxImgUrl = 'http://www.imutuus.com/images/bg/about_logo_2.gif';


wx.config({
      debug: false,
      appId: wxAppid,
      <%=GetSignature() %>,
     jsApiList: [
         'checkJsApi',
         'onMenuShareTimeline',
         'onMenuShareAppMessage',
         'onMenuShareQQ',
         'onMenuShareWeibo'
     ]
});
wx.ready(function () {
    wx.checkJsApi({
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
        ]
    });

    wx.onMenuShareTimeline({
        title: wxTitle,
        desc: wxDesc,
        link: wxLink,
        imgUrl: wxImgUrl,
        trigger: function (res) {
            console.log('用户点击分享到朋友圈');
        },
        success: function (res) {
            console.log('已分享');
        },
        cancel: function (res) {
            console.log('已取消');
        },
        fail: function (res) {
            console.log('wx.onMenuShareTimeline:fail: '+JSON.stringify(res));
        }
    });

    wx.onMenuShareAppMessage({
        title: wxTitle,
        desc: wxDesc,
        link: wxLink,
        imgUrl: wxImgUrl,
        trigger: function (res) {
           console.log('用户点击分给到朋友');
        },
        success: function (res) {
            console.log('已分享');
        },
        cancel: function (res) {
            console.log('已取消');
        },
        fail: function (res) {
            console.log('wx.onMenuShareTimeline:fail: '+JSON.stringify(res));
        }
    });

    wx.onMenuShareQQ({
        title: wxTitle,
        desc: wxDesc,
        link: wxLink,
        imgUrl: wxImgUrl,
        success: function () {
           console.log('已分享');
        },
        cancel: function () {
           console.log('已取消');
        },
        fail: function (res) {
            console.log('wx.onMenuShareTimeline:fail: '+JSON.stringify(res));
        }
    });

    	winH=$(window).height(),
    	winW=$(window).width(),
    	$(".swiper-slide,.page__phone").height(winH);

    	var r=new Swiper(".page__phone",{
    		// speed:500,
    		direction : 'vertical',
    		pagination: '.swiper-pagination',
    		hashnav:true,
    		onInit: function(swiper){
          musicInit();
        },
    });
});
wx.error(function (res) {
    console.log('wx.error: '+JSON.stringify(res));
});

(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();


//音乐
function musicInit (){
	var myAudio = document.createElement("audio");
	var audioHtml = '<div id=audioControl class=play></div>';
	myAudio.id="music",
	myAudio.src='video/sijidewenhou.mp3',
	myAudio.loop="loop",

	$("#audiocontainer").append(myAudio,audioHtml);
	var audioEl = document.getElementById("music");
	audioEl.load();
	audioEl.play();


	var isMusicPlaying=!0;
	function musicPlaying (){
			if(isMusicPlaying==!0){
					myAudio.pause();
					$('#audioControl').removeClass('play');
					isMusicPlaying=!1;
			}else{
					myAudio.play();
					$('#audioControl').addClass('play');
					isMusicPlaying=!0;
			}
	};
	document.getElementById("audioControl").addEventListener('touchstart',musicPlaying,!1);
};
</script>
</html>
