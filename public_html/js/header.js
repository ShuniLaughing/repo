$(function(){
    
    $(window).on('scroll', function(){
       if($(this).scrollTop() > 400){
           $('#header').addClass('fixed');
       } else{
           $('#header').removeClass('fixed');
       }
    });
    
    $('a[href^=#]').click(function(){
        var speed = 600;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
    
    
});