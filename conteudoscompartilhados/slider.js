
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


});