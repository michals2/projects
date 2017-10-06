const Node = function(data) {
  this.data = data;
  this.next = null;
};

const ll1 = new Node(1);
ll1.next = new Node(2);
const ll2 = new Node(1);
ll2.next = new Node(2);

function hasCycle(head) {
  try {
    JSON.stringify(head);
    return 0;
  } catch (e) {
    return 1;
  }
}

console.log(0, hasCycle(ll1));
console.log(1, hasCycle(ll2));
