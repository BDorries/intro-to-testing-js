// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane" when Jane is passed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane");
    });
    it('should return the string "Hello, Alex" when Alex is passed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex");
    });
    it('should return the string "Hello, Pat" when Pat is passed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat");
    });
    it('should return the string "Hello, World!" when true is passed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when false is passed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return false if 4 is passed', function() {
        expect(isFive(4)).toBe(false);
    });
    it("should return false if '5' is passed", function() {
        expect(isFive('5')).toBe(false);
    });
    it("should return false if 'Hello' is passed", function() {
        expect(isFive("Hello")).toBe(false);
    });
});

describe('isEven', function() {
    it('should be a defined function', () => {
        expect(typeof isEven).toBe('function');
    });
    it('should return true when passed 2', () => {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', () => {
        expect(isEven(-4)).toBe(true);
    });
    it('should return true when passed "8"', () => {
        expect(isEven("8")).toBe(true);
    });
    it('should return true when passed 0', () => {
        expect(isEven(0)).toBe(true);
    });
    it('should return false when passed the number 3', () => {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed a non-numeric string like "banana"', () => {
        expect(isEven("banana")).toBe(false);
    });

});

describe('isVowel', function(){
   it(`should be a defined function`, () => {
       expect(typeof isVowel).toBe('function');
   });
   it("should return true if 'a' is passed", () => {
       expect(isVowel('a')).toBe(true);
   })
});