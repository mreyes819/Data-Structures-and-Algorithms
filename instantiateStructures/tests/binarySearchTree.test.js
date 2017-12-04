const BinarySearchTree = require('../BinarySearchTree').BinarySearchTree;

describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  test('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).toBeInstanceOf(Function);
    expect(binarySearchTree.contains).toBeInstanceOf(Function);
    expect(binarySearchTree.depthFirstLog).toBeInstanceOf(Function);
  });

  test('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).toEqual(3);
    expect(binarySearchTree.right.left.value).toEqual(6);
  });

  test('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).toBeTruthy();
    expect(binarySearchTree.contains(8)).toBeFalsy();
  });

  test('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).toEqual([5, 2, 3]);
  });
});
