(function () {

	console.log('Performma Card Slider');

	window.setSlider = function (selector) {

		console.log('setting setSlider to ', selector);

		$(selector).owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:5
				}
			}
		})

	}

})();

