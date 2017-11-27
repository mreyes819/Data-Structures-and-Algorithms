const tree = require('./trees/tree').tree;

/* Notes:
  See:
  Ascending: left-to-right
  Descending: right-to-left
  preOrder: each node is visited before its subtrees
  postOrder: each node is visited after its subtrees
*/


const breadthFirstAscending = function(node, cb) {
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
}

const breadthFirstDescending = function(node, cb) {
  let stack = [node];
  let tempStack = [];

  function breadthFirst(stack) {
    if (stack.length === 0) {
      tempStack.forEach(child => stack.push(child))
      tempStack = []
    }
    let oldestNode = stack.shift();

    if (oldestNode) {
      cb(oldestNode);
      for (var c = oldestNode.children.length; c >= 0; c--) {
        if (oldestNode.children[c]) {
          tempStack.push(oldestNode.children[c]);
        }
      }
      breadthFirst(stack);
    }
  };
  breadthFirst(stack);
}



// pre order

// post order

module.exports={breadthFirstAscending, breadthFirstDescending}