$(document).ready(function(){
    $(".plate").click(function(){
        $(".mobile-nav").toggleClass("show-menu");
    });
    $(".mobile-nav nav .aligned-items a").click(function(){
        $(".mobile-nav").toggleClass("show-menu");
        $('#nav-icon1').toggleClass('open');
    });  
    $(".mobile-nav .nav-footer .icons a").click(function(){
        $(".mobile-nav").toggleClass("show-menu");
        $('#nav-icon1').toggleClass('open');
    });  
});