$(document).ready(function () {
  $('.banner-slider').slick({
    autoplay: true,
    prevArrow: '<div class="slick-nav prev-arrow"></div>',
    nextArrow: '<div class="slick-nav next-arrow"></div>',
    dots: true,
    autoplaySpeed:3500
  });

  $('.best-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    dots: true,
    pauseOnHover: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    },
    {
      breakpoint: 991,
      settings: {
          slidesToShow: 3
      },
  },
     {
        breakpoint: 520,
        settings: {
            slidesToShow: 1
        },
    }]
  });
});




//
$('.product-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  asNavFor: '.product-thumb'
});
$('.product-thumb').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product-slider',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  responsive: [{
      breakpoint: 659,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1
      }
  }, {
      breakpoint: 480,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  }]
});