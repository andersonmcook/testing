// Load the file that exports the functionality to test
jest.dontMock('../app/textarea');  // Don't create mock functions
var textarea = require('../app/textarea');

describe('verifyAlphaNumeric', function() {
  it('defines verifyAlphaNumeric', function() {
    expect(textarea.verifyAlphaNumeric).toBeDefined();
  });

  it("only alpha numeric characters. spaces are not alpha numeric", function() {
    expect(textarea.verifyAlphaNumeric("hello there!")).toBe(false);
  });
});

describe('checkWordCount', function() {
  it('defines checkWordCount', function() {
    expect(textarea.checkWordCount).toBeDefined();
  });

  it("tests to see if there are 100 words", function() {
    expect(textarea.checkWordCount("hello there my boy")).toBe(true);
  });

  it("tests to see if there are 100 words", function() {
    expect(textarea.checkWordCount("a a a aa a a a a a a a a a a a a a a aa a a a a a a a a a a a a a a aa a a a a a a a a a a a a a a aa a a a a a a a a a a a a a a aa a a a a a a a a a a a a a a aa a a a a a a a a a a a a a a a a a a a a a a a a a a a")).toBe(false);
  });
});

describe('duplicateCheck', function() {
  it('defines duplicateCheck', function() {
    expect(textarea.duplicateCheck).toBeDefined();
  });

  it("checks for duplicates, this is false", function() {
    expect(textarea.duplicateCheck("hey there it's me the hey guy")).toBe(false);
  });

  it("checks for duplicates, this is true", function() {
    expect(textarea.duplicateCheck("no duplicates here")).toBe(true);
  });
});