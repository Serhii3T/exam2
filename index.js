// click - nav link
$('.c-navigation__item a').on('click', function() {
  $('.c-navigation__item a').attr('id', '');
  $(this).attr('id', 'active')
});

// Burger menu
$('.e-burger-menu').on('click', function() {
  $('.c-navigation__list').addClass('active');
  $('.bg-overlay').addClass('show');
  $('body').addClass('overflow');
});

$('.c-navigation__btn, .bg-overlay').on('click', function() {
  $('.c-navigation__list').removeClass('active');
  $('.bg-overlay').removeClass('show');
  $('body').removeClass('overflow');
});