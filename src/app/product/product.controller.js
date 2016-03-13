(function() {
  'use strict';

  angular
    .module('kpn')
    .controller('ProductController', ProductController);

  /* @ngInject */
  function ProductController(data) {
    var vm = this;
    vm.title = 'ProductController';
    vm.discounted = discounted;
    vm.tagPrice = tagPrice;

    activate();

    ////////////////

    function activate() {
      vm.product = data;
      vm.activeSubscription = data.subscriptions[0];
    }

    function discounted(sub){
      var subscription = sub || vm.activeSubscription;
      var diff = parseFloat(subscription.regular) - parseFloat(subscription.discount);
      return  parseFloat(diff).toFixed(2);
    }

    function tagPrice(p){
      var price = parseFloat(p || vm.activeSubscription.deviceDiscountPrice);
      // case of fraction
      if((price - Math.floor(price)) > 0){
        return price.toFixed(2);
      }
      return parseInt(price) + ',-';

    }
  }

})();


