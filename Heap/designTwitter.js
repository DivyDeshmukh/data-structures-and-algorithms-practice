class MyMaxHeap {
    constructor () {
        this.heap = [];
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    left(i) {
        return 2 * i + 1;
    }

    right(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(i) {
        while(i > 0) {
            let p = this.parent(i);
            if (this.heap[p].time >= this.heap[i].time) break;
            this.swap(p, i);
            i = p;
        }
    }

    pop() {
        if (!this.heap.length) return null;
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }

        return root;
    }

    heapifyDown(i) {
        let n = this.heap.length;
        while (true) {
            let largest = i;
            let l = this.left(i);
            let r = this.right(i);

            if (l < n && this.heap[l].time > this.heap[largest].time)
                largest = l;
            
            if (r < n && this.heap[r].time > this.heap[largest].time) 
                largest = r;

            if (largest === i) break;

            this.swap(i, largest);
            i = largest;
        }
    }

    size() {
        return this.heap.length;
    }

}

var Twitter = function() {
    this.time = 0;
    this.tweets = new Map();
    this.followMap = new Map();
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if (!this.tweets.has(userId)) this.tweets.set(userId, []);
    this.tweets.get(userId).push({ id: tweetId, time: this.time++ });
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const heap = new MyMaxHeap();
    const result = [];

    const followees = new Set(this.followMap.get(userId) || []);
    followees.add(userId);

    // create heap everytime user calls gets
    for (let uid of followees) {
        const tweets =  this.tweets.get(uid);
        if (tweets && tweets.length) {
            let i = tweets.length - 1;
            heap.push({
                time: tweets[i].time,
                tweetId: tweets[i].id,
                userId: uid,
                idx: i-1 
            });
        }
    }

    while (heap.size() && result.length < 10) {
        const node = heap.pop();
        result.push(node.tweetId);

        const tweets = this.tweets.get(node.userId);
        if (node.idx >= 0) {
            heap.push({
                time: tweets[node.idx].time,
                tweetId: tweets[node.idx].id,
                userId: node.userId,
                idx: node.idx - 1
            });
        }
    }

    return result;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.followMap.has(followerId))
        this.followMap.set(followerId, new Set());
    this.followMap.get(followerId).add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.followMap.has(followerId) && followerId !== followeeId) {
        this.followMap.get(followerId).delete(followeeId);
    }
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

const twitter = new Twitter();
twitter.postTweet(1, 5);
console.log(twitter.getNewsFeed(1)); // [5]
twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1)); // [6, 5]
twitter.unfollow(1, 2);
console.log(twitter.getNewsFeed(1)); // [5]

// Time Complexity of each operation:
// postTweet: O(1)
// getNewsFeed: O(N log K) where N is the total number of tweets from followees and K is the number of followees (since we are using a max heap to get the top 10 tweets)
// follow: O(1)
// unfollow: O(1)

// Space Complexity of each operation:
// postTweet: O(1) (excluding the space used to store tweets)
// getNewsFeed: O(N) (in the worst case, if all followees have tweets, we might store all of them in the heap)
// follow: O(1) (excluding the space used to store follow relationships)
// unfollow: O(1)
