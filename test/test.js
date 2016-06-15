var assert = require('chai').assert;
var gn = require('guess-note');

describe('Function guessNote()', function () {
	it('should return note number from frequency number', function () {
		assert.equal(0, gn.guessNote(440, 440));
		assert.equal(1, gn.guessNote(466, 440));
	});
});