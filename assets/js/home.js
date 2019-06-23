window.onload = function() {
    console.log("ready");

    // scrollTop = Document.scrollTop;
    // document.body.onscroll = function(){};
    // console.log(test);

    window.addEventListener("scroll", function(){
        getPageScroll();
    }, false)
  };

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
  