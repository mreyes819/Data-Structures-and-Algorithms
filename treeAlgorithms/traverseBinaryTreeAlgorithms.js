/* Notes:
  See: https://en.wikibooks.org/wiki/A-level_Computing/AQA/Paper_1/Fundamentals_of_algorithms/Tree_traversal
  Ascending: left-to-right
  Descending: right-to-left
  inOrder: each node is visited between visiting its left and right subtrees
  preOrder: each node is visited before its subtrees
  postOrder: each node is visited after its subtrees
*/

function breadthFirstAscending(node, cb) {
  let queue = [node];

  function breadth(queue) {
    let oldestNode = queue.shift();
    if (oldestNode) {
      cb(oldestNode);
      if (oldestNode.left) queue.push(oldestNode.left);
      if (oldestNode.right) queue.push(oldestNode.right)
      breadth(queue)
    }
  };
  breadth(queue, cb);
};


function breadthFirstDescending(node, cb) {
  let queue = [node];

  function breadth(queue) {
    let oldestNode = queue.shift();
    if (oldestNode) {
      cb(oldestNode);
      if (oldestNode.right) queue.push(oldestNode.right)
      if (oldestNode.left) queue.push(oldestNode.left);
      breadth(queue)
    }
  };
  breadth(queue, cb);
};


function preOrderAscending(node, cb) { // AKA depthFirstAscending
  if (node.value) cb(node);
  if (node.left) preOrderAscending(node.left, cb);
  if (node.right) preOrderAscending(node.right, cb);
};


function preOrderDescending(node, cb) { // AKA depthFirstDescending
  if (node.value) cb(node);
  if (node.right) preOrderDescending(node.right, cb);
  if (node.left) preOrderDescending(node.left, cb);
};


function inOrderAscending(node, cb) {
  if (node.left) inOrderAscending(node.left, cb);
  if (node.value) cb(node);
  if (node.right) inOrderAscending(node.right, cb);
};


function inOrderDescending(node, cb) {
  if (node.right) inOrderDescending(node.right, cb);
  if (node.value) cb(node);
  if (node.left) inOrderDescending(node.left, cb);
};


function postOrderAscending(node, cb) {
  if (node.left) postOrderAscending(node.left, cb);
  if (node.right) postOrderAscending(node.right, cb);
  if (node) cb(node);
};


function postOrderDescending(node, cb) {
  if (node.right) postOrderDescending(node.right, cb);
  if (node.left) postOrderDescending(node.left, cb);
  if (node) cb(node);
};


module.exports = { breadthFirstAscending, breadthFirstDescending, preOrderAscending, preOrderDescending, inOrderAscending, inOrderDescending, postOrderAscending, postOrderDescending };
