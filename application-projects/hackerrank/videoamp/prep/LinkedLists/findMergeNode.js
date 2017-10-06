const Node = function(data) {
  this.data = data;
  this.next = null;
};

const node1a = new Node("a");
const node1b = new Node("b");
const node2a = new Node("c");
const node2b = new Node("d");
const node3a = new Node(1);
const node3b = new Node(2);

ll1 = node1a;
node1a.next = node1b;
node1b.next = node3a;
node3a.next = node3b;
ll2 = node2a;
node2a.next = node2b;
node2b.next = node3a;

console.log(ll1);
console.log(ll2);

function findMergeNode(headA, headB) {
  let pointA = headA;
  let pointB = headB;
  while (pointA) {
    while (pointB) {
      // console.log(pointA.data, pointB.data);
      if (pointA === pointB) return pointA.data;
      pointB = pointB.next;
    }
    pointB = headB;
    pointA = pointA.next;
  }
  // console.log("out");
}

console.log(findMergeNode(ll1, ll2));
