// ---------------------------------------------------------
// Custom JavaScript
// ---------------------------------------------------------
// ---------------------------------------------------------
// Full screen Bootstrap carousel
// ---------------------------------------------------------
/*var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});*/

$(document).ready(function () {
// ---------------------------------------------------------
// Animation navbar
// ---------------------------------------------------------
    $('.navbar-fixed-top').affix({
        offset: {
            top: 200,
        }
    })
// ---------------------------------------------------------
// Swipe carousel Bootstrap
// ---------------------------------------------------------
    $(".swipe-carousel").swipe({
        swipeLeft: function () {
            $(".swipe-carousel").swipe("enable");
            $(this).carousel('next');

        },
        swipeRight: function () {
            $(".swipe-carousel").swipe("enable");
            $(this).carousel('prev');
        },
        preventDefaultEvents: false,
        threshold: 0,
        allowPageScroll: "vertical"
    });
	$('.carousel').carousel({
	  interval: 7000,
    cycle: true
	})
// ---------------------------------------------------------
// Preloder 
// ---------------------------------------------------------
    $('#status').fadeOut(); 
    $('#preloader').delay(450).fadeOut('slow'); 

// ---------------------------------------------------------
// Carousel
// ---------------------------------------------------------
  $("#product").owlCarousel({
    autoPlay: 4000,
    stopOnHover: true,
    pagination: false,
    navigation: true,
    slideSpeed: 200,
    paginationSpeed: 200,
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    items: 3, 
    itemsDesktop: [1199,3], 
    itemsDesktopSmall: [979,2], 
    itemsTablet: [640,2], 
    itemsMobile: [480,1]
  }); 

  $("#customers").owlCarousel({
    autoPlay: 3000,
    stopOnHover: true,
    pagination: false,
    slideSpeed: 200,
    paginationSpeed: 200,
    items: 6, 
    itemsDesktop: [1199,4], 
    itemsDesktopSmall: [979,4], 
    itemsTablet: [640,2], 
    itemsMobile: [480,1]
  }); 
// ---------------------------------------------------------
// Parallax window 
// ---------------------------------------------------------
  $('.parallax-container').parallax({
      speed: 0.5, // Efecto de velocidad del Parallax
      imgSrc: null, // Directorio de la imagen
      imgWidth: null, // Anchura de la imagen
      imgHeight: null, // Altura de la imagen
      enableTransform: true, // Activa las transformaciones
      zIndex: -100, // Z-index para el contenedor
  });
// ---------------------------------------------------------
// Inicializa efectos de animación
// ---------------------------------------------------------
  new WOW().init();
});

