$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500,
      arrows: false,
      dots: true,
      pauseOnHover: false,
  });

  $('.review-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
});

});