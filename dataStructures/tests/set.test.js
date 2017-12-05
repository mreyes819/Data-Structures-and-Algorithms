const Set = require('../set').set;

describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  test('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).toBeInstanceOf(Function);
    expect(set.contains).toBeInstanceOf(Function);
    expect(set.remove).toBeInstanceOf(Function);
  });

  test('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).toBeTruthy();
    expect(set.contains('Susan Sarandon')).toBeTruthy();
  });

  test('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).toBeFalsy();
  });

});
