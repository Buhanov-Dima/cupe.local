

$(".filter-1").click(function(e) {
  e.preventDefault();
  $(".filter-1").removeClass('active');
  $(this).addClass('active');
})