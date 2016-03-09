(function() {

    'use strict';
    
    angular
        .module('gemStore')
        .directive('productDescription', productDescription);
        
    function productDescription() {
        
        var directive = {
            restrict: 'E',
            templateUrl: 'productDescription.html'
        }
        return directive;
        
    }
    
})();