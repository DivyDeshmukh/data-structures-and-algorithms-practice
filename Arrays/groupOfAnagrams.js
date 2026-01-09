// the logic is we will create a key based on freq. count of characters coming in an array and store it in map and then in value of map we will add all strings that are anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const count = new Array(26).fill(0);

        for (let j = 0; j < strs[i].length; j++) {
            count[strs[i].charCodeAt(j) - 97]++;
        }

        let key = count.join('#');

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(strs[i]);
    }

    return Array.from(map.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
