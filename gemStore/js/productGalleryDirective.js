(function() {

	'use strict';

	angular
		.module('gemStore'),
		.directive('productGallery', ProductGallery);

	function ProductGallery() {

		var directive = {
			
			restrict: 'E',
			templateUrl: 'productGallery.html',
			controller: GalleryController,
			controllerAs: 'gallery'

		}

		return directive;

	}

	function GalleryController() {

		var vm = this;
		vm.current = 0;
		vm.setCurrent = setCurrent;

		function setCurrent(current) {
			vm.current = current || 0;
		}

	}
	
})();