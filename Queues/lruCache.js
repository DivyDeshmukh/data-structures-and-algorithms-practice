class Node {
    constructor (key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    // dummy head/tail
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype._insertAfterHead = function(node) {
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
}

LRUCache.prototype._deleteNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key);
    this._deleteNode(node);
    this._insertAfterHead(node);

    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        const node = this.cache.get(key);
        node.value = value;
        this._deleteNode(node);
        this._insertAfterHead(node);
    } else {
        if (this.cache.size >= this.capacity) {
            const lru = this.tail.prev;
            this._deleteNode(lru);
            this.cache.delete(lru.key);
        }

        const node = new Node(key, value);
        this.cache.set(key, node);
        this._insertAfterHead(node);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// Time complexity of all operations is O(1)
// Space complexity overall O(capacity) 