var vows = require('vows'),
    assert = require('assert');

var $$ = require('../'); 

vows.describe('IO Monad')
  .addBatch({
    'return function': {
      topic: function () {
	$$._return('hello')(this.callback);
      },
      'return returns monadic value': function (value) {
	assert.equal(value, 'hello');
      }
    }
  })
  .export(module);