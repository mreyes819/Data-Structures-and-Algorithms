// 1) Write a function that traverses a non-binary tree depth-first.
nonBinarytree = {
  value: 4,
  children: [{
    value: 3,
    children: [{
      value: 2,
      children: []
    }]
  }, {
    value: 1,
    children: []
  }, ]
};

function nonBinaryDF(node, cb) {
  if (!node.children) return;
  else if (node) {
    cb(node);
    node.children.forEach(child => nonBinaryDF(child, cb))
  }
}
// nonBinaryDF(nonBinarytree, (node) => console.log(node.value));




// 2) Write a function that traverses a binary tree depth-first.
binaryTree = {
  value: 4,
  left: {
    value: 8,
    left: {
      value: 7,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    value: 9,
    left: null,
    right: null
  }
};

function binaryDF(node, cb) {
  if (node) {
    cb(node);
    binaryDF(node.left, cb);
    binaryDF(node.right, cb);
  }
}
// binaryDF(binaryTree, (node)=> console.log(node.value));
