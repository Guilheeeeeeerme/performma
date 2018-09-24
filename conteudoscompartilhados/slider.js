
jQuery(document).ready(function () {
	jQuery('.owl-carousel').owlCarousel({
		items: 5,
		margin: 30,
		autoplay: true,
		nav: true,
		smartSpeed: 900,
		navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		responsive : {
			0 : {
				items: 1,
			},
			480 : {
				items: 2,
			},
			768 : {
				items: 5,
			}
		}
	});
});