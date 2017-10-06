const Node = function(data) {
  this.data = data;
  this.next = null;
};

const ll1 = new Node(1);
ll1.next = new Node(1);
ll1.next.next = new Node(2);
ll1.next.next.next = new Node(2);
// ll1.next.next.next.next = new Node(2);

function removeDuplicates(head) {
  if (!head) return null;
  let prev = head;
  let curr = head.next;
  while (curr) {
    if (curr.data === prev.data) {
      // console.log(curr.data);
      // console.log(prev.data);
      curr = curr.next;
      prev.next = curr;
      // prev = curr;
    } else {
      // console.log(curr.data);
      prev.next = curr;
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
}

console.log(removeDuplicates(ll1));
