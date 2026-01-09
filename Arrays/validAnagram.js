// the logic is that we will make all array elements as 0 and we will increase 1 on s when we get a char and decrease 1 on t when we get a char if all remained 0 then it is an anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }

    return count.every(c => c === 0);
};

console.log(isAnagram("anagram", "nwagaram"));

// Time:- O(n) & Space:- O(1)
