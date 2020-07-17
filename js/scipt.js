$("#menu").mouseup(function(e){
	$(".navbar_menu__active").css({'opacity':'1', 'display':'flex', 'transition':'1s'})
	$("*").mousedown(function(e){
	    if ($(".navbar_menu__active").has(e.target).length === 0){
	        $(".navbar_menu__active").css({'opacity':'0', 'display':'none', 'transition':'1s'});
	    }
	});	
});
//header: menu
$("#comm").mouseup(function(e){
	$(".communication__active").css({'opacity':'1', 'display':'flex', 'transition':'1s'})
	$("*").mousedown(function(e){
	$(".communication__active").css({'opacity':'0', 'display':'none', 'transition':'1s'})});		
});
//header: call


$("#vk").mousemove(function(e){
	$(this).css({'filter':'invert(100%)', 'transition':'0.6s', 'cursor':'pointer'})
	$(this).mouseout(function(e){
	$(this).css({'filter':'none'})});
		$("#inst").mousemove(function(e){
		$(this).css({'filter':'invert(100%)', 'transition':'0.6s'})
		$(this).mouseout(function(e){
		$(this).css({'filter':'none'})});
	});
});
//block-1: btn1 and btn2



$(".block-2-map_block").mousemove(function(e){
	$(this).css({'filter':'invert(100%)', 'transition':'0.6s', 'cursor':'pointer'})
	$(this).mouseout(function(e){
	$(this).css({'filter':'none'})});		
});
//block-2: btn1-4
	


	


