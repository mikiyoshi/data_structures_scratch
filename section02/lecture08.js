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

var ll = new LinkedList();

ll.addToHead(100);

// console.log('ll: ', ll);
// ll:  LinkedList {
//   head: Node { value: 100, next: null, prev: null },
//   tail: Node { value: 100, next: null, prev: null }
// }

ll.addToHead(200);

// console.log('ll: ', ll);
// ll:  LinkedList {
//   head: <ref *1> Node {
//     value: 200,
//     next: Node { value: 100, next: null, prev: [Circular *1] },
//     prev: null
//   },
//   tail: <ref *2> Node {
//     value: 100,
//     next: null,
//     prev: <ref *1> Node { value: 200, next: [Circular *2], prev: null }
//   }
// }

ll.addToHead(300);

console.log('ll: ', ll);
// check at web browser console // 上記のコードを全てペースト
//
// ll:
// Object { head: {…}, tail: {…} }
// head: Object { value: 300, next: {…}, prev: null }
// next: Object { value: 200, next: {…}, prev: {…} }
// next: Object { value: 100, next: null, prev: {…} }
// prev: Object { value: 300, next: {…}, prev: null }
// value: 200
// <prototype>: Object { … }
// prev: null
// value: 300
// <prototype>: Object { … }
// tail: Object { value: 100, next: null, prev: {…} }
// next: null
// prev: Object { value: 200, next: {…}, prev: {…} }
// next: Object { value: 100, next: null, prev: {…} }
// prev: Object { value: 300, next: {…}, prev: null }
// value: 200
// <prototype>: Object { … }
// value: 100
// <prototype>: Object { … }
// <prototype>: Object { addToHead: addToHead(value), … }
// debugger eval code:27:9
// undefined
