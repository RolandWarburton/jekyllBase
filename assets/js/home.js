window.onload=function(){

  const c = document.querySelectorAll(".img_container > img");
  console.log(c[0]);

  document.getElementById("test").addEventListener('click', function() {
    TweenMax.to(c[0], 1, {height: '100%', background: 'blue'});
 });
 
 // $('.test').on('click',  function(){
 //   tl.play();
 // });
 
 // $('.reset').on('click',  function(){
 //   tl.pause(0, true);
 // })
}
