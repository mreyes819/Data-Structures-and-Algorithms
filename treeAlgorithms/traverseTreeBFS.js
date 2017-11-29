

// 1) A function that traverses a non-binary tree breadth-first
const nonBinaryBF = function(node, cb) {
  let queue = [node];

  function breadthFirst(queue) {
    let oldestNode = queue.shift();

    if (oldestNode) {
      cb(oldestNode);
      oldestNode.children.forEach(child => queue.push(child));
      breadthFirst(queue);
    }
  };
  breadthFirst(queue);
};


// 2) A function that traverses a binary tree breadth-first
const binaryBF = function(node, cb) {
  let queue = [node];

  function breadthFirst(queue) {
    let oldestNode = queue.shift();

    if (oldestNode) {
      cb(oldestNode);
      if (oldestNode.left) queue.push(oldestNode.left);
      if (oldestNode.right) queue.push(oldestNode.right);
      breadthFirst(queue);
    }
  };
  breadthFirst(queue);
};


module.exports.nonBinaryBF = nonBinaryBF;
module.exports.binaryBF = binaryBF;