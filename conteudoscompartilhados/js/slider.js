
'use strict';

jQuery(document).ready(function () {

	try {

		var parentCategories = document.getElementById('parent-categories-dropdown');
		var childCategories = document.getElementById('child-categories-dropdown');
		var submitCategories = document.getElementById('search-categories-button');
		var marcarTodosCheckbox = document.getElementById('marcar-todos-checkbox');

		if (submitCategories)
			submitCategories.onclick = function () {
				location.href = performmaSetUrl();
			};

		if (marcarTodosCheckbox)
			marcarTodosCheckbox.onclick = function () {
				marcarTodos(marcarTodosCheckbox.checked);
			};

	} catch (error) {
		// faça nada
	}


	function performmaSetUrl() {

		var url = '/category/todos/';
		var invalid = -1;
		var parentCategoriesValue = parentCategories.options[parentCategories.selectedIndex].value;
		var childCategoriesValue = childCategories.options[childCategories.selectedIndex].value;

		if (parentCategoriesValue != invalid && childCategoriesValue != invalid) {

			url = '/category/' +
				parentCategoriesValue + '/' +
				childCategoriesValue;

		} else if (childCategoriesValue != invalid) {

			url = '/category/' +
				childCategoriesValue;

		} else if (parentCategoriesValue != invalid) {

			url = '/category/' +
				parentCategoriesValue;
		}

		try {
			var checkboxValues = [];

			jQuery('#' + parentCategoriesValue + '-' + childCategoriesValue + ' .filter-tag input[type="checkbox"]:checked').each(function (index, elem) {
				checkboxValues.push(jQuery(elem).val());
			});

			url = url + ((checkboxValues && checkboxValues.length) ? '?tags=' + checkboxValues.join(',') : '');

		} catch (e) {
			// faça nada
		}

		return url;
	}

	function marcarTodos(checked) {

		var parentCategoriesValue = parentCategories.options[parentCategories.selectedIndex].value;
		var childCategoriesValue = childCategories.options[childCategories.selectedIndex].value;

		if (checked) {
			document.getElementById('marcar-todos-label').innerHTML = 'Desmarcar Todos';
		} else {
			document.getElementById('marcar-todos-label').innerHTML = 'Marcar Todos';
		}

		jQuery('#' + parentCategoriesValue + '-' + childCategoriesValue + ' .filter-tag input[type="checkbox"]').each(function (index, elem) {
			jQuery(elem).prop('checked', checked);
		});

	}

	/** 
	 * Slider
	 **/
	function performmaCarousel(element, xs, sm, md, center, loop, autoplay) {

		// jQuery('.owl-carousel')
		element.owlCarousel({
			margin: 30,
			smartSpeed: 900,
			nav: true,
			center,
			loop,
			autoplay,
			responsiveClass: true,
			navText: ['<i class=\'fa fa-chevron-left\'></i>', '<i class=\'fa fa-chevron-right\'></i>'],
			responsive: {
				0: {
					items: xs,
				},
				480: {
					items: sm,
				},
				768: {
					items: md,
				}
			}
		});

	}

	performmaCarousel(jQuery('#destaques .owl-carousel'), 1, 1, 5, true, false, true);
	performmaCarousel(jQuery('#lancamentos .owl-carousel'), 1, 1, 5, false, false, false);
	performmaCarousel(jQuery('#mais-acessados .owl-carousel'), 1, 1, 5, false, false, false);


	/**
	 * EFEITOS DE SCROLL
	 */

	// Smooth scrolling using jQuery easing
	jQuery('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = jQuery(this.hash);
			target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				jQuery('html, body').animate({
					scrollTop: (target.offset().top - 54)
				}, 1000, 'easeInOutExpo');
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	jQuery('.js-scroll-trigger').click(function () {
		jQuery('.navbar-collapse').collapse('hide');
	});

	if (document.getElementById('mainNav')) {

		// Activate scrollspy to add active class to navbar items on scroll
		jQuery('body').scrollspy({
			target: '#mainNav',
			offset: 56
		});

		// Collapse Navbar
		var navbarCollapse = function () {
			if (jQuery('#mainNav').offset().top > 100) {
				jQuery('#mainNav').addClass('navbar-shrink');
			} else {
				jQuery('#mainNav').removeClass('navbar-shrink');
			}
		};
		// Collapse now if page is not at top
		navbarCollapse();
		// Collapse the navbar when page is scrolled
		jQuery(window).scroll(navbarCollapse);

	}

	// Hide navbar when modals trigger
	jQuery('.portfolio-modal').on('show.bs.modal', function () {
		jQuery('.navbar').addClass('d-none');
	});

	jQuery('.portfolio-modal').on('hidden.bs.modal', function () {
		jQuery('.navbar').removeClass('d-none');
	});

});