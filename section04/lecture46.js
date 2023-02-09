// Hash Table Source Code

function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function (key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    // .charCodeAt() Get the Unicode of the first character in a string:
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
};

HashTable.prototype.insert = function (key, value) {
  var index = this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  } else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};

var myHT = new HashTable(30);
myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
console.log('myHT: ', myHT.buckets);
// myHT:  [
//   <8 empty items>,
//   HashNode { key: 'Megan', value: 'megan@gmail.com', next: null },
//   <7 empty items>,
//   HashNode { key: 'Dean', value: 'dean@gmail.com', next: null },
//   <13 empty items>
// ]

myHT.insert('Dane', 'dane@yahoo.com'); // hash が重複すると、入れ子になって追加される
console.log('myHT: ', myHT.buckets);
// myHT:  [
//   <8 empty items>,
//   HashNode { key: 'Megan', value: 'megan@gmail.com', next: null },
//   <7 empty items>,
//   HashNode {
//     key: 'Dean',
//     value: 'dean@gmail.com',
//     next: HashNode { key: 'Dane', value: 'dane@yahoo.com', next: null }
//   },
//   <13 empty items>
// ]
