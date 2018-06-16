$.getScript('/assets/js/anime.min.js', function()
{
  var allCallbacks = anime({
  targets: '.rightLeft .el',
  translateX: function(el){
  	return el.getAttribute('data-x');
  },
    translateY: function(el){
  	return el.getAttribute('data-y');
  },
   opacity: [
	{ value: [0, 1], /*easing: 'easeOutBack'*/ }
  ],
  delay: function(el, i) { return 1000 + (i * 100); },
  duration: function(el, i) { return 500 + (i * 500); },
  direction: 'alternate',
  autoplay: false
});

document.querySelector('.rightLeft .reverse').onclick = function() {
  allCallbacks.play();
  allCallbacks.reverse();
};

$(document).ready(function(){ 
  if($('#toggled').click(function(e){
    $('body').css("overflowY", "hidden");
  }));
  if($('#toggled2').click(function(e){
    $('body').css("overflowY", "hidden");
  }));
  if($('#close').click(function(e){
    $('body').css("overflowY", "auto");
  }));
  if($('#close2').click(function(e){
    $('body').css("overflowY", "auto");
  }));
});

var toggler = document.getElementById("bLeft");
var toggled = document.getElementById("toggled");

toggler.addEventListener("click", e => {
  toggled.classList.toggle('_active');
});


/*var rightLeft = anime({
  targets: '.rightLeft .el',
  translateX: function(el){
  	return el.getAttribute('data-x');
  },
    translateY: function(el){
  	return el.getAttribute('data-y');
  },
   opacity: [
	{ value: [0, 1], easing: 'easeOutBack' }
  ],
  borderRadius: '5px',
  /*rotate: function() { return anime.random(-360, 360); },
  duration: function() { return anime.random(1200, 1800); },
  duration: function() { return anime.random(800, 1600); },
  delay: function() { return anime.random(0, 1000); },
  direction: 'alternate',
  autoplay: false,
  //complete: myCallBack
});

var myCallBack = function(){
anime({
  targets: '.rightLeft .el',
  /*translateX: function(el){
  	return el.getAttribute('data-x');
  },
    translateY: function(el){
  	return el.getAttribute('data-y');
  },
  	delay: 2000,
   opacity: [
	{ value: [0, 1], easing: 'easeOutBack' }
  ],
  borderRadius: '5px',
  /*rotate: function() { return anime.random(-360, 360); },
  duration: function() { return anime.random(1200, 1800); },
  duration: function() { return anime.random(800, 1600); },
  delay: function() { return anime.random(0, 1000); },
  direction: 'alternate',
  autoplay: false
});
}

document.querySelector('.rightLeft .reverse').onclick = function() {
  rightLeft.play();
  rightLeft.reverse();
}

/*var rightTop = anime({
  targets: '.rightTop .el',
  /*translateX: function(el){
  	return el.getAttribute('data-x');
  },
    translateY: function(el){
  	return el.getAttribute('data-y');
  },
  left: [{ value: '5%', duration: 3000 }],
   opacity: [
	{ value: [0, 1], easing: 'easeOutBack' }
  ],
  borderRadius: '5px',
  /*rotate: function() { return anime.random(-360, 360); },
  duration: function() { return anime.random(1200, 1800); },
  duration: function() { return anime.random(800, 1600); },
  delay: function() { return anime.random(0, 1000); },
  direction: 'alternate',
  autoplay: false
});

document.querySelector('.rightTop .reverse').onclick = function() {
  rightTop.play();
  rightTop.reverse();
}*/
});
