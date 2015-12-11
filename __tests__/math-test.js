// Load the file that exports the functionality to test
jest.dontMock('../app/math');  // Don't create mock functions
var math = require('../app/math');

// Test to verify the math.sum() function
describe('sum', function() {
  it('defines a sum function', function() {
    expect(math.sum).toBeDefined();
  });

  it('adds 5 + 2 to equal 7', function() {
    expect(math.sum(2, 5)).toBe(7);
  });
});

// Test to verify the math.difference() function
describe('difference', function() {
  it('defines a difference function', function() {
    expect(math.difference).toBeDefined();
  });

  it('subtracts 5 - 2 to equal 3', function() {
    expect(math.difference(5, 2)).toBe(3);
  });

  it('subtracts 2 - 5 to equal -3', function() {
    expect(math.difference(2, 5)).toBe(-3); 
  });
});

// Test to verify the math.product() function
describe('product', function() {
  it('defines a product function', function() {
    expect(math.product).toBeDefined();
  });

  it('mutiplies 2 * 5 to equal 10', function() {
    expect(math.product(2, 5)).toBe(10);
  });
});

// Test to verify the math.quotient() function
describe('quotient', function() {
  it('defines a quotient function', function() {
    expect(math.quotient).toBeDefined();
  });

  it('divides 10 / 2 to equal 5', function() {
    expect(math.quotient(10, 2)).toBe(5);
  });
});

describe('squared', function() {
  it("defines a squared function", function() {
    expect(math.squared).toBeDefined();
  });

  it("multiplies a number by itself", function() {
    expect(math.squared(3)).toBeDefined(9);
  })
});