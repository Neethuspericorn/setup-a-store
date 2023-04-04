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

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    vertical: true,
    responsive: [{
      breakpoint: 1380,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }
    },]
  });

  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });
  
});