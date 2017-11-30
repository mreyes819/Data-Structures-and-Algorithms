var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  return _.extend(newTree, treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

// depth search
/*
treeMethods.contains = function(target) {
  var flag = false;
  var depthSearch = function(node) {
    if (node.value === target) {
      flag = true;
    } else if (node.children.length) {
      node.children.forEach(child => depthSearch(child));
    }
  }
  depthSearch(this);
  return flag;
};
*/

treeMethods.contains = function(target) {
  var flag = false;
  var queue = [this];

  var breadthSearch = function(nodes) {
    if (nodes[0] && nodes[0].value === target) {
      flag = true;
    } else if (nodes[0]) {
      nodes[0].children.forEach(child => queue.push(child));
      queue.shift();
      breadthSearch(queue);
    }
  };

  breadthSearch(queue);
  return flag;
};