
var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map.has(key)) this.map.set(key, []);

    this.map.get(key).push([timestamp, value]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map.get(key)) {
        return "";
    }

    let arr = this.map.get(key);
    let left = 0;
    let right = arr.length-1;
    let result = "";

    while(left <= right) {
        let mid = Math.floor((left+right)/2);

        if (arr[mid][1] <= timestamp) {
            result = arr[mid][0];
            left = mid+1;
        } else {
            right = mid-1;
        }
    }

    return result;
};

// Time Complexity: O(log n) where n is number of timestamps for the key
// Space Complexity: O(n) where n is number of entries in the map

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */