$(function() {

  $('.top-slider__list').slick({
    dots: true,
    arrows: false
  });

  $('.slider-partners__list').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false
  });

  var mixer = mixitup('.products__content');
  var mixer = mixitup('.design__list');
});