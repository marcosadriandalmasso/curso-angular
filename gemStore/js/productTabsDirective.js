(function() {

	'use strict';

	angular
		.module('gemStore')
		.directive('productTabs', ProductTabs);

	function ProductTabs() {

		var directive = {

			restrict: 'E',
			templateUrl: 'productTabs.html',
			controller: TabsController,
			controllerAs: 'tab'
		
		}

		return directive;
	}

	function TabsController() {

		var vm = this;
		vm.tab = 1;
		vm.setTab = setTab;
		vm.isSet = isSet;

		function setTab(tab) {
			vm.tab = tab;
		}

		function isSet(tab) {
			return vm.tab === tab;
		}

	}
	
})();