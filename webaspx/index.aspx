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
    <meta name="keywords" content="mutuus mutuus早教 mutuus托班 mutuus英式双语托班 mutuus开放式儿童成长中心 妙拓思 妙拓思早教 妙拓思托班 妙拓思英式双语托班 妙拓思开放式儿童成长中心">
    <meta name="description" content="为了我们自己的孩子，为了实践我们期望中的教学体验，我们创办了mutuus，希望我们的孩子们能以自己的内因驱动进行自主的学习、探索、思考，成为能够适应未来快速变化的人。">

    <link href="css/css.css" rel="stylesheet">

    <script src="js/jquery.1.11.0.min.js"></script>
</head>
<body>
    <form id="form1" runat="server" class="page__form">

<nav>
    <a class="logo" href="index.aspx"></a>
    <ul class="menu list-unstyled" id="menu">
        <li><a href="event_list.aspx">EVENTS</a></li>
        <li><a href="address.aspx">LOCATIONS</a></li>
        <li class="toggle openMenu">
            <a href="javascript:void(0)">
                <i class="fa fa-bars"></i>
            </a>
        </li>
    </ul>
    <div class="fixed-toggle openMenu"><a href="javascript:void(0)" id="openMenu"><i class="fa fa-bars"></i></a></div>
</nav>

<div class="top-menu" id="topMenu">
    <div class="close" id="closeMenu"><i class="fa fa-times"></i></div>
    <div class="row clearfix">
        <div class="col-md-3">
            <a href="index.aspx">
                <div class="logo"></div>
            </a>

        </div>
        <div class="col-md-2">
            <ul class="menu list-unstyled">
                <li><a href="introduction.aspx">about us</a></li>
                <li><a href="about_eyfs.aspx">about EYFS</a></li>
                <li><a href="about_logo.aspx">the logo</a></li>
                <li><a href="about_space.aspx">the space</a></li>
                <li><a href="form.aspx">open day</a></li>
            </ul>
        </div>
        <div class="col-md-2">
            <ul class="menu small list-unstyled">
                <li><a href="address.aspx">Locations</a></li>
                <li><a href="event_list.aspx">Events</a></li>
            </ul>

        </div>
        <div class="col-md-2">
            <div class="bdsharebuttonbox">
                <ul class="menu small list-unstyled">
                    <li><a href="javascript:void(0)" data-cmd="tsina" title="分享到新浪微博"><i class="fa fa-weibo"></i> WEIBO</a></li>
                    <li><a href="javascript:void(0)" data-cmd="weixin" title="分享到微信"><i class="fa fa-weixin"></i> WECHAT</a></li>
                    <li><a href="javascript:void(0)" data-cmd="fbook" title="分享到Facebook"><i class="fa fa-facebook-square"></i>FACEBOOK</a></li>
                    <li><a href="javascript:void(0)" data-cmd="twi" title="分享到Twitter"><i class="fa fa-twitter-square"></i>TWITTER</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>


<section class="page page__1 home-header" id="homeHeader">
    <div class="overlay"></div>
    <div class="hidden-sm hidden-xs">
        <!-- <video muted="" loop="loop" id="headerVideo" autoplay poster="images/bg/home-back-bg-50.jpg">
            <source src="http://www.lditent.com/jiangshan/song/107kuaishan-2.mp4" type="video/mp4">
        </video> -->
    </div>
    <div class="banner__text slogan">
                    <h3>being imaginative</h3>
                    <h3>being different</h3>
    </div>
    <div class="volume" id="volumeOpenner"></div>
    <div class="arrow"></div>

</section>



<section class="page page__2 page__color bg__white" id="introduction">
    <div class="container">
        <div class="row">
            <div class="col-md-4 title">
                <h3>
                    <div>for each unique kid</div>
                    <div>we unlock their</div>
                    <div>true potential</div>
                </h3>
            </div>
            <div class="col-md-1 intro"></div>
            <div class="col-md-7 intro">
                <p>
                什么是好的教育？这个问题很难回答。孩子们会多背几首古诗、会多读几个英文单词？或者掌握一些熟练的绘画技巧，会一些乐器？这些成就虽然能令人羡慕，但其实并不能说明什么。
                </p>
                <p>
                英国著名的贵族学校，The Perse，它认可的顶尖教育成就，其实很简单，就是让孩子们喜爱思考（love to think），并且在思考的过程中表现出：independently（独立地）、analytically（分析地）、logically（逻辑地）、creatively（创造性地）、imaginatively（富有想象力地）这五个特征。这个目标看起来很朴实，远不如其它学校冠冕堂皇的营销话术来得令人心动，但如果深入探究，“喜爱思考” 这一教育成就的达成，高度概括了许多令人振奋的优良特质，能够令孩子在未来的人生旅程中受益无穷。所以，真正优秀的教育本该如此，化繁为简，简洁明了，彰显着王者的霸气。
                </p>
                <p>受此影响，为了我们自己的孩子，为了实践我们期望中的教学体验，我们共同创办了 mutuus。我们希望我们的孩子们能以自己的内因驱动进行自主地学习、探索、思考，成为能够适应未来快速变化的人。
                </p>
                <a href="introduction.aspx" class="btn btn-default btn-border btn-width-260 btn-index-margin-5rem">
                   SEE DETAILS
                </a>
            </div>
        </div>
    </div>
</section>

<section class="page page__3 page__pic" id="about_eyfs">
    <div class="overlay"></div>

    <div class="container text-center">
        <div class="row clearfix">

                <div class="number">
                    <span class="big" data-number="3">
                        <img src="images/bg/3.svg" alt="3" class="number-svg">
                    </span>
                    PRIME AREAS
                </div>

                <div class="number">
                    <span class="big" data-number="4">
                        <img src="images/bg/4.svg" alt="4" class="number-svg">
                    </span>
                    SPECIFICS AREAS
                </div>

                <div class="number">
                    <span class="big" data-number="17">
                        <img src="images/bg/17.svg" alt="17" class="number-svg">
                    </span>
                    EARLY LEARNING GOALS
                </div>
                <div class="number">
                    <span class="big" data-number="356">
                        <img src="images/bg/356.svg" alt="356" class="number-svg">
                    </span>
                    ASSESSMENTS
                </div>


        </div>
        <a href="about_eyfs.aspx" class="btn btn-white btn-width-260 btn-margin-lr-auto">
            LEARN MORE ABOUT EYFS
        </a>

    </div>
</section>

<section class="page page__4 page__color bg__white" id="about_logo">
    <div class="container">
        <div class="header"><span class="bold">OUR LOGO</span></div>
        <div class="sub-header">BECOME AN EFFECTIVE LEARNER</div>
        <div class="row cont">
            <div class="col-md-6 text-center">
                <div class="logo-pic">
                    <img src="./images/bg/logo-size.png" alt="" width="50%">
                </div>
            </div>
            <div class="col-md-6 text-center">
                <a href="about_logo.aspx" class="btn btn-default btn-border btn-width-260 btn-margin-lr-auto btn-index-margin-10rem">
                    SEE DETAILS
                </a>
            </div>
        </div>
    </div>

</section>
<section class="page page__5 page__pic" id="about_space">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <p class="quote" >
                    “ 为孩子们设计的空间，只属于孩子们的领地 ”
                </p>
                <a href="about_space.aspx" class="btn btn-white btn-width-260 btn-margin-lr-auto btn-index-margin-10rem">
                    SEE DETAILS
                </a>
            </div>
        </div>

    </div>
</section>
  <!-- data-type="ajax" -->
<section class="page page__6 page__color bg__white">
    <div class="container">
        <div class="header"><span class="bold">OPEN DAY</span></div>
        <div class="sub-header">TAKE A TRIP, SEE WHAT WE DID FOR OUR KIDS</div>
        <div class="row">
            <div class="col-md-10 col-md-offset-1 text-center">
                <a href="form.aspx" class="btn btn-default btn-border btn-width-260 btn-margin-lr-auto btn-index-margin-10rem">
                    REQUEST INVITATION
                </a>
            </div>
        </div>

    </div>
</section>

<footer class="page footer bg__2e3033 page__pic">
    <div class="main clearfix">
        <div class="container">
            <div class="col-md-5">
                <a href="index.aspx" class="logo"></a>
            </div>
            <div class="col-md-2">
                <ul class="footer-section list-unstyled">
                    <li><a href="introduction.aspx">about us</a></li>
                    <li><a href="about_eyfs.aspx">about EYFS</a></li>
                    <li><a href="about_logo.aspx">the logo</a></li>
                    <li><a href="about_space.aspx">the space</a></li>
                    <li><a href="form.aspx">open day</a></li>
                </ul>
            </div>
            <div class="col-md-2">
                <ul class="footer-section list-unstyled">
                    <li><a href="address.aspx">Locations</a></li>
                    <li><a href="event_list.aspx">Events</a></li>
                </ul>
            </div>
            <div class="col-md-3">
                <div class="bdsharebuttonbox">
                    <ul class="footer-section list-unstyled">
                        <li><a href="javascript:void(0)" data-cmd="tsina" title="分享到新浪微博"><i class="fa fa-weibo"></i> WEIBO</a></li>
                        <li><a href="javascript:void(0)" data-cmd="weixin" title="分享到微信"><i class="fa fa-weixin"></i> WECHAT</a></li>
                        <li><a href="javascript:void(0)" data-cmd="fbook" title="分享到Facebook"><i class="fa fa-facebook-square"></i>FACEBOOK</a></li>
                        <li><a href="javascript:void(0)" data-cmd="twi" title="分享到Twitter"><i class="fa fa-twitter-square"></i>TWITTER</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

<div class="floatbtn">
    <span id="back-to-top"><i class="fa fa-arrow-up"></i></span>
</div>

</form>
</body>


<script src="js/bundles/core.js"></script>

<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
// var wxAppid = 'wxf1b528cc436d1f15';


wx.config({
      debug: false,
      appId: 'wxf1b528cc436d1f15',
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

    var wxTitle = 'mutuus - being imaginative, being different';
    var wxDesc = '为了我们自己的孩子，为了实践我们期望中的教学体验，我们创办了mutuus，希望我们的孩子们能以自己的内因驱动进行自主的学习、探索、思考，成为能够适应未来快速变化的人。';
    var wxLink =  window.location.href; //'http://www.imutuus.com/';
    var wxImgUrl = 'http://www.imutuus.com/img/logowhitebg.gif';

    console.log(wxLink);

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

</script>
<script>
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
</script>
</html>
