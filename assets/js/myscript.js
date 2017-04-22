var swiper = new Swiper('.swiper-container', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 30,
  parallax: true,
  speed: 600
});

  $(document).ready(function() {
// Photo BG
  var slides = $('.swiper-slide');
  for (i=0; i<slides.length; i++) {
    imageUrl = 'assets/img/slider/'+(i+1)+'.jpg';
    var slide = slides[i];
    var $slide = $(slide);
    $slide.css('background-image', 'url(' + imageUrl + ')');
  }

// Menu video gallery
    $('#video-gallery').lightGallery();

// Collapse menu
  $('.navbar .fa-bars').click(function() {
    $('.level1-list').slideToggle();
  });

// Menu tło na scroll
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

// otwórz entertainment
  $('.level2-container').hide();
  $('#entertainment').click(function(e){
    e.preventDefault();
    $('.level2-container').slideToggle();
  });

});
