const Node = function(data) {
  this.data = data;
  this.next = null;
};

const ll1 = new Node(1);
ll1.next = new Node(2);
// ll1.next.next = new Node(3);
const ll2 = new Node(1);
ll2.next = new Node(2);
ll2.next.next = new Node(3);

console.log(ll1);
console.log(ll2);

function compareLinkedLists(headA, headB) {
  pointA = headA;
  pointB = headB;
  while (pointA && pointB) {
    if (pointA.data !== pointB.data) return 0;
    pointA = pointA.next;
    pointB = pointB.next;
  }
  return !pointA && !pointB ? 1 : 0;
}

console.log(compareLinkedLists(ll1, ll2));
