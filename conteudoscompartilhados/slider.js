(function(){

	'use strict';

	try {

	var parentCategories = document.getElementById("parent-categories-dropdown");
	var childCategories = document.getElementById("child-categories-dropdown");
	var submitCategories = document.getElementById("search-categories-button");

	submitCategories.onclick = function () {
		// performmaSetUrl();
		location.href = performmaSetUrl();
	};

	} catch (error) {

	}

	var performmaSetUrl = window.performmaSetUrl = function () {

		// <?php echo esc_url(home_url('/')); ?>
		var url = "/category/";
		var invalid = -1;
		var parentCategoriesValue = parentCategories.options[parentCategories.selectedIndex].value;
		var childCategoriesValue = childCategories.options[childCategories.selectedIndex].value;

		if (parentCategoriesValue != invalid && childCategoriesValue != invalid) {

			url = "/category/" +
				parentCategoriesValue + '/' +
				childCategoriesValue;

		} else if (childCategoriesValue != invalid) {

			url = "/category/" +
				childCategoriesValue;

		} else if (parentCategoriesValue != invalid) {

			url = "/category/" +
				parentCategoriesValue;
		}

		console.log(url);
		
		return url;
	}


})();



jQuery(document).ready(function () {

	jQuery('.owl-carousel').owlCarousel({
		margin: 30,
		smartSpeed: 900,
		nav: true,
		responsiveClass: true,
		navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 1,
			},
			768: {
				items: 5,
			}
		}
	});

	// Smooth scrolling using jQuery easing
	jQuery('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = jQuery(this.hash);
			target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				jQuery('html, body').animate({
					scrollTop: (target.offset().top - 54)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	jQuery('.js-scroll-trigger').click(function () {
		jQuery('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	jQuery('body').scrollspy({
		target: '#mainNav',
		offset: 56
	});

	// Collapse Navbar
	var navbarCollapse = function () {
		if (jQuery("#mainNav").offset().top > 100) {
			jQuery("#mainNav").addClass("navbar-shrink");
		} else {
			jQuery("#mainNav").removeClass("navbar-shrink");
		}
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	jQuery(window).scroll(navbarCollapse);

	// Hide navbar when modals trigger
	jQuery('.portfolio-modal').on('show.bs.modal', function (e) {
		jQuery('.navbar').addClass('d-none');
	})
	jQuery('.portfolio-modal').on('hidden.bs.modal', function (e) {
		jQuery('.navbar').removeClass('d-none');
	})

});