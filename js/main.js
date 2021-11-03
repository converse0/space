$(function () {
  $('.slider__box').slick({
    prevArrow:
      '<img class="slider__arrow slider__arrow-left" src="images/arrow-prev.svg" alt="prev arrow">',
    nextArrow:
      '<img class="slider__arrow slider__arrow-right" src="images/arrow-next.svg" alt="next arrow">',
  });
  $('.menu-btn').on('click', function () {
    $('.menu__list').toggleClass('active');
  });
});
