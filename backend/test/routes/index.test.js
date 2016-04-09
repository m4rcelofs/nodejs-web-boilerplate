var app = require('../.././index'),
    request = require('supertest').agent(app.listen());


describe('Index', function() {
  it('should exist', function(done) {
    request
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});
