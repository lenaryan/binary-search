var assert = require('chai').assert;
var expect = require('chai').expect;
var search = require('../search');

describe('Binary search function testing', function() {
    let arr = [1, 3, 5, 7, 8, 9, 15, 30, 34, 55];
    let num = 30;

    it('the first argument is an array', function() {
        assert.isArray(arr);
    })

    it('the second argument is a number', function () {
        assert.isNumber(num);
    })

    it('returns an element index', function () {
        expect(search(arr, num)).to.equal(7);
    })

    it('returns -1 if the first argument is not an array', function() {
        expect(search(10, num)).to.equal(-1);
    })

    it('returns -1 if the second argument is not a number', function () {
        expect(search(arr, 'a')).to.equal(-1);
    })

    it('returns -1 if the number is not in the array', function () {
        expect(search(arr, 4)).to.equal(-1);
    })

    it('throws an error if not every element of the array is a number', function () {
        expect(function() {
            search([1, 2, 'a'], num)
        }).to.throw(TypeError, 'array should include numbers');
    })
})