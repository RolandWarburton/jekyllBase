window.onload=function(){

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




  // document.getElementById("test").addEventListener('click', function() {
  //   TweenMax.to(x[0][0], 1, {width: "100%"});
  // });


}
