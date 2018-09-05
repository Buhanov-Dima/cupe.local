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

    $(".detail-slaider").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
	});

    $(".company-slaider").owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    navText:false,
    responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $(".slaider-reviews").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:true,
    dots:false,
    items:1
    });

    $(".slaider-cupe").owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    navText:false,
    dots:true,
    items:1
    });

    $(".slaider-cupe-2").owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText:false,
    responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });


    $('.slide__link').on('click', function(e){
        e.preventDefault();
        console.log('Slide show prew On click! \n');

          var $this = $(this),
              item = $this.closest('.slide__item'),
              wrap = $this.closest('.slideShow'),
              gap = wrap.find('.slide__gap'),
              itemPath = $this.find('img').attr('src'),
              dur = 500;

          if(!item.hasClass('activSl')){
            item.addClass('.activSl').siblings().removeClass('activSl');
            gap.find('img').fadeOut(dur, function(){
              $(this).attr('src', itemPath).fadeIn(dur);
            });
          }         

	});

    wow = new WOW({
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       40,
        mobile:       false,
        live:         true,
    });
    wow.init();



    $('.tab-box a').click(function(e) {
        e.preventDefault();
        $('.tab-box .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.cupe-b2-txt1').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    })
});