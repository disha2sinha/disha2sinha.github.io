const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
  // Toggle the nav on menu icon click
  selectElement(".nav-list").classList.toggle("active");

  // Animate Links
 /* navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
      console.log(index / 7 + 0.5)
    }
  });*/

  //Burger Animation
  selectElement(".burger-menu-icon").classList.toggle("toggle");
});

//close navbar on nav link click

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    selectElement(".burger-menu-icon").classList.toggle("toggle");
  });
});

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
AOS.init();


