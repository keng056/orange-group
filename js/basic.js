
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

//�g��摜��\������
function pwinOpen(imgSrc){
	var lgPhoto=document.getElementById('lPhoto');
	lgPhoto.src = imgSrc;		
	var pWin=document.getElementById('pWindow');
	pWin.style.visibility = 'visible';
}

//�g��摜�����
function cls(){
	var pWin=document.getElementById('pWindow');
	pWin.style.visibility = 'hidden';		
	var lgPhoto=document.getElementById('lPhoto');
	lgPhoto.src = "img/loading.gif";
}

//�y�[�W�̐擪�֖߂�F�X�N���[��
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

//�}�E�X�I��o��œ����x
$(document).ready(
	function(){
		$("#list img").hover(function(){
			$(this).fadeTo("normal", 0.0); // �}�E�X�I��o��œ����x��0%�ɂ���
		},function(){
			$(this).fadeTo("fast", 1.0); // �}�E�X�A�E�g�œ����x��100%�ɖ߂�
		});
	});	


//�}�E�X�I��o��œ����x
$(document).ready(
	function(){
		$(".sns img,#sonpo img,#og img,.btn img,#campaign_a img,#campaign_b img,#campaign_c img,.bnr img").hover(function(){
			$(this).fadeTo("normal", 0.6); // �}�E�X�I��o��œ����x��60%�ɂ���
		},function(){
			$(this).fadeTo("fast", 1.6); // �}�E�X�A�E�g�œ����x��100%�ɖ߂�
		});
	});	



//�X���C�h�A�j���[�V�������ĕ\��
//�g�b�v�֖߂�	
$(function() {
    var topBtn = $('#page-top');   
    topBtn.hide();
    //�X�N���[����100�ɒB������{�^���\��
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //�X�N���[�����ăg�b�v
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(function () {
    var headerheight = 100; //�w�b�_�̍���
    $('a[href^=#]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerheight; //�w�b�_�̍������ʒu���Y����
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


//���[���I�[�o�[
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

//���[���I�[�o�[
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

//�摜�ؑ�
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



 // �ʑ��\��
$(function () {
$('#link,#link2,#link3,#link4,#link5,#link6,#link7,#link8,#link9,#link10').click(function(){

 // form��action�Ŏw�肳�ꂽURL���ʑ��ŊJ��
winOpen(this.href, 1000, 700);
return false;
});
/**
* �ʑ�
* @param {string} url
* @param {int} width
* @param {int} height
*/ 
function winOpen(url, width, height) {
	
	// �����
	if (width > 1000) { width = 1000;
	}
	// �������
	if (height > 1000) { height = 1000;
	} 
	window.open(url, '_blank', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=' + width + ', height=' + height);
	}
	});