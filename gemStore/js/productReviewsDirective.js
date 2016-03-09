(function() {

    'use strict';
    
    angular
        .module('gemStore')
        .directive('productReviews', productReviews);
        
    function productReviews() {
        
        var directive = {

            restrict: 'E',
            templateUrl: 'productReviews.html'
        }
        
        return directive;
        
    }
    
})();