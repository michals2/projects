const Node = function(data) {
  this.data = data;
  this.next = null;
};

const ll1 = new Node(1);
ll1.next = new Node(2);
console.log(ll1);

function reverseLinkedList(head) {
  let curr = head;
  let prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

console.log(reverseLinkedList(ll1));
