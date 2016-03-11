(function() {
  'use strict';

  angular
    .module('kpn')
    .factory('productInfo', productInfo);


  /* @ngInject */
  function productInfo($http, $q) {
    var service = {
      get: get
    };
    return service;

    ////////////////

    function get() {
      var defered = $q.defer();

      return defered.promise;
    }
  }

})();



