$(document).ready(function(){
  $('.triger').on('click', function (){
    $('.menu-mobile').toggleClass('mobile-active');
    $('body').toggleClass('lock');
  });
  $(function(){
    $(".list-content-accordion .triger.active").children(".footer-list").slideDown('fast');
    $(".list-content-accordion .triger").click(function(){
      $(this).siblings(".triger").removeClass("active").children(".footer-list").slideUp('fast');
      $(this).toggleClass("active").children(".footer-list").slideToggle("fast");
    });
  });
});

