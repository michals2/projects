function Node(val) {
  this.data = val;
  this.left = null;
  this.right = null;
}

const tree1 = new Node(1);
tree1.right = node1 = new Node(2);
node1.right = node2 = new Node(5);
node2.left = node3 = new Node(3);
node2.right = node4 = new Node(6);
node3.right = node5 = new Node(4);

// console.log(node1);
// console.log(tree1);

function preOrder(tree) {
  // check if tree is null
  if (!tree) return;
  console.log(tree.data);
  preOrder(tree.left);
  preOrder(tree.right);
}
// preOrder(tree1);

function postOrder(tree) {
  // check if tree is null
  if (!tree) return;
  postOrder(tree.left);
  postOrder(tree.right);
  console.log(tree.data);
}
// postOrder(tree1);

function inOrder(tree, flattened) {
  // check if tree is null
  if (!tree) return;
  inOrder(tree.left, flattened);
  flattened.push(tree.data);
  inOrder(tree.right, flattened);
}
// inOrder(tree1);

function flatten(tree, method) {
  const flattened = [];
  method(tree, flattened);
  return flattened;
}

console.log(flatten(tree1, inOrder));
