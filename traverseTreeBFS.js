/*  1) Write a function that traverses a non-binary tree breadth-first.  */
nonBinarytree = {
  value: 3,
  children: [{
    value: 2,
    children: []
  }, {
    value: 1,
    children: []
  }, ]
};

function nonBinaryBF(node, cb) {
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


/*  2) Write a function that traverses a binary tree breadth-first.  */
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

function binaryBF(node, cb) {
  let queue = [node];

  function breadthFirst(queue) {
    let oldestNode = queue.shift();

    if (oldestNode) {
      cb(oldestNode);
      if (oldestNode.left) queue.push(oldestNode.left);
      else if (oldestNode.right) queue.push(oldestNode.right);
      breadthFirst(queue);
    }
  };
  breadthFirst(queue);
};
binaryBF(binaryTree, (node)=> console.log(node.value))

module.exports.nonBinaryBF = nonBinaryBF;
module.exports.binaryBF = binaryBF;


