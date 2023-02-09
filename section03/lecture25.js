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

console.log('bst: ', bst);
// bst:  BST {
//   value: 50,
//   left: BST {
//     value: 30,
//     left: BST { value: 20, left: [BST], right: null },
//     right: BST { value: 45, left: [BST], right: null }
//   },
//   right: BST {
//     value: 70,
//     left: BST { value: 60, left: [BST], right: null },
//     right: BST { value: 100, left: [BST], right: [BST] }
//   }
// }

console.log('bst.right.left.left: ', bst.right.left.left);
// bst.right.left.left:  BST { value: 59, left: null, right: null }

console.log('bst.left.right.left: ', bst.left.right.left);
// bst.left.right.left:  BST { value: 35, left: null, right: null }

console.log('bst.right.right: ', bst.right.right);
// bst.right.right:  BST {
//   value: 100,
//   left: BST { value: 85, left: null, right: null },
//   right: BST { value: 105, left: null, right: null }
// }
