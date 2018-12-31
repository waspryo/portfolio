/*===================================
              preloader
===================================*/
$(window).on('load', function() { // make sure that whole site is loaded
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
/*===================================
              Portfolio
===================================*/
$(window).on('load', function () {
  $("#isotope-container").isotope({
  });
  // filter items on button click
  $('.filter-button-group').on('click', 'button', function(){
    // get filter Value
    var filterValue = $(this).attr('data-filter');
    // filter portfolio
    $("#isotope-container").isotope({
        filter: filterValue

    });
    //active button
    $('.filter-button-group').find('.active').removeClass('active');
    $(this).addClass('active');
  });
});
/*===================================
              Stats
===================================*/
$(function() {
    $(".counter").counterUp({
          delay: 10,
          time: 2000
      });
});


$(function() {

  $("#progress-elements").waypoint(function() {

    $(".stats-item").each(function() {
      $(this).animate({
        width: $(this).attr("aria-valuenow") + "%"
      }, 2000);
    });

    this.destroy();
  }, {
    offset: 'bottom-in-view'
  });

});
/*===================================
              Animation
===================================*/
// animate on scroll
$(function() {
  new WOW().init();
});

// Home animation on page load
$(window).on('load', function () {
  $("#home-heading-1").addClass("animated fadeInDown");
  $("#home-heading-2").addClass("animated fadeInLeft");
  $("#home-intro").addClass("animated zoomIn");
  $("#heading-about").addClass("animated zoomIn");
  $("#profile-left").addClass("animated slideInLeft");
  $("#profile-right").addClass("animated slideInRight");
  $("#heading-portfolio").addClass("animated fadeInDown");
  $("#heading-experience").addClass("animated fadeInDown");
});
