const Tree = require('../tree').Tree;

describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).toBeInstanceOf(Function);
    expect(tree.contains).toBeInstanceOf(Function);
    expect(tree.hasOwnProperty('value')).toBeTruthy();
  });

  test('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).toBe(5);
  });

  test('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).toBeTruthy();
  });

  test('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).toBeFalsy();
  });

  test('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).toBe(6);
  });

  test('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).toBeTruthy();
    expect(tree.contains(8)).toBeTruthy();
  });

})
