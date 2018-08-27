

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