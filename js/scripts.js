$(document).ready(function(){

	// Mobile nav
	$('.menu-opener').bigSlide({
		side: 'right',
		easyClose: true,
		menuWidth: '260px'
	});

	// Parallax
	$('[id*="parallax-viewport"]').each(function(){
		var scene = document.getElementById( $(this).attr('id') );
		var parallaxInstance = new Parallax(scene);
	});

	// Scroll to anchor
	$("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = $('.header').innerHeight();
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
		e.preventDefault();
	});

	// Sticky Header
	var isSticky = false;
	$(window).scroll(function(){
		if( !isSticky && $(window).scrollTop() > 200){
			$('.header').addClass('sticky');
			isSticky = true;
		} else if(isSticky && $(window).scrollTop() <= 200){
			$('.header').removeClass('sticky');
			isSticky = false;
		}
	});

	// Sliders
	$('.reviews-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					adaptiveHeight: true
				}
			},
		// 	{
		// 		breakpoint: 576,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			dots: true,
		// 			arrows: false,
		// 			infinite: true
		// 		}
		// 	}
		]
	});

	// TODO: ↓↓↓ remove this script ↓↓↓
	// Current menu item highlithing
	$(function () {
		var location = window.location.href;
		var cur_url = location.split('/').pop();

		$('.top-nav li, .panel-nav li, .footer-nav li').each(function () {
			var link = $(this).find('a').attr('href');

			if (cur_url == '') {
				cur_url = 'index.php';
			}

			if (cur_url == link)
			{
				$(this).addClass('current-menu-item');
				$(this).parents('li').addClass('current-menu-parent');
			}
		});
	});
});