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
  }

})();


