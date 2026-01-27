/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s === null || s.length === 0) return 0;

    if (s.length === 1) return 1;

    let left = 0;
    let set = new Set();
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const c = s[right];

        while(set.has(c)) {
            set.delete(s[left]);
            left++;
        }

        set.add(c);

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return;
};

console.log(lengthOfLongestSubstring("abcabcbb"));

// Time: O(n) where n is the length of the string s
// Space: O(min(m,n)) where m is the size of the charset/alphabet and n is the length of the string s or we can say O(1) as the size of the set will be bounded by the charset/alphabet size and there will be no duplicate characters as they are always 26.