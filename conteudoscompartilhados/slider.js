
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

	var performmaSetUrl = window.performmaSetUrl = function () {

		// <?php echo esc_url(home_url('/')); ?>

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
	}

	try {

		var url;

		var parentCategories = document.getElementById("parent-categories-dropdown");
		var childCategories = document.getElementById("child-categories-dropdown");
		var submitCategories = document.getElementById("search-categories-button");

		submitCategories.onclick = function () {
			performmaSetUrl();
			location.href = url;
		};

		parentCategories.onchange = performmaSetUrl;
		childCategories.onchange = performmaSetUrl;

		performmaSetUrl();

	} catch (error) {

	}

	/*!
 * Start Bootstrap - Agency v5.0.2 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2018 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 */

!function(o){"use strict";o('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=o(this.hash);if((a=a.length?a:o("[name="+this.hash.slice(1)+"]")).length)return o("html, body").animate({scrollTop:a.offset().top-54},1e3,"easeInOutExpo"),!1}}),o(".js-scroll-trigger").click(function(){o(".navbar-collapse").collapse("hide")}),o("body").scrollspy({target:"#mainNav",offset:56});var a=function(){100<o("#mainNav").offset().top?o("#mainNav").addClass("navbar-shrink"):o("#mainNav").removeClass("navbar-shrink")};a(),o(window).scroll(a),o(".portfolio-modal").on("show.bs.modal",function(a){o(".navbar").addClass("d-none")}),o(".portfolio-modal").on("hidden.bs.modal",function(a){o(".navbar").removeClass("d-none")})}(jQuery);


});