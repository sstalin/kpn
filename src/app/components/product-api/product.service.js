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
      $http.get('/assets/data.json').then(function(response) {
        if(response.status == 200) {
          defered.resolve(response.data.product);
        }
      }, function(response) {
        defered.reject(response.data);
      });
      return defered.promise;
    }
  }

})();



