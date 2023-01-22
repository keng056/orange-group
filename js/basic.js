
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

//拡大画像を表示する
function pwinOpen(imgSrc){
	var lgPhoto=document.getElementById('lPhoto');
	lgPhoto.src = imgSrc;		
	var pWin=document.getElementById('pWindow');
	pWin.style.visibility = 'visible';
}

//拡大画像を閉じる
function cls(){
	var pWin=document.getElementById('pWindow');
	pWin.style.visibility = 'hidden';		
	var lgPhoto=document.getElementById('lPhoto');
	lgPhoto.src = "img/loading.gif";
}

//ページの先頭へ戻る：スクロール
/*function backToTop() {
var x1 = x2 = x3 = 0;
var y1 = y2 = y3 = 0;
if (document.documentElement) {
x1 = document.documentElement.scrollLeft || 0;
y1 = document.documentElement.scrollTop || 0;
}
if (document.body) {
x2 = document.body.scrollLeft || 0;
y2 = document.body.scrollTop || 0;
}
x3 = window.scrollX || 0;
y3 = window.scrollY || 0;
var x = Math.max(x1, Math.max(x2, x3));
var y = Math.max(y1, Math.max(y2, y3));
window.scrollTo(Math.floor(x / 2), Math.floor(y / 2));
if (x > 0 || y > 0) {
window.setTimeout("backToTop()", 25);
}
}
*/

//マウスオｰバｰで透明度
$(document).ready(
	function(){
		$("#list img").hover(function(){
			$(this).fadeTo("normal", 0.0); // マウスオｰバｰで透明度を0%にする
		},function(){
			$(this).fadeTo("fast", 1.0); // マウスアウトで透明度を100%に戻す
		});
	});	


//マウスオｰバｰで透明度
$(document).ready(
	function(){
		$(".sns img,#sonpo img,#og img,.btn img,#campaign_a img,#campaign_b img,#campaign_c img,.bnr img").hover(function(){
			$(this).fadeTo("normal", 0.6); // マウスオｰバｰで透明度を60%にする
		},function(){
			$(this).fadeTo("fast", 1.6); // マウスアウトで透明度を100%に戻す
		});
	});	



//スライドアニメーションして表示
//トップへ戻る	
$(function() {
    var topBtn = $('#page-top');   
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(function () {
    var headerheight = 100; //ヘッダの高さ
    $('a[href^=#]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerheight; //ヘッダの高さ分位置をズラす
        $("html, body").animate({scrollTop:position}, 500, "swing");
        return false;
    });
});


//pulldown
$(function(){
	$('.nav').hover(function(){
		var nav = $(this).find('li').length;
		$(this).animate({'height':38* nav + 'px'},'fast');
	},function(){
		$(this).animate({'height':'38px'},'fast');
	});
});


//ロールオーバー
/*$(function() {
	var images = $("img");
	for(var i=0; i < images.size(); i++) {
		if(images.eq(i).attr("src").match("_off.")) {
			$("img").eq(i).hover(function() {
				$(this).attr('src', $(this).attr("src").replace("_off.", "_on."));
			}, function() {
				$(this).attr('src', $(this).attr("src").replace("_on.", "_off."));
			});
		}
	}
});*/

//ロールオーバー
    $(function($) {
        $('#fb img').rollover({
        });
    });

 //FadiIn
$(function() {
    var fadeSpeed = 1000;
    $('#fadein')
        .css({opacity: '0.0'})
        .animate({opacity: '1'}, fadeSpeed);
});

//画像切替
$(function(){
	var setImg = '#viewer';
	var fadeSpeed = 1500;
	var switchDelay = 5000;

	$(setImg).children('img').css({opacity:'0'});
	$(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);

	setInterval(function(){
		$(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
	},switchDelay);
});	


//droppy
  $(function() {
    $('#nav').droppy();
  });



 // 別窓表示
$(function () {
$('#link,#link2,#link3,#link4,#link5,#link6,#link7,#link8,#link9,#link10').click(function(){

 // formのactionで指定されたURLが別窓で開く
winOpen(this.href, 1000, 700);
return false;
});
/**
* 別窓
* @param {string} url
* @param {int} width
* @param {int} height
*/ 
function winOpen(url, width, height) {
	
	// 幅上限
	if (width > 1000) { width = 1000;
	}
	// 高さ上限
	if (height > 1000) { height = 1000;
	} 
	window.open(url, '_blank', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=' + width + ', height=' + height);
	}
	});