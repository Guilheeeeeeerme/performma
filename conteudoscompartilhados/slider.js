
jQuery(document).ready(function () {
	jQuery('.owl-carousel').owlCarousel({
		margin: 30,
		smartSpeed: 900,
		nav:true,
		responsiveClass:true,
		navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		responsive : {
			0 : {
				items: 1,
			},
			480 : {
				items: 1,
			},
			768 : {
				items: 5,
			}
		}
	});
});