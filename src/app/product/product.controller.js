(function() {
  'use strict';

  angular
    .module('kpn')
    .controller('ProductController', ProductController);

  /* @ngInject */
  function ProductController(data) {
    var vm = this;
    vm.title = 'ProductController';

    activate();

    ////////////////

    function activate() {
      vm.data = data;
    }
  }

})();


