$.getScript('/assets/js/anime.min.js', function()
{

var rightLeft = anime({
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
  scale: {
    value: 2,
    delay: 800,
  },

  /*rotate: function() { return anime.random(-360, 360); },
  duration: function() { return anime.random(1200, 1800); },
  duration: function() { return anime.random(800, 1600); },
  delay: function() { return anime.random(0, 1000); },*/
  direction: 'alternate',
  autoplay: false
});

document.querySelector('.rightLeft .reverse').onclick = function() {
  rightLeft.play();
  rightLeft.reverse();
}
});
