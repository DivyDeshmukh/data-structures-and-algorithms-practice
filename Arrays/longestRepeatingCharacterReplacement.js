/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let freq = new Array(26).fill(0);
    let left = 0;
    let maxFreq = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        let idx = s.charCodeAt(right) - 65;
        freq[idx]++;

        maxFreq = Math.max(maxFreq, freq[idx]);

        // In any window size (right-left+1) we will leave maxFreq count character as it will give us longest substring with same letter after performing the replacements, and we have to check how many other characters we have to remove in order to get the longest substring with same letter that has highest freq count in the current entire window and if that is greater than the replacements-allowed (k) then that window size is invalid so update things then, if not then that window size is valid.

        while (((right-left) + 1) - maxFreq > k) {
            freq[s.charCodeAt(left) - 65]--;
            left++;
        }

        result = Math.max(result, (right-left) + 1);
    }


    return result;
};

console.log(characterReplacement("ABAB", 2));

// Time Complexity: O(n) where n is the length of the string s
// Space Complexity: O(1) since the freq array size is fixed to 26 for uppercase letters only