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


var elem = document.getElementById('elem');
elem.addEventListener('click',function(){
  anime({
    targets: elem,
    translateX: 250
  })
})
