const Node = function(data) {
  this.data = data;
  this.next = null;
};

const ll1 = new Node(1);
ll1.next = new Node(2);
console.log(ll1);

function reversePrint(head) {
  const cache = [];
  curr = head;
  while (curr) {
    cache.push(curr.data);
    curr = curr.next;
  }
  for (let i = cache.length - 1; i >= 0; i--) {
    console.log(cache[i]);
  }
}

reversePrint(ll1);
