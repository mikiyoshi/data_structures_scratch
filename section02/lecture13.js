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

LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;

  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.next;

  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

LinkedList.prototype.search = function (searchValue) {
  var currentNode = this.head;
  // sample test1
  var counter = 0;
  while (counter < 10) {
    console.log(counter);
    counter++;
  }

  // while (currentNode) {
  //   if (currentNode.value === searchValue) return currentNode.value;
  //   currentNode = currentNode.next;
  // }
  // return null;
};

var ll = new LinkedList();

// sample test1
ll.search();
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// console.log('search: ', );
