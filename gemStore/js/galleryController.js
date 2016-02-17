(function() {
    'use strict';
    
    angular
        .module('gemStore')
        .controller('GalleryController', GalleryController);
        
    function GalleryController() {
        var gc = this;
        gc.current = 0;
        gc.setCurrent = setCurrent;
        
        function setCurrent(current) {
            gc.current = current || 0;
        }
    }
    
})();