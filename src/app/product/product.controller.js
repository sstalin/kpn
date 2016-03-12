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
    }

    function discounted(sub){
      var diff = parseFloat(sub.subReg) - parseFloat(sub.subDiscount);
      return  parseFloat(diff).toFixed(2);
    }
  }

})();


