$("#menu").mouseup(function(e){
	$(".navbar_menu__active").css({'opacity':'1', 'visibility':'visible', 'transition':'0.5s'})
	$("*").mousedown(function(e){
	    if ($(".navbar_menu__active").has(e.target).length === 0){
	        $(".navbar_menu__active").css({'opacity':'0', 'visibility':'hidden', 'transition':'0.5s'});
	    }
	});	
});
//header: menu
if(window.matchMedia('(max-width: 500px)').matches){
	 $(".navbar_menu__container__active a").mousemove(function(e){
		$(this).css({'background':'white', 'color':'black', 'transition':'0.6s', 'cursor':'pointer'})
		$(this).mouseout(function(e){
		$(this).css({'background':'none', 'color':'white', 'transition':'0.6s', 'cursor':'pointer'})});		
	 });
}
//Подсветка header: menu

$("#comm").mouseup(function(e){
	$(".navbar_communication__active").css({'opacity':'1', 'visibility':'visible', 'transition':'0.5s'})
	$("*").mousedown(function(e){
	    if ($(".navbar_communication__active").has(e.target).length === 0){
	        $(".navbar_communication__active").css({'opacity':'0', 'visibility':'hidden', 'transition':'0.5s'});
	    }
	});	
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



$(".block-2-menu__block").mousemove(function(e){
	$(this).css({'filter':'invert(100%)', 'transition':'0.6s', 'cursor':'pointer'})
	$(this).mouseout(function(e){
	$(this).css({'filter':'none'})});		
});
//block-2: btn1-4

$("#block-1_nav").click(function(){
	$('[name="block-1_anchor"]')[0].scrollIntoView({behavior: "smooth"});
});
$("#block-2_nav").click(function(){
	$('[name="block-2_anchor"]')[0].scrollIntoView({behavior: "smooth"});
});
$("#block-3_nav").click(function(){
	$('[name="block-3_anchor"]')[0].scrollIntoView({behavior: "smooth"});
});
$("#block-4_nav").click(function(){
	$('[name="block-4_anchor"]')[0].scrollIntoView({behavior: "smooth"});
});
$("#block-5_nav").click(function(){
	$('[name="block-5_anchor"]')[0].scrollIntoView({behavior: "smooth"});
});




	


