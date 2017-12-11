svg4everybody();

// @include('detect.js')
// @include('globals.js')

$('.small-slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.big-slider',
	responsive: [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
	],
});

$('.big-slider').slick({
	fade: true,
	arrows: false,
	asNavFor: '.small-slider',
	focusOnSelect: true,
});
