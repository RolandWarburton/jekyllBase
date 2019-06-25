window.onload = function() {
    console.log("ready");


    window.addEventListener("scroll", function(){
        getPageScroll();
    }, false)


//   returns percentage of page scroll
function getPageScroll() {
        scrollTop = $(window).scrollTop();
        
        if (scrollTop >= 100) {
          $('#header_container').addClass('scrolled-nav');
          console.log("test");
        } else if (scrollTop < 100) {
          $('#header_container').removeClass('scrolled-nav');
        } 
        // console.log(scrollTop);
}



$('.nav_list .dropdown_trigger').click(function(e) {
  $(this).siblings('.nav_dropdown').slideToggle()
});

};