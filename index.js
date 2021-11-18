// Click - nav link
$(".c-navigation__item a").on("click", function () {
  $(".c-navigation__item a").attr("id", "");
  $(this).attr("id", "active");
});

// Burger menu
$(".e-burger-menu").on("click", function () {
  if (!$(this).hasClass("active")) {
    let heightHeader = $(".c-header").outerHeight();
    $(".c-header__nav").css({ top: heightHeader + "px" });
    $(".c-header__nav").addClass("active");
    $(this).addClass("active");
    $(".bg-overlay").addClass("show");
    $("body").addClass("overflow");
  } else {
    $(".c-header__nav").css({ top: "50px" });
    $(".c-header__nav").removeClass("active");
    $(this).removeClass("active");
    $(".bg-overlay").removeClass("show");
    $("body").removeClass("overflow");
  }
});

$(".c-navigation__btn, .bg-overlay").on("click", function () {
  $(".c-navigation__list").removeClass("active");
  $(".bg-overlay").removeClass("show");
  $("body").removeClass("overflow");
  $(".c-header__nav").removeClass("active");
  $(".e-burger-menu").removeClass("active");
  $(".c-header__nav").css({ top: "50px" });
});

// search BTN
$(".btn-search").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    e.preventDefault();
    $(this).addClass("active");
    $(".c-header__input-search").addClass("active");
    $(".c-header__search--input").addClass("active");
  } else {
  }
});

// Swiper doctors
const swiperX = new Swiper(".swiper-doctor", {
  direction: "horizontal",
  spaceBetween: 10,
  slidesPerView: 1,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: "auto",
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

// Swiper news
let swiper = new Swiper(".swipergrid", {
  direction: "horizontal",
  grabCursor: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      centeredSlides: true,
    },
    "@0.25": {
      slidesPerView: 1,
      grid: false,
    },
    "@0.50": {
      slidesPerView: 2,
      spaceBetween: 20,
      grid: {
        fill: "row",
        rows: 2,
      },
    },
  },
});


//  Tab show hidden
$(".section-our-services__btn-tab").on("click", function () {
  $(".hidden")
    .slideDown({
      duration: 400,
      complete: function () {
        $(".section-our-services__item.hidden").addClass("show");
        $(".section-our-services__item").removeClass("hidden");
      },
    });
    $(".show")
    .slideUp({
      duration: 400,
      complete: function () {
        $(".section-our-services__item.show").addClass("hidden");
        $(".section-our-services__item").removeClass("show");
      },
    });
});

// Tab change content
$('.section-our-services__item').on('click', function() {
  let dataId = $(this).attr('data-id');
  $('.section-our-services__item').removeClass('active');
  $(this).addClass('active');
   $('.section-our-services__content__item.active').animate({
     opacity: 0,
   }, {
     duration: 200,
     complete: function () {
       $('.section-our-services__content__item.active').hide().removeClass('active');
       $('.section-our-services__content__item.data-id-'+dataId).show().addClass('active').css({opacity: '1', display: 'flex'});
     }
   });
 });

// Form registry save in local Storage
$('.c-section-registry__form').on('submit', function (event) {
  event.preventDefault();
  let data = $(this).serialize();
  let valItem = $(this).find('input[name="phone"]').val()

  console.log(valItem);
  localStorage.setItem('infoSubmitForm', data);
})
let dataInfoForm = localStorage.getItem('infoSubmitForm');

let dataAr = unserialize(dataInfoForm);
console.log(dataAr);

function unserialize(data) {
  data = data.split('&');
  let response = {};
  for (let k in data){
      let newData = data[k].split('=');
      response[newData[0]] = newData[1];
  }
  return response;
}


// Footer submit email in local storage
$('.c-footer__form-mail').on('submit', function (e) {
  e.preventDefault();
  let valItem = $(this).find('input[name="mail"]').val()
  console.log(valItem);
  localStorage.setItem('infoSubscriptionForm', valItem);
})