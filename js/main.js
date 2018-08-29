$(document).ready(function(){

	$(".filter-1").click(function(e) {
	  e.preventDefault();
	  $(".filter-1").removeClass('active');
	  $(this).addClass('active');
	})


	$(".ct-btn").click(function() {
		e = $(this).closest('.cat-items').find('.hidden');
	    if(!e.is(':visible')) {
	    $('.hidden').hide();
	    e.show();}
	});

	var austDay = new Date(2030, 6-1, 25);
    $('#defaultCountdown').countdown({until: austDay});

});