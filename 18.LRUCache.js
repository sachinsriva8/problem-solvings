// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Input: ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
//        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output:[null, null, null, 1, null, -1, null, -1, 3, 4]

var LRUCache = function (capacity) {
  this.dataStructure = new Map();
  this.dataStructureSize = capacity;
  return null;
};

LRUCache.prototype.get = function (key) {
  if (this.dataStructure.has(key)) {
    const result = this.dataStructure.get(key);
    this.dataStructure.delete(key);
    this.dataStructure.set(key, result);
    return result;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (this.dataStructure.has(key)) {
    this.dataStructure.delete(key);
    this.dataStructure.set(key, value);
    return null;
  }
  if (this.dataStructure.size === this.dataStructureSize) {
    const [firstKey] = this.dataStructure.keys();
    this.dataStructure.delete(firstKey);
  }

  this.dataStructure.set(key, value);
  return null;
};

let obj = new LRUCache(2);
console.log(obj.put(1, 1));
console.log(obj.put(2, 2));
console.log(obj.get(1));
console.log(obj.put(3, 3));
console.log(obj.get(2));
console.log(obj.put(4, 4));
console.log(obj.get(1));
console.log(obj.get(3));
console.log(obj.get(4));
console.log(obj.dataStructure);
