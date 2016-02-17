(function() {
    'use strict';
    
    angular
        .module('gemStore')
        .controller('TabController', TabController);
        
    function TabController() {
        var tc = this;
        tc.tab = 1;
        tc.setTab = setTab;
        tc.isSet = isSet;
        
        function setTab(tab) {
            tc.tab = tab;
        }
        
        function isSet(tab) {
            return tc.tab === tab;
        }
    }
    
})();