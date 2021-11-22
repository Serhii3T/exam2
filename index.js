// Click - nav link
$(".c-navigation__item a").on("click", function () {
  $(".c-navigation__item a").attr("id", "");
  $(this).attr("id", "active");
});

// Burger menu
$(".e-burger-menu").on("click", function () {
  if (!$(this).hasClass("active")) {
    // let heightHeader = $(".c-header").outerHeight();
    // $(".c-header__nav").css({ top: heightHeader + "px" });
    $(".c-header__nav").addClass("active");
    $(this).addClass("active");
    $(".bg-overlay").addClass("show");
    $("body").addClass("overflow");
  } else {
    // $(".c-header__nav").css({ top: "50px" });
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
if (dataInfoForm !=null) {
  let dataAr = unserialize(dataInfoForm);
}

function unserialize(data) {
  data = data.split('&');
  let response = {};
  for (let k in data){
      let newData = data[k].split('=');
      response[newData[0]] = newData[1];
  }
  return response;
}

// Google map
function initMap() {
  let myLat = { lat: 49.589082963382026, lng: 34.557623598157264 };
  let image = {
    url: "./assets/icon/common/beetroot-20x20.png",
    size: new google.maps.Size(20, 20),
  };
  let mapOptions = {
    // mapId: "8e0a97af9386fef",
    center: myLat,
    zoom: 17,
    mapTypeControl: false,
  };

  // Marker
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  let marker = new google.maps.Marker({position: myLat, map: map, icon: image, title: "Я Бурячок, не сомневайся",});

  // Info window
  const contentString =
    '<div id="content" class="map-title">' +
    '<div id="siteNotice" class="map-title__image">' +
    '<img src="./assets/images/beetroot.jpg" alt="beetroot">' +
    "</div>" +
    '<div id="bodyContent" class="map-title__info">' +
    '<h1 id="firstHeading" class="firstHeading">BEETROOT</h1>' +
    "<p><b>Beetroot Academy Poltava</b>, Інтенсивні ІТ-курси в <b>Шведсько-українській IT-школі</b>, " +
    "Розвивай власну кар'єру разом з Beetroot Academy. " +   
    "де піклуються про кожного студента. " + 
    "Отримуй нові навички в дружній атмосфері</p><br>" +
    '<p>Attribution: Beetroot Academy Poltava<br>' +
    'Tel: <a target="_blank" href="tel:380931702777"> +38 (093) 17 02 777 </a> <br>' +
    'Address: вулиця Котляревського 2а, Полтава, Полтавська область, 36000 <br>' +
    '<a target="_blank" href="https://beetroot.academy/?utm_source=GMB&utm_medium=Organic">' +
    "SITE: Beetroot.academy</a> " +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
    // $(".gm-style-iw-a").addClass("activ");
  });

  // Add a style-selector control to the map.
  const styleControl = document.getElementById("style-selector-control");
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);
  
  // Styles
  const styles = {
    default: [],
    silver: [
      {
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }],
      },
      {
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#f5f5f5" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#bdbdbd" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#dadada" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#c9c9c9" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
      },
    ],
    night: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
    retro: [
      { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#c9b2a6" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{ color: "#dcd2be" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ae9e90" }],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#93817c" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{ color: "#a5b076" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#447530" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#f5f1e6" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#fdfcf8" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#f8c967" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e9bc62" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{ color: "#e98d58" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [{ color: "#db8555" }],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#806b63" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [{ color: "#8f7d77" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ebe3cd" }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#b9d3c2" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#92998d" }],
      },
    ],
    hiding: [
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
    ],
  };
  
  // Set the map's style to the initial value of the selector.
  const styleSelector = document.getElementById("style-selector");
  map.setOptions({ styles: styles[styleSelector.value] });

  // Apply new JSON when the user selects a different style.
  styleSelector.addEventListener("change", () => {
    map.setOptions({ styles: styles[styleSelector.value] });
  });
}
// let directionsService = new google.maps.DirectionsService();
// let directionsDisplay = new google.maps.DirectionsRenderer();
// directionsDisplay.setMap(map);

// Footer submit email in local storage
$('.c-footer__form-mail').on('submit', function (e) {
  e.preventDefault();
  let valItem = $(this).find('input[name="mail"]').val()
  localStorage.setItem('infoSubscriptionForm', valItem);
})