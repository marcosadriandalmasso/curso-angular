(function() {
    var gems = [
      { name: 'Azurite', price: 2.95, canPurchase: false, soldOut: false  },
      { name: 'Bloodstone', price: 5.95, canPurchase: false, soldOut: false  },
      { name: 'Zircon', price: 3.95, canPurchase: false, soldOut: false  },
    ];
    
    angular
        .module('gemStore', [])
        .controller('StoreController', function($log) {
            this.products = gems;
            this.purchase = purchase;

            function purchase(product) {
            	$log.warn('StoreController.purchase NOT_IMPLEMENTED. Trying to buy %s', product.name);
            }
        });
    
})();