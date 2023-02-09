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

BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
  if (order === 'pre-order') iteratorFunc(this.value);
  // iteratorFunc(this.left.value);
  // if (this.left) this.left.depthFirstTraversal(iteratorFunc);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  // iteratorFunc(this.value);
  if (order === 'in-order') iteratorFunc(this.value);
  // iteratorFunc(this.right.value);
  // if (this.right) this.right.depthFirstTraversal(iteratorFunc);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'post-order') iteratorFunc(this.value);
};

BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
  var queue = [this];
  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
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

bst.depthFirstTraversal(log, 'post-order');

function log(value) {
  console.log('value: ', value);
}

// // 1
// var queue = [50];
// iteratorFunc();
// // 2
// var queue = [30, 70];
// iteratorFunc(50);
// // 3
// var queue = [70, 20, 45];
// iteratorFunc(30);
// // 4
// var queue = [20, 45, 60, 100];
// iteratorFunc(70);
// // 5
// var queue = [45, 60, 100, 10];
// iteratorFunc(20);
// // 6
// var queue = [60, 100, 10, 35];
// iteratorFunc(45);
// // 7
// var queue = [100, 10, 35, 59];
// iteratorFunc(60);
// // 8
// var queue = [10, 35, 59, 85, 105];
// iteratorFunc(100);
// // 9
// var queue = [35, 59, 85, 105];
// iteratorFunc(10);
// // 10
// var queue = [59, 85, 105];
// iteratorFunc(35);
// // 11
// var queue = [85, 105];
// iteratorFunc(59);
// // 12
// var queue = [105];
// iteratorFunc(85);
// // 13
// var queue = [];
// iteratorFunc(105);
