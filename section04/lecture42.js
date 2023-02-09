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

var myHT = new HashTable(30);
console.log('myHT: ', myHT);
// myHT:  HashTable { buckets: [ <30 empty items> ], numBuckets: 30 } // [ <30 empty items> ] = [ , , , , , , , , , , , , , , , , , , ]
