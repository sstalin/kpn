(function() {
  'use strict';

  angular
    .module('kpn')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('product', {
        url: '/product',
        abstract: true,
        templateUrl: 'app/product/product.html',
        controller: 'ProductController',
        controllerAs: 'vm',
        resolve: {
          data: function(productInfo) {
            return productInfo.get();
          }
        }
      })
      .state('product.detail', {
        url: '/detail',
        views: {
          "subscriptions" : {
            templateUrl: 'app/product/subscriptions.html'
          },
          "receipt" : {
            templateUrl: 'app/product/receipt.html'
          },
          "preview": {
            templateUrl: 'app/product/preview.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/product/detail');
  }

})();
