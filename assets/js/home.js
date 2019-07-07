window.onload=function(){
  // document.getElementsByTagName("html")[0].style.visibility = "visible";
  let timeline = new TimelineMax();
  timeline.to($("html"), 1, {autoAlpha:1});


  // control all the image loading
  // scrollmagic
  var controller = new ScrollMagic.Controller();
  
  $(".img_wrapper").each(function() {
    // build a tween
    var tween = TweenMax.to($(this), 1, {width: "100%"});

    // build a scene
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      reverse:false
    })
    .setTween(tween) // trigger a TweenMax.to tween
    .addTo(controller);

  });



  

  // for (i = 0; i < document.querySelectorAll(".product").length; i++) {
  //   console.log(i);
  //   timeline.from($(this), 0.3, {scaleX: 0, scaleY: 0}, 1)
  // }
  // timeline.from($(".product_title"), 0.5, {ease: Circ.easeOut, y: '13px'}, 0.225)
  const colCount = $('#products_wrapper').css('grid-template-columns').split(' ').length;
  let rowTracker = 0.15

  $(".product").each(function(index) {
    // build a tween
    // let tween = TweenMax.from($(this), 1, {opacity: "1"});

    // build a scene
    // timeline.to($(this), 0.3, { opacity: 1}, -0.35)
    // .from($(this), 0.3, {scaleX: 0, scaleY: 0, ease: Back.easeOut.config(1.05)})

    let temp = new TimelineMax();
    if ((index % colCount) == 0) {
      rowTracker = 0.15
    } else {
      rowTracker += 0.25 
    };

    temp
    .from($(this).find(".product_title"), 0.8, {ease: Power2.easeOut, y: '20px'}, -rowTracker)
    .from($(this).find("img"), 0.8, {ease: Power2.easeOut, y: '-10px'}, -rowTracker);

    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.9,
      reverse:false
    })
    .setTween(temp) // trigger a TweenMax.to tween
    .addTo(controller);

  });
  




  // document.getElementById("test").addEventListener('click', function() {
  //   TweenMax.to(x[0][0], 1, {width: "100%"});
  // });


}
