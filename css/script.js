$(function() { 
    
      $(window).on('load scroll', function (){
    var box = $('.fadeIn');
    var animated = 'animated';
    box.each(function(){
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
      if(scrollPos > boxOffset - wh + 150 ){
        $(this).addClass(animated);
      }
    });
  });
    
      $('.link_hyne').on('click', function () {
        $('html, body').animate({
            'scrollTop':$('.hyne').position().top
        },1500);
      });
      $('.link_profile').on('click', function () {
        $('html, body').animate({
            'scrollTop':$('.profile').position().top
        },1500);
      });
      $('.link_information').on('click', function () {
        $('html, body').animate({
            'scrollTop':$('.information').position().top
        },1500);
      });
      $('.link_discograph').on('click', function () {
        $('html, body').animate({
            'scrollTop':$('.discograph').position().top
        },1500);
      });
      $('.link_contact').on('click', function () {
        $('html, body').animate({
            'scrollTop':$('.contact').position().top
        },1500);
      });
      
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn(); 
        } else {
            $(".back-to-top").fadeOut();
        }
    });
    $(".back-to-top").click(function() {
        $("body,html").animate({scrollTop:0},1500);
    });
    
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    

});