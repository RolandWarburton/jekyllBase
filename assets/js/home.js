window.onload = function() {
  console.log("ready");

  var $hamburger = $('.hamburger');

  TweenLite.set('#mobile_nav', {yPercent: -100});
  TweenLite.set('.navigation li',{x:-112}); 
  
  var hamburgerMotion = new TimelineMax()
  .to('#mobile_nav',0.3,{yPercent:0},0)
  .reverse()
  
  $hamburger.on('click', function(e) {
    hamburgerMotion.reversed(!hamburgerMotion.reversed());
  });





  // for dropdown nav
  $('.nav_list .dropdown_trigger').hover(function(e) {
    $(this).siblings('.nav_dropdown').slideToggle()
  });


};