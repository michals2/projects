const Node = function(data) {
  this.data = data;
  this.next = null;
};

const ll1 = new Node(1);
ll1.next = new Node(2);
console.log(ll1);

function deleteNode(head, position) {
  if (!position) return head.next;
  let curr = head;
  let prev = null;
  let i = position;
  while (i) {
    prev = curr;
    curr = curr.next;
    i--;
  }
  if (prev) {
    prev.next = curr.next;
    return head;
  } else {
    return curr.next;
  }
}

console.log(deleteNode(ll1, 1));
