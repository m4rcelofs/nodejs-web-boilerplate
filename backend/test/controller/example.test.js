var expect = require('chai').expect,
    controller = require('../.././controller/example');


describe('Example Controller', function() {
  describe('#list()', function() {
    it('should return an object', function() {
      var result = controller.list();
      expect(result).to.exist;
      expect(result).to.be.an('object');
      expect(result).to.not.be.empty;
    });

    it('should have a string in it', function() {
      var result = controller.list().hello;
      expect(result).to.exist;
      expect(result).to.be.a('string');
      expect(result).to.not.be.empty;
      expect(result).to.equal('world');
    });
  });
});