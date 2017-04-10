var swiper = new Swiper('.swiper-container', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 30,
  parallax: true,
  speed: 600
});

$(function() {
  var slides = $('.swiper-slide');
  for (i=0; i<slides.length; i++) {
    imageUrl = 'assets/img/slider/'+(i+1)+'.jpg';
    var slide = slides[i];
    var $slide = $(slide);
    $slide.css('background-image', 'url(' + imageUrl + ')');
  }
});