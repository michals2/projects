const Node = function(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
};

const node1 = new Node(1);
const node2 = new Node(3);
const node3 = new Node(5);

const ll1 = node1;
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

function sortedInsert(head, data) {
  let curr = head;
  let prev = null;
  while (curr && curr.data < data) {
    prev = curr;
    curr = curr.next;
  }
  console.log(curr);
  const newNode = new Node(data);
  if (prev) {
    prev.next = newNode;
    newNode.prev = prev;
  }
  if (curr) {
    newNode.next = curr;
    curr.prev = newNode;
  }
  return head;
}

console.log(sortedInsert(ll1, 4));
