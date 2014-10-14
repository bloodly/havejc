$(function(){
	$("#jcUfo img").bind('touchstart mousedown', function(event){
		$(this).css({"padding":"2%","width":"96%"});
	}).bind('touchend mouseup',function(){
		$(this).css({"padding":"0%","width":"100%"});
		game.ufoclick();
	});
})
var a=0;
var game = {
	ufoclick :function(){
		a++;
		tool.showinfo(a);
	}
}

var tool = {
	showinfo:function($msg,$time){
		if(!window.infoWinInited){
			window.infoWinInited = true;
			$('html body').append('<div class="fixinfo_w J_showinfo"><div class="fixinfo J_info"></div></div>');
		}else{
			$('.J_showinfo').show();
		}
		$('.J_info').html($msg);
		if(!$time)
			$time = 2000;
		setTimeout(function(){
			$('.J_showinfo').animate({opacity: 0,left:'50px'},500,'ease-out')
		},$time);
		return;
	}
}