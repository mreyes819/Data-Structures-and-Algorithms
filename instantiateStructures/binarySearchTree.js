// A Binary Search Tree class, in prototypal style

var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryMethods);
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.value = value;
  return binaryTree;
};

binaryMethods = {};


binaryMethods.insert = function(value) {

  if (this.value === undefined) { 
    this.value = value; 
  } else {
    var compareNextTree = function(tree) {
      if (value < tree.value) {
        if (tree.left === null) {
          tree.left = BinarySearchTree(value);
        } else {
          compareNextTree(tree.left);
        }
      } else {
        if (tree.right === null) {
          tree.right = BinarySearchTree(value);
        } else {
          compareNextTree(tree.right);
        }
      }
    };
    compareNextTree(this);
  }
};

binaryMethods.contains = function(target) {
  let containFlag = false;

  var checkNextTree = function(tree) {
    if (target === tree.value) {
      containFlag = true;
    } else {
      if (target < tree.value && tree.left !== null) {
        checkNextTree(tree.left);
      } else if (target > tree.value && tree.right !== null) {
        checkNextTree(tree.right);
      }
    }
  };
  checkNextTree(this);
  return containFlag;
};

binaryMethods.depthFirstLog = function(callback) {
  if (this.value !== undefined) {
    callback(this.value);
  }
  var callAllTrees = function(tree) {
    if (tree.left !== null) {
      callback(tree.left.value);
      callAllTrees(tree.left);
    }
    if (tree.right !== null) {
      callback(tree.right.value);
      callAllTrees(tree.right);
    }
  };
  callAllTrees(this);
};


module.exports.BinarySearchTree = BinarySearchTree;