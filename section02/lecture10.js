function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

var myLL = new LinkedList();

myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);

myLL.addToHead(100);

// console.log('myLL: ', myLL.tail.prev);
// myLL:  <ref *1> Node {
//   value: 20,
//   next: Node { value: 30, next: null, prev: [Circular *1] },
//   prev: Node { value: 10, next: [Circular *1], prev: null }
// }
// console.log('myLL: ', myLL.tail.prev.prev);
// myLL:  <ref *2> Node {
//   value: 10,
//   next: <ref *1> Node {
//     value: 20,
//     next: Node { value: 30, next: null, prev: [Circular *1] },
//     prev: [Circular *2]
//   },
//   prev: null
// }

// console.log('myLL: ', myLL);
// myLL:  LinkedList {
//   head: <ref *1> Node {
//     value: 100,
//     next: Node { value: 10, next: [Node], prev: [Circular *1] },
//     prev: null
//   },
//   tail: <ref *2> Node {
//     value: 30,
//     next: null,
//     prev: Node { value: 20, next: [Circular *2], prev: [Node] }
//   }
// }

console.log('myLL: ', myLL.tail.prev.prev.prev);
// myLL:  <ref *2> Node {
//   value: 100,
//   next: <ref *1> Node {
//     value: 10,
//     next: Node { value: 20, next: [Node], prev: [Circular *1] },
//     prev: [Circular *2]
//   },
//   prev: null
// }
