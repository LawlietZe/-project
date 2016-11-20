$(document).ready(function() { 
	$('.about , .about li').hover(function(){
		$('.sub-menu-1').css('display','block');
		},function(){
		$('.sub-menu-1').css('display','none');
	});	
	$('.product , .product li').hover(function(){
		$('.sub-menu-2').css('display','block');
		},function(){
		$('.sub-menu-2').css('display','none');
	})
}); 