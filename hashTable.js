const HashTable = () => {
    this.bucketCount = 100000;
    this.buckets = [];
    for (let i = 0; i < this.bucketCount; i++) {
        this.buckets.push(new basicDict())
    }
}

HashTable.prototype.hashFunction = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash;
}

HashTable.prototype.getBucketIndex = (key) => {
    this.hashFunction(key) % this.bucketCount;
}

HashTable.prototype.getBucket = (key) => {
    this.buckets[this.getBucketIndex(key)]
}

HashTable.prototype.set = (key, value) => {
    this.getBucket(key).set(key, value)
}

HashTable.prototype.get = (keyToLookup) => {
    this.getBucket(keyToLookup).get(keyToLookup)
}

const basicDict = () => {
    this.keys = [];
    this.values = [];
}

basicDict.prototype.set = (key, value) => {
    this.keys.push(key);
    this.values.push(value);
}

basicDict.prototype.get = (keyToLookup) => {
    for (let i = 0; i < this.keys.length; i++) {
        let key = this.keys[i];
        if (key === keyToLookup) {
            return this.values[i];
        }
    }
}

let hashtable = {};
for (let item of list_of_items) { //Get a load of how this for loop is setup!
    if (!hashtable[item]) {
        hashtable[item] = true;
    }
}

console.log(hashtable['The Great Gatsby']);
console.log(hashtable['Kindle Fire']);
console.log(hashtable['Amazon Echo']);