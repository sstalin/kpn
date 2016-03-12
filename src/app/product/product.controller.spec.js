describe("Product controller", function(){
  var controller, mockData;
  beforeEach(module('kpn'));
  beforeEach(inject(function(_$controller_){
      mockData = {
        product:{
          name:"mock"
        }
      };
    controller = _$controller_('ProductController', {data: mockData});

  }));

  it('should be defined', function(){
    expect(controller).toBeDefined();

  });

  it('should bind to data', function(){
    expect(controller.product).toEqual(jasmine.any(Object));
    expect(controller.product.product.name).toBe('mock');
  });

  it('should have discounted method', function(){
    var mock = {
      "subReg": 44,
      "subDiscount": 10
    };
    expect(controller.discounted).toEqual(jasmine.any(Function));
    expect(controller.discounted(mock)).toEqual('34.00');
  });

});
