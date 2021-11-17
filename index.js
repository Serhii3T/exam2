// Click - nav link
$('.c-navigation__item a').on('click', function () {
    $('.c-navigation__item a').attr('id', '');
    $(this).attr('id', 'active')
});

// Burger menu
$('.e-burger-menu').on('click', function () {
    if (!$(this).hasClass('active')) {
        let heightHeader = $('.c-header').outerHeight();
        $('.c-header__nav').css({top: heightHeader + 'px'});
        $('.c-header__nav').addClass('active');
        $(this).addClass('active');
        $('.bg-overlay').addClass('show');
        $('body').addClass('overflow');
    } else {
        $('.c-header__nav').css({top: '50px'});
        $('.c-header__nav').removeClass('active');
        $(this).removeClass('active');
        $('.bg-overlay').removeClass('show');
        $('body').removeClass('overflow');
    }
});

$('.c-navigation__btn, .bg-overlay').on('click', function () {
    $('.c-navigation__list').removeClass('active');
    $('.bg-overlay').removeClass('show');
    $('body').removeClass('overflow');
    $('.c-header__nav').removeClass('active');
    $('.e-burger-menu').removeClass('active');
    $('.c-header__nav').css({top: '50px'});
});

// search BTN
$('.btn-search').on('click', function (e) {
    if (!$(this).hasClass('active')) {
        e.preventDefault();
        $(this).addClass('active');
        $('.c-header__input-search').addClass('active');
        $('.c-header__search--input').addClass('active');
    } else {

    }
});

// Swiper
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    spaceBetween: 10,
    slidesPerView: 1,
    grabCursor: true,
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 'auto',
          spaceBetween: 20,
          centeredSlides: true,
        },
        "@0.55": { 
            slidesPerView: 1,
            spaceBetween: 20,
          },
        "@0.75": { 
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });

$('.c-footer__btn-mail').on('submit', function (e) {
  let inputMail = document.getElementById('#input-mail').value;
  localStorage.setItem('inputMail', JSON.stringify(inputMail));
});