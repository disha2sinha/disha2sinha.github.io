


const words = ["| MACHINE LEARNING ENTHUSIAST |", "| FRONT-END WEB DEVELOPER |", "| A PROGRAMMER BY PASSION |","| OPEN-SOURCE CONTRIBUTER |"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 500);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 200);
	};
	loopDeleting();
};

typingEffect();
window.onload=function(){
var mySwiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            autoplay: true,
            speed: 2000,
            loop: true,
            centeredSlides: true,
            slidesPerView: 2,
            initialSlide: 3,
            keyboardControl: true,
            mousewheelControl: true,
            lazyLoading: true,
            preventClicks: false,
            preventClicksPropagation: false,
            lazyLoadingInPrevNext: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            coverflow: {
              rotate: 50,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows : false,
            }
});
mySwiper.update();

};
$(document).ready(function($) {	
	$('.see-more').magnificPopup({
		type: 'inline',
		fixContentPos:true,
		closeBtnInside: false,
		preloader: false,
		removalDelay: 160,
		mainClass:'mfp-fade'
	});
	
});
$(function(){
  $('.circlechart').circlechart({
  	fill:{color:'black'}
  });
});



