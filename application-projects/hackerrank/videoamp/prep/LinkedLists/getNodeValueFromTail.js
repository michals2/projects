const Node = function(data) {
  this.data = data;
  this.next = null;
};

const ll1 = new Node(1);
ll1.next = new Node(2);
ll1.next.next = new Node(3);

function getNodeValue(head, position) {
  const cache = new Array(position + 1).fill(null);
  let curr = head;
  while (curr) {
    cache.unshift(curr.data);
    cache.pop();
    curr = curr.next;
  }
  // console.log(cache);
  return cache[position];
}

console.log("3", getNodeValue(ll1, 0));
console.log("2", getNodeValue(ll1, 1));
