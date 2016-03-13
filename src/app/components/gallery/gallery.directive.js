(function() {
  'use strict';

  angular
    .module('kpn')
    .directive('gallery', gallery);

  /* @ngInject */
  function gallery() {
    var directive = {
      templateUrl: 'app/components/gallery/gallery.template.html',
      bindToController: true,
      controller: GalleryController,
      controllerAs: 'gallery',
      link: link,
      restrict: 'AE',
      scope: {
        images: '='
      }
    };
    return directive;

    function link(scope, element, attrs, ctrl) {
      ctrl.activate();
    }
  }

  /* @ngInject */
  function GalleryController() {
    this.activate = activate;

    function activate() {
       this.active = this.images[0];
    }
  }

})();


