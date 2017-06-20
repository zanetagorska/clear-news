var swiper = new Swiper('.swiper-container', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 30,
  parallax: true,
  speed: 600
});

// Menu tło na scroll
function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 1,
    navbar = document.querySelector('.navbar');
    if (distanceY > shrinkOn) {
      classie.add(navbar,'smaller');
    } else {
      if (classie.has(navbar,'smaller')) {
        classie.remove(navbar,'smaller');
      }
    }
  });
}
window.onload = init();

$(function() {
// Photo BG
  var slides = $('.swiper-slide');
  for (i=0; i<slides.length; i++) {
    imageUrl = 'assets/img/slider/'+(i+1)+'.jpg';
    var slide = slides[i];
    var $slide = $(slide);
    $slide.css('background-image', 'url(' + imageUrl + ')');
  }

// Colapsed menu
  $('.fa-bars').click(function(e){
    e.preventDefault();
    $('.level1-ul').toggle();
  });

// odpowiedni display menu dla różnych ekranów
  $(window).resize(function(){
    if($(window).width()>=762){
      $('.level1-ul').css('display', 'flex');
      $('level2-list').css('display', 'block');
    }else{
      $('.level1-ul').css('display', 'block');
      $('.level2-list').css('display', 'none');
    }
  });

// Otwieranie drugiego poziomu listy
  $('#entertainment').click(function(e){
    if($(window).width()>=762){
      e.preventDefault();
      $('.level2-list').toggle();
      $(this).find('.fa').toggleClass('fa-angle-down fa-angle-up');
    };
  });

// Otwieranie i zamytanie trzeciego poziomu listy
  $('#auditions').click(function(e){
    if($(window).width()>=762){
      e.preventDefault();
      $('.level3-list').slideToggle();
    }
  });


});
// Menu level 3 video
  $(document).ready(function() {
    $('#video-gallery').lightGallery(); 
  });

