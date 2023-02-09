function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

var LL = new LinkedList();
var userList = new LinkedList();
var toDoList = new LinkedList();

console.log('LL: ', LL);
// LL:  LinkedList { head: null, tail: null }

var node1 = new Node(100, 'node2', null);
console.log('node1: ', node1);
// node1:  Node { value: 100, next: 'node2', prev: null }
