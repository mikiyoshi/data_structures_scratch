// BST Binary Search Tree

function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function (value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    // .contains(value) は value が含まれていれば true, なければ false
    else return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BST.prototype.depthFirstTraversal = function (iteratorFunc) {
  // iteratorFunc(this.left.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc);
  iteratorFunc(this.value);
  // iteratorFunc(this.right.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc);
};

var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

bst.depthFirstTraversal(log);

function log(value) {
  console.log('value: ', value);
}
// value:  10
// value:  20
// value:  30
// value:  35
// value:  45
// value:  50
// value:  59
// value:  60
// value:  70
// value:  85
// value:  100
// value:  105
