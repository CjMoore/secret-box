const assert = require('chai').assert;
const app = require('../server');
const request = require('request')

describe('Server', () => {

  before(function(done){
    this.port = 9876;
    this.server = app.listen(this.port, function(err, result) {
      if (err) { return done(err); }
      done();
    });
  });

  after( function(){
    this.server.close();
  });

  it('should exist', () => {
    assert(app);
  });

});
