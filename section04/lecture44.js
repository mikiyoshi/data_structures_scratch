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

var myHT = new HashTable(30);
console.log('myHT: ', myHT.hash('Becca'));
// myHT:  12
