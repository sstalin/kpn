describe('Product service Api', function() {
  var service, $httpBackend, productRequest;
  beforeEach(module('kpn'));
  beforeEach(inject(function(productInfo, _$httpBackend_) {
    service = productInfo;
    $httpBackend = _$httpBackend_;
    productRequest = $httpBackend.whenGET('/assets/data.json').respond(200, {product:{name:"mock"}});
  }));

  it('should be defined', function(){
    expect(service).toBeDefined();
    expect(service.get).toEqual(jasmine.any(Function));

  });

  it('should make Api call', function(){
    var product;
    service.get().then(function(data){
        product = data;
    });
    expect(product).toBeUndefined();
    $httpBackend.flush();
    expect(product.name).toEqual('mock');
  });

  it('should fail with an error', function(){
    var product, errorMessage;
    productRequest.respond(404, "Not found");
    service.get().catch(function(reason){
      errorMessage = reason;
    });
    expect(product).toBeUndefined();
    $httpBackend.flush();
    expect(product).toBeUndefined();
    expect(errorMessage).toBe('Not found');
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
});
