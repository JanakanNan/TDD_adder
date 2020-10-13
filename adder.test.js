const adder = require('./adder');

describe('adder', () => {
    it('should add two number', function () {
        expect(adder(1,2)).toBe(3);
    });
    it('should return a sole input', function () {
        expect(adder(5)).toBe(5);
    })
    it('should add three numbers', function () {
        expect(adder(1,2,3)).toBe(6);
    });
    it('should not have any numbers', function(){
        expect(adder()).toBe(0)
    })
    it('should add any numbers', function () {
        expect(adder(1,2,3,4,5,6,7)).toBe(28)
    });
})