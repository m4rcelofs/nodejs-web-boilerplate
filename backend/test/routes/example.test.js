var app = require('../.././index'),
    request = require('supertest').agent(app.listen());


describe('Example routes', function() {
  it('should exist', function(done) {
    request
      .get('/example')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});