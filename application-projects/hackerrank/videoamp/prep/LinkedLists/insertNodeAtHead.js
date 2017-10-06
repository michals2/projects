const Node = function(data) {
  this.data = data;
  this.next = null;
};

const ll1 = new Node(1);
ll1.next = new Node(2);
console.log(ll1);

function insert(head, data) {
  const newll = new Node(data);
  newll.next = head;
  return newll;
}

console.log(insert(ll1, 0));
ll1;
