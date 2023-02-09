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
    // console.log('test1: ', this.buckets[index]);
    this.buckets[index] = new HashNode(key, value);
  } else if (this.buckets[index].key === key) {
    // console.log(this.buckets[index].key, key, this.buckets[index].value);
    this.buckets[index].value = value;
  } else {
    var currentNode = this.buckets[index];
    // console.log('test: ', currentNode);
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function (key) {
  var index = this.hash(key);
  if (!this.buckets[index]) return null;
  else {
    var currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
};

var myHT = new HashTable(30);
myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com'); // hash が重複すると、入れ子になって追加される
myHT.insert('Dean', 'deanmachine@gmail.com'); // key の重複は、データが上書きされる

console.log('myHT: ', myHT.buckets);
// myHT:  [
//   <8 empty items>,
//   HashNode { key: 'Megan', value: 'megan@gmail.com', next: null },
//   <7 empty items>,
//   HashNode {
//     key: 'Dean',
//     value: 'deanmachine@gmail.com',
//     next: HashNode { key: 'Dane', value: 'dane@yahoo.com', next: null }
//   },
//   <13 empty items>
// ]
myHT.insert('Megan', 'megansmith@gmail.com'); // key の重複は、データが上書きされる
myHT.insert('Dane', 'dane1010@outlook.com'); // key の重複は、データが上書きされる

console.log('myHT: ', myHT.buckets);
// myHT:  [
//   <8 empty items>,
//   HashNode { key: 'Megan', value: 'megansmith@gmail.com', next: null },
//   <7 empty items>,
//   HashNode {
//     key: 'Dean',
//     value: 'deanmachine@gmail.com',
//     next: HashNode { key: 'Dane', value: 'dane1010@outlook.com', next: null }
//   },
//   <13 empty items>
// ]
