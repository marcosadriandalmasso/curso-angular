(function() {

    'use strict';
    
    angular
        .module('gemStore')
        .directive('productSpecs', productSpecs);
        
    function productSpecs() {
        
        var directive = {

            restrict: 'A',
            templateUrl: 'productSpecs.html'
        }
        
        return directive;
        
    }
    
})();