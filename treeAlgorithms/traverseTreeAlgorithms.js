/* Notes:
  See:
  Ascending: left-to-right
  Descending: right-to-left
  preOrder: each node is visited before its children
  postOrder: each node is visited after its children
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
      for (var c = oldestNode.children.length - 1; c >= 0; c--) {
        if (oldestNode.children[c]) {
          tempStack.push(oldestNode.children[c]);
        }
      }
      breadthFirst(stack);
    }
  };
  breadthFirst(stack);
}

const preOrderAscending = function(node, cb) {
  if(node) cb(node);
  if(node.children.length) {
    node.children.forEach(child => preOrderAscending(child, cb));
  }
}

const preOrderDescending = function(node, cb) {
  if(node) cb(node);
  if(node.children.length) {
    for(var c = node.children.length - 1; c >= 0; c--) {
      preOrderDescending(node.children[c], cb);
    }
  }
}

const postOrderAscending = function(node, cb) {
  if(node.children) {
    node.children.forEach(child => postOrderAscending(child, cb));
  }
  cb(node);
}

const postOrderDescending = function(node, cb) {
  if(node.children) {
    for(var c = node.children.length -1; c >= 0; c--) {
      postOrderDescending(node.children[c], cb);
    }
  }
  cb(node);
}

module.exports={breadthFirstAscending, breadthFirstDescending, preOrderAscending, preOrderDescending, postOrderAscending, postOrderDescending}