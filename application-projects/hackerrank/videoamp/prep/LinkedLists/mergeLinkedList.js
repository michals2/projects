const Node = function(data) {
  this.data = data;
  this.next = null;
};

const ll1 = new Node(1);
ll1.next = new Node(3);
ll1.next.next = new Node(5);
const ll2 = new Node(2);
ll2.next = new Node(4);

// console.log(ll1);
// console.log(ll2);

function mergeLinkedLists(headA, headB) {
  if (!headA || !headB) return headA || headB;
  let head, pointA, pointB, curr;
  if (headA.data <= headB.data) {
    head = headA;
    pointA = head.next;
    pointB = headB;
  } else {
    head = headB;
    pointA = headA;
    pointB = headB.next;
  }
  // console.log(head);
  // console.log(headA);
  // console.log(headB);
  curr = head;
  while (pointA || pointB) {
    if (!pointA) {
      curr.next = pointB;
      break;
    }
    if (!pointB) {
      curr.next = pointA;
      break;
    }
    if (pointA.data <= pointB.data) {
      curr.next = pointA;
      pointA = pointA.next;
    } else {
      curr.next = pointB;
      pointB = pointB.next;
    }
    curr = curr.next;
  }
  return head;
}

console.log(mergeLinkedLists(ll1, ll2));
