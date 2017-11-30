var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  return Object.assign(newTree, treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

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

module.exports.Tree = Tree;