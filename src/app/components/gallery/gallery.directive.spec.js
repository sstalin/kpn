describe('Gallery directive', function(){
  var el, scope, ctrl;
  beforeEach(module('kpn'));
  beforeEach(inject(function($compile, $rootScope){
    scope = $rootScope.$new();
    scope.vm = {
      product: {
        images:[{name:'front'}]
      }
    };
    el = angular.element('<gallery images="vm.product.images"></gallery>');

    $compile(el)(scope);
    scope.$digest();
    ctrl = el.controller('gallery');
  }));

  it('should be compiled', function() {
    expect(el.html()).not.toEqual(null);
  });

  it('should bind to controller', function(){
    expect(ctrl).toEqual(jasmine.any(Object));
    expect(ctrl.activate).toEqual(jasmine.any(Function));
  });

  it('should set hero image', function(){
    expect(ctrl.active.name).toBe('front');
  });

});
