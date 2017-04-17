//$(document).ready(function(){
//	$('.hamburger').click(function(){
//        $('.header-nav').css("visibility","visible");
//		
//    $('.hamburger').click(function(){
//        $('.header-nav').css("visibility","hidden");
//    });
//    
//    });
//});

$(".hamburger").click(function(){
    $(".header-nav, .nav-social").toggleClass("is-visible");
});