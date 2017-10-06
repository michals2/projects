const Node = function(data) {
  this.data = data;
  this.next = null;
};

const ll1 = new Node(1);
ll1.next = new Node(2);
console.log(ll1);

function insert(head, data, position) {
  if (!head) return new Node(data);
  let curr = head;
  let prev = null;
  let i = position;
  while (i) {
    prev = curr;
    curr = curr.next;
    i--;
  }
  let newHead = new Node(data);
  if (prev) {
    prev.next = newHead;
    newHead.next = curr;
    return head;
  } else {
    newHead.next = head;
    return newHead;
  }
}

console.log(insert(null, "X", 0));
