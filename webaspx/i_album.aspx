﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="DB.Web.index" %>

<!doctype html>
<html lang="zh-CN">
<head runat="server">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">

  <link rel="shortcut icon" href="http://www.imutuus.com/images/mutuus.png">
  <meta name="format-detection" content="telephone=no">
  <meta name="format-detection" content="email=no"/>

  <title>mutuus 实景展示</title>
  <meta name="keywords" content="mutuus mutuus早教 mutuus托班 mutuus英式双语托班 mutuus开放式儿童成长中心">
  <meta name="description" content="为了我们自己的孩子，为了实践我们期望中的教学体验，我们创办了mutuus，希望我们的孩子们能以自己的内因驱动进行自主的学习、探索、思考，成为能够适应未来快速变化的人。">

  <!-- photoswipe -->
  <link rel="stylesheet" href="js/PhotoSwipe/photoswipe.css">
  <link rel="stylesheet" href="js/PhotoSwipe/default-skin/default-skin.css">

  <link href="css/album.css" rel="stylesheet">

  <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
  <script src="http://www.imutuus.com/js/swiper/js/swiper.min.js"></script>
  <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
  <!-- photoswipe -->
  <script src="js/PhotoSwipe/photoswipe.min.js"></script>
  <script src="js/PhotoSwipe/photoswipe-ui-default.min.js"></script>
  <script src="js/jquery.imgpreload.min.js"></script>

<script>
var phoneWidth =parseInt(window.screen.width);
console.log(phoneWidth);
var phoneScale =phoneWidth/640;
console.log(phoneScale);
var ua =navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)){
    var version =parseFloat(RegExp.$1);
    if(version>2.3){
        document.write('<meta name=\"viewport\" content=\"width=640, minimum-scale = '+ phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi\">');
    } else{
        document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
    }
} else {
    document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}
</script>

</head>
<body>

<div id="loading" class="loadingWrap">
    <div class="loadingInner">
        <div class="loadingAnimate" id="progressbar">
            <span class='logo-b'></span>
            <span class='logo-n'></span>
        </div>
        <div class="loadingNumber" id="percent">
            0%
        </div>
    </div>
</div>

<div id="landscape_hinter">
    <div class="hinter_phone"></div>
    <div class="hinter_rotate"></div>
    <div class="hinter_text">竖屏体验效果更佳</div>
</div>

<section class="swiper-container a2 ad sVertical">
	<div class="swiper-wrapper">
	<section class="swiper-slide s1" data-hash="s1">

    		<div class="pheader">
    			<img src="images/wx_bg/mutuus_01.jpg" alt="mutuus" width="100%">
    		</div>

	<div class="gallery clearfix" id="container" data-pswp-uid="1">

	    <a href="img/album/bigger/IMG_1901.jpg" data-size="1200x800" data-med="img/album/big/IMG_1901.jpg" data-med-size="600x400" data-author="前台" class="demo-gallery__img--main">
	      <img src="img/album/small/IMG_1901.jpg" alt="前台" />
	      <figure>前台</figure>
	    </a>

	    <a href="img/album/bigger/IMG_1890.jpg" data-size="1200x800" data-med="img/album/big/IMG_1890.jpg" data-med-size="600x400" data-author="活动区" class="demo-gallery__img--main">
	      <img src="img/album/small/IMG_1890.jpg" alt="活动区" />
	      <figure>活动大厅</figure>
	    </a>
	    <a href="img/album/bigger/c.jpg" data-size="1200x800" data-med="img/album/big/c.jpg" data-med-size="600x400" data-author="中央舞台区" class="demo-gallery__img--main">
	      <img src="img/album/small/c.jpg" alt="中央舞台区" />
	      <figure>中央舞台区</figure>
	    </a>


	    <a href="img/album/bigger/DSC_0320.jpg" data-size="1200x1807" data-med="img/album/big/DSC_0320.jpg" data-med-size="600x904" data-author="运动区" class="demo-gallery__img--main">
	      <img src="img/album/small/DSC_0320.jpg" alt="运动区" />
	      <figure>运动区</figure>
	    </a>
	    <a href="img/album/bigger/DSC_0323.jpg" data-size="1200x800" data-med="img/album/big/DSC_0323.jpg" data-med-size="600x400" data-author="运动区" class="demo-gallery__img--main">
	      <img src="img/album/small/DSC_0323.jpg" alt="运动区" />
	      <figure>运动区</figure>
	    </a>

	    <a href="img/album/bigger/IMG_1560.jpg" data-size="1200x800" data-med="img/album/big/IMG_1560.jpg" data-med-size="600x400" data-author="瞭望台" class="demo-gallery__img--main">
	      <img src="img/album/small/IMG_1560.jpg" alt="瞭望台" />
	      <figure>瞭望台</figure>
	    </a>
	    <a href="img/album/bigger/IMG_1597.jpg" data-size="1200x800" data-med="img/album/big/IMG_1597.jpg" data-med-size="600x400" data-author="积木区" class="demo-gallery__img--main">
	      <img src="img/album/small/IMG_1597.jpg" alt="积木区" />
	      <figure>积木区</figure>
	    </a>
	    <a href="img/album/bigger/d.jpg" data-size="1200x800" data-med="img/album/big/d.jpg" data-med-size="600x400" data-author="楼梯" class="demo-gallery__img--main">
	      <img src="img/album/small/d.jpg" alt="楼梯" />
	      <figure>楼梯</figure>
	    </a>
	    <a href="img/album/bigger/IMG_2009.jpg" data-size="1200x800" data-med="img/album/big/IMG_2009.jpg" data-med-size="600x400" data-author="活动区" class="demo-gallery__img--main">
	      <img src="img/album/small/IMG_2009.jpg" alt="活动区" />
	      <figure>活动区</figure>
	    </a>
	    <a href="img/album/bigger/DSC_0346.jpg" data-size="1200x800" data-med="img/album/big/DSC_0346.jpg" data-med-size="600x400" data-author="神奇工坊" class="demo-gallery__img--main">
	      <img src="img/album/small/DSC_0346.jpg" alt="神奇工坊" />
	      <figure>神奇工坊</figure>
	    </a>
	    <a href="img/album/bigger/IMG_1848.jpg" data-size="1200x800" data-med="img/album/big/IMG_1848.jpg" data-med-size="600x400" data-author="烘焙区" class="demo-gallery__img--main">
	      <img src="img/album/small/IMG_1848.jpg" alt="烘焙区" />
	      <figure>烘焙区</figure>
	    </a>
	    <a href="img/album/bigger/IMG_1583.jpg" data-size="1200x800" data-med="img/album/big/IMG_1583.jpg" data-med-size="600x400" data-author="多功能区" class="demo-gallery__img--main">
	      <img src="img/album/small/IMG_1583.jpg" alt="多功能区" />
	      <figure>多功能区</figure>
	    </a>

	    <a href="img/album/bigger/IMG_1784.jpg" data-size="1200x800" data-med="img/album/big/IMG_1784.jpg" data-med-size="600x400" data-author="绘本区" class="demo-gallery__img--main">
	      <img src="img/album/small/IMG_1784.jpg" alt="绘本区" />
	      <figure>绘本区</figure>
	    </a>
	    <a href="img/album/bigger/a.jpg" data-size="1200x800" data-med="img/album/big/a.jpg" data-med-size="600x400" data-author="坡道" class="demo-gallery__img--main">
	      <img src="img/album/small/a.jpg" alt="坡道" />
	      <figure>坡道</figure>
	    </a>

	    <a href="img/album/bigger/IMG_1511.jpg" data-size="1200x800" data-med="img/album/big/IMG_1511.jpg" data-med-size="600x400" data-author="走廊" class="demo-gallery__img--main">
	      <img src="img/album/small/IMG_1511.jpg" alt="走廊" />
	      <figure>走廊</figure>
	    </a>
	    <a href="img/album/bigger/IMG_1524.jpg" data-size="1200x800" data-med="img/album/big/IMG_1524.jpg" data-med-size="600x400" data-author="彩虹隧道" class="demo-gallery__img--main">
	      <img src="img/album/small/IMG_1524.jpg" alt="彩虹隧道" />
	      <figure>彩虹隧道</figure>
	    </a>
	    <a href="img/album/bigger/IMG_1745.jpg" data-size="1200x800" data-med="img/album/big/IMG_1745.jpg" data-med-size="600x400" data-author="剧院区" class="demo-gallery__img--main">
	      <img src="img/album/small/IMG_1745.jpg" alt="剧院区" />
	      <figure>剧院区</figure>
	    </a>
	    <a href="img/album/bigger/IMG_1834.jpg" data-size="1200x800" data-med="img/album/big/IMG_1834.jpg" data-med-size="600x400" data-author="洗手池" class="demo-gallery__img--main">
	      <img src="img/album/small/IMG_1834.jpg" alt="洗手池" />
	      <figure>洗手池</figure>
	    </a>

			<a href="img/album/bigger/IMG_1977.jpg" data-size="1200x800" data-med="img/album/big/IMG_1977.jpg" data-med-size="600x400" data-author="角色扮演区" class="demo-gallery__img--main">
				<img src="img/album/small/IMG_1977.jpg" alt="角色扮演区" />
				<figure>角色扮演区</figure>
			</a>
	    <a href="img/album/bigger/IMG_1866.jpg" data-size="1200x800" data-med="img/album/big/IMG_1866.jpg" data-med-size="600x400" data-author="角色扮演区" class="demo-gallery__img--main">
	      <img src="img/album/small/IMG_1866.jpg" alt="角色扮演区" />
	      <figure>角色扮演区</figure>
	    </a>
	    <a href="img/album/bigger/IMG_1979.jpg" data-size="1200x800" data-med="img/album/big/IMG_1979.jpg" data-med-size="600x400" data-author="窗景" class="demo-gallery__img--main">
	      <img src="img/album/small/IMG_1979.jpg" alt="窗景" />
	      <figure>窗景</figure>
	    </a>
	    <a href="img/album/bigger/b.jpg" data-size="1200x800" data-med="img/album/big/b.jpg" data-med-size="600x400" data-author="窗景" class="demo-gallery__img--main">
	      <img src="img/album/small/b.jpg" alt="窗景" />
	      <figure>窗景</figure>
	    </a>

	</div>


          <footer class="footer">
            <div>
              <svg width="138px" height="34px" viewBox="0 0 138 34" version="1.1">
                  <defs>
                      <polygon id="path-1" points="101.291227 0.0549230769 101.291227 33.9686154 0.165377246 33.9686154 0.165377246 0.0549230769 101.291227 0.0549230769"/>
                  </defs>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(-40.000000, -4443.000000)">
                          <g id="Group-2" transform="translate(40.000000, 4443.000000)">
                              <g id="Group-11">
                                  <path d="M2.19615377,32.7822769 C2.10785914,32.7964 2.0167615,32.8037231 1.92426236,32.8037231 C1.82335421,32.8037231 1.7261834,32.7964 1.63088126,32.7822769 L0.289643764,32.7822769 C0.132675531,32.7822769 0.00420450626,32.6384308 0.00420450626,32.4626769 L0.00420450626,30.9300615 L0,17.8719692 C0,15.1122154 0.834828075,12.7055385 2.54092328,10.6807077 C4.25776333,8.64436923 6.33852676,7.64110769 8.7570522,7.64110769 C11.6030358,7.64110769 13.878608,8.86824615 15.6057257,11.3120615 C17.3034119,8.86824615 19.5771155,7.64110769 22.4473917,7.64110769 C24.887874,7.64110769 26.9527538,8.65221538 28.6471698,10.6807077 C30.3453231,12.7123385 31.1880931,15.1122154 31.1880931,17.8719692 C31.1880931,22.7365846 31.1974364,27.5980615 31.1974364,32.4626769 C31.1974364,32.6384308 31.0698997,32.7822769 30.9129315,32.7822769 L29.5908479,32.7822769 C29.5039547,32.7958769 29.4142586,32.8026769 29.3236281,32.8026769 C29.2250558,32.8026769 29.1288193,32.7958769 29.0349187,32.7822769 L27.682002,32.7822769 C27.5250338,32.7822769 27.3965628,32.6384308 27.3965628,32.4626769 C27.3965628,27.5985846 27.3988986,22.7449538 27.3988986,17.8719692 C27.3988986,16.2629846 26.9163147,14.8789231 25.9693665,13.7072308 C24.9981255,12.5083385 23.8316086,11.9078462 22.4534649,11.9078462 C20.9319008,11.9078462 19.723806,12.4602154 18.8394582,13.5796 C17.9481029,14.7084 17.4996222,16.1447692 17.4996222,17.8719692 C17.4996222,22.7355385 17.5042939,27.5985846 17.5042939,32.4626769 C17.5042939,32.6384308 17.3758229,32.7822769 17.2188546,32.7822769 L15.8631349,32.7822769 C15.776709,32.7958769 15.6865457,32.8026769 15.5959152,32.8026769 C15.4973429,32.8026769 15.4015736,32.7958769 15.3076729,32.7822769 L13.9879251,32.7822769 C13.8309569,32.7822769 13.7034202,32.6384308 13.7034202,32.4626769 C13.7034202,27.5980615 13.688938,22.7684923 13.688938,17.8719692 C13.688938,16.1426769 13.233917,14.7152 12.3495692,13.5796 C11.4839081,12.4680615 10.2945,11.9078462 8.7570522,11.9078462 C7.36582779,11.9078462 6.20024522,12.5146154 5.24255213,13.7072308 C4.29934123,14.8825846 3.8116185,16.2645538 3.8116185,17.8719692 C3.8116185,22.7381538 3.80554533,27.6043385 3.80554533,32.4626769 C3.80554533,32.6384308 3.6770743,32.7822769 3.52010607,32.7822769 L2.19615377,32.7822769" id="Fill-11" fill="#666"/>
                                  <g id="Group-18" transform="translate(35.971887, 0.000000)">

                                      <g id="Clip-13"/>
                                      <path d="M28.6154024,12.3346769 L28.6415638,22.9677846 C28.6457683,24.7368308 29.3927689,26.4750154 30.6508506,27.5384308 C31.7762568,28.4893846 33.4800161,28.5620923 34.9707472,28.6787385 C35.1398618,28.6923385 35.2683328,28.8581538 35.257588,29.0475077 L35.0127923,32.9543692 C35.0020474,33.1432 34.853021,33.2755385 34.6843736,33.2739692 C29.0316485,33.2174769 24.8318139,30.0941846 24.8280766,22.9677846 L24.8103242,0.374523077 C24.8103242,0.198769231 24.9387953,0.0549230769 25.0962307,0.0549230769 L28.3262258,0.0549230769 C28.483194,0.0549230769 28.6116651,0.198769231 28.6116651,0.374523077 C28.6116651,2.93707692 28.6154024,5.50015385 28.6154024,8.06793846 C30.5634903,8.06793846 32.4854168,8.07996923 34.4381764,8.07996923 C34.5951446,8.07996923 34.7226813,8.22329231 34.7226813,8.39904615 L34.7226813,12.0161231 C34.7226813,12.1924 34.5951446,12.3362462 34.4381764,12.3362462 C32.497096,12.3362462 30.5560156,12.3346769 28.6154024,12.3346769" id="Fill-12" fill="#666" mask="url(#mask-2)"/>
                                      <path d="M19.9452433,22.9677846 C19.9452433,25.8776615 18.9427022,28.4485846 16.9544379,30.6763692 C14.9806558,32.8858462 12.686864,34 10.068391,34 C7.4359029,34 5.13323497,32.8858462 3.15992003,30.6763692 C1.17212291,28.4485846 0.169114585,25.8797538 0.169114585,22.9677846 C0.169114585,18.0733538 0.165377246,13.1778769 0.165377246,8.28344615 C0.165377246,8.10769231 0.293381103,7.96384615 0.450349337,7.96384615 L3.68127881,7.96384615 C3.83824704,7.96384615 3.9662509,8.10769231 3.9662509,8.28344615 C3.9662509,13.1768308 3.98120026,18.0649846 3.98120026,22.9677846 C3.98120026,24.8472 4.57076547,26.4551385 5.76250941,27.7889846 C6.95331901,29.1223077 8.38612131,29.7824308 10.068391,29.7824308 C11.7352441,29.7824308 13.1554329,29.1128923 14.3537172,27.7889846 C15.5520015,26.4645538 16.1551145,24.8665538 16.1551145,22.9677846 C16.1551145,18.0691692 16.1326905,13.1810154 16.1326905,8.28344615 C16.1326905,8.10769231 16.2611615,7.96384615 16.4181298,7.96384615 L19.6485921,7.96384615 C19.8060275,7.96384615 19.9335642,8.10769231 19.9335642,8.28344615 C19.9335642,13.1878154 19.9452433,18.0587077 19.9452433,22.9677846" id="Fill-14" fill="#666" mask="url(#mask-2)"/>
                                      <path d="M98.6241689,31.0707692 C97.2693835,32.5353846 95.6651308,33.2682154 93.8123451,33.2682154 C91.3064593,33.2682154 89.1303938,31.7256615 87.0309436,30.4028 C86.8833188,30.3096923 86.8300617,30.0973231 86.9141518,29.9325538 L88.6295904,26.52 C88.7132133,26.3552308 88.9024161,26.2961231 89.050041,26.3892308 L91.967034,28.2294154 C93.3050013,28.8377538 94.6752032,29.3346769 95.9145982,28.0018769 C96.5018276,27.3705231 96.8022162,26.6152 96.8022162,25.7343385 C96.8022162,24.3392923 95.9529059,23.2057846 94.2711034,22.3338154 C92.7920516,21.5664615 91.6624409,20.9821846 90.88414,20.5731385 C90.0974302,20.1630462 89.6615631,19.9271385 89.5676624,19.8575692 C87.8774509,18.5059385 87.0365497,16.5444 87.0365497,13.9546462 C87.0365497,11.8623385 87.7060005,10.0655692 89.0453693,8.56590769 C90.4015562,7.04846154 92.0137507,6.31301538 93.8814858,6.29 C96.812961,6.25547692 99.0567659,8.35876923 101.182845,10.3443692 C101.31225,10.4652 101.327666,10.6875077 101.220218,10.8313538 L98.9647339,13.8238769 C98.8558839,13.9682462 98.6680826,13.9745231 98.5293339,13.8652 L94.9508319,11.0620308 C94.5906459,10.8909846 94.186079,10.7759077 93.7081667,10.7555077 C92.9163181,10.7215077 92.3767398,10.9704923 91.7792327,11.6264308 C91.1943392,12.2692923 90.9149731,13.0471077 90.9149731,13.9546462 C90.9149731,15.3319077 91.8278181,16.2174769 93.5147595,17.0941538 C94.9811978,17.8557538 96.0949248,18.4499692 96.871357,18.8647692 C101.121646,21.1344 101.964883,27.4604923 98.6241689,31.0707692" id="Fill-15" fill="#666" mask="url(#mask-2)"/>
                                      <path d="M59.7946193,22.9677846 C59.7946193,25.8776615 58.7920781,28.4485846 56.8038138,30.6763692 C54.8300317,32.8858462 52.53624,34 49.9177669,34 C47.2852788,34 44.9821438,32.8858462 43.0088288,30.6763692 C41.0214989,28.4485846 40.0175562,25.8797538 40.0175562,22.9677846 C40.0175562,18.0733538 40.0147532,13.1778769 40.0147532,8.28344615 C40.0147532,8.10769231 40.1427571,7.96384615 40.2997253,7.96384615 L43.5306548,7.96384615 C43.687623,7.96384615 43.8151597,8.10769231 43.8151597,8.28344615 L43.8151597,9.95153846 C43.8207657,10.0237231 43.8235687,10.0964308 43.8235687,10.1712308 C43.8235687,14.4228 43.8305762,18.7036615 43.8305762,22.9677846 C43.8305762,24.8472 44.4201414,26.4551385 45.610951,27.7889846 C46.802695,29.1223077 48.2350301,29.7824308 49.9177669,29.7824308 C51.5836857,29.7824308 53.0043417,29.1128923 54.2021588,27.7889846 C55.4013774,26.4645538 56.0044905,24.8665538 56.0044905,22.9677846 C56.0044905,18.0691692 55.9815993,13.1810154 55.9815993,8.28344615 C55.9815993,8.10769231 56.1100703,7.96384615 56.2670385,7.96384615 L59.4970337,7.96384615 C59.6540019,7.96384615 59.7829401,8.10769231 59.7829401,8.28344615 C59.7829401,13.1878154 59.7946193,18.0587077 59.7946193,22.9677846" id="Fill-16" fill="#666" mask="url(#mask-2)"/>
                                      <path d="M82.5643565,22.9677846 C82.5643565,25.8776615 81.5618153,28.4485846 79.5735511,30.6763692 C77.5997689,32.8858462 75.3059772,34 72.6884385,34 C70.0550161,34 67.7528153,32.8858462 65.7795004,30.6763692 C63.7912361,28.4485846 62.7882277,25.8797538 62.7882277,22.9677846 C62.7882277,18.0733538 62.7849576,13.1778769 62.7849576,8.28344615 C62.7849576,8.10769231 62.9124943,7.96384615 63.0694625,7.96384615 L66.300392,7.96384615 C66.4573602,7.96384615 66.5858312,8.10769231 66.5858312,8.28344615 C66.5858312,13.1768308 66.6007806,18.0649846 66.6007806,22.9677846 C66.6007806,24.8472 67.1898786,26.4551385 68.3816226,27.7889846 C69.5724322,29.1223077 71.0057016,29.7824308 72.6884385,29.7824308 C74.3543573,29.7824308 75.7750132,29.1128923 76.9732975,27.7889846 C78.1711146,26.4645538 78.7742277,24.8665538 78.7742277,22.9677846 C78.7742277,18.0691692 78.7522708,13.1810154 78.7522708,8.28344615 C78.7522708,8.10769231 78.8802747,7.96384615 79.0372429,7.96384615 L82.2681724,7.96384615 C82.4251406,7.96384615 82.5526773,8.10769231 82.5526773,8.28344615 C82.5526773,13.1878154 82.5643565,18.0587077 82.5643565,22.9677846" id="Fill-17" fill="#666" mask="url(#mask-2)"/>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </g>
              </svg>

            </div>
            <h4 style="font-size:1.4rem;">妙拓思开放式儿童成长中心（赛银国际中心）</h4>
            <p style="font-size:1.2rem;">高教路666号赛银国际商务中心8号楼201室<br>
              全家便利店楼上</p>
            <p style="font-size:1.2rem;">0571-88681657</p>
          </footer>
	</section>
	</div>
	<div class="sVertical-scrollbar"></div>
</section>


<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
                <div class="pswp__counter"></div>
                <div class="pswp__sTip">左右滑动翻看 双击放大 上下滑动关闭 </div>
                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
            </div>
            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>
            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>
            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>
        </div>
    </div>
</div>

</body>

<script src="js/album.js"></script>
<script>
var wxAppid = 'wxf1b528cc436d1f15';
var wxTitle = 'mutuus 实景展示';
var wxDesc = '妙拓思开放式儿童成长中心（赛银国际中心）';
var wxLink = 'http://www.imutuus.com/i_album.aspx';
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
            alert('已分享');
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
            alert('已分享');
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

});
wx.error(function (res) {
    console.log('wx.error: '+JSON.stringify(res));
});

// (function(){
//     var bp = document.createElement('script');
//     var curProtocol = window.location.protocol.split(':')[0];
//     if (curProtocol === 'https') {
//         bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
//     }
//     else {
//         bp.src = 'http://push.zhanzhang.baidu.com/push.js';
//     }
//     var s = document.getElementsByTagName("script")[0];
//     s.parentNode.insertBefore(bp, s);
// })();
</script>
</html>
