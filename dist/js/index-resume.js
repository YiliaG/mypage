(function($) {

	"use strict";


	$('.main-menu a').click(function () {
		var $target = $(this.hash);
		var targetOffset = $target.offset().top;
		$('html,body').animate({
				scrollTop: targetOffset
			},
			1000);
	});

	$('.toggle-menu').click(function(){
        $('.show-menu').stop(true,true).slideToggle();
        return false;
    });



	$("#owl-demo").owlCarousel({
		items : 1,
		lazyLoad : true,
		navigation : true
	});

})(jQuery);