// 1) A function that traverses a non-binary tree depth-first
nonBinaryDF = function(node, cb) {
  if (!node.children) return;
  else if (node) {
    cb(node);
    node.children.forEach(child => nonBinaryDF(child, cb))
  }
};


// 2) A function that traverses a binary tree depth-first
binaryDF = function(node, cb) {
  if (node) {
    cb(node);
    binaryDF(node.left, cb);
    binaryDF(node.right, cb);
  }
};

module.exports = {nonBinaryDF, binaryDF}