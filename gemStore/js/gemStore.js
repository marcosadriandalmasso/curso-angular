(function() {
    var gem = { name: 'Azurite', price: 2.95, canPurchase: false, soldOut: false };
    
    angular
        .module('gemStore', [])
        .controller('StoreController', function($log) {
            this.product = gem;
            this.purchase = purchase;

            function purchase() {
            	$log.warn('StoreController.purchase NOT_IMPLEMENTED');
            }
        });
    
})()