/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = [];

    for (let num of nums) {
        this.add(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.push(val);
    this.bubbleUp();

    // Keep only k largest elements
    if (this.heap.length > this.k) {
        this.removeMin();
    }

    // Root of min heap = kth largest
    return this.heap[0];
};

// Heap helper methods

KthLargest.prototype.bubbleUp = function() {
    let index = this.heap.length - 1;

    while (index > 0) {
        let parent = Math.floor((index - 1) / 2);

        if (this.heap[parent] <= this.heap[index]) break;

        [this.heap[parent], this.heap[index]] =
            [this.heap[index], this.heap[parent]];

        index = parent;
    }
};

KthLargest.prototype.removeMin = function() {
    if (this.heap.length === 1) {
        return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();

    let index = 0;

    while (true) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;

        if (
            left < this.heap.length &&
            this.heap[left] < this.heap[smallest]
        ) {
            smallest = left;
        }

        if (
            right < this.heap.length &&
            this.heap[right] < this.heap[smallest]
        ) {
            smallest = right;
        }

        if (smallest === index) break;

        [this.heap[index], this.heap[smallest]] =
            [this.heap[smallest], this.heap[index]];

        index = smallest;
    }

    return min;
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */