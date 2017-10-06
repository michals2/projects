function Node(val) {
  this.val = val;
  this.next = null;
}

const ll1 = new Node("a");
ll1.next = new Node("b");

console.log(ll1);

function printLL(head) {
  if (head) {
    console.log(head.val);
    printLL(head.next);
  }
}

// printLL(ll1);

function insert(head, val) {
  if (!head) return new Node(val);
  let curr = head;
  while (curr.next) curr = curr.next;
  curr.next = new Node(val);
  return head;
}

console.log(insert(ll1, 5));
