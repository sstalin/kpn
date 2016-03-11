(function() {
  'use strict';

  angular
    .module('kpn')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
