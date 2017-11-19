// 1) Write a function that traverses a non-binary tree depth-first.
function nonBinaryDF(node, cb) {
  if (!node.children) return;
  else if (node) {
    cb(node);
    node.children.forEach(child => nonBinaryDF(child, cb))
  }
};


// 2) Write a function that traverses a binary tree depth-first.
function binaryDF(node, cb) {
  if (node) {
    cb(node);
    binaryDF(node.left, cb);
    binaryDF(node.right, cb);
  }
};


module.exports.nonBinaryDF = nonBinaryDF;
module.exports.binaryDF = binaryDF;
