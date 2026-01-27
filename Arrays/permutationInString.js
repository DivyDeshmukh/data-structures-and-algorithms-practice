/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s2.length < s1.length) {
        return false;
    }

    let map1 = new Map();

    for (let char of s1) {
        map1.set(char, (map1.get(char) || 0) + 1);
    }

    let windowSize = s1.length;
    let map2 = new Map();
    let left = 0;

    for (let right = 0; right < s2.length; right++) {
        map2.set(s2[right], (map2.get(s2[right]) || 0) + 1);

        if ((right-left) + 1 > windowSize) {
            map2.set(s2[left], map2.get(s2[left]) - 1);

            if (map2.get(s2[left]) === 0) {
                map2.delete(s2[left]);
            }

            left++;
        }

        if ((right-left) + 1 === windowSize) {
            let areMapsEqual = true;
            if (map1.size === map2.size) {
                for (let [key, value] of map1) {
                    if (!(map2.has(key) && map2.get(key) === value)) {
                        areMapsEqual = false;
                        break;
                    }
                }
            } else {
                areMapsEqual = false;
            }

            if (areMapsEqual) return true;
        }
    }

    return false;
};

console.log(checkInclusion("ab", "eidbaooo"));

// Time Complexity: O(n*m) where n is the length of s2 and m is the length of s1 in the worst case when comparing maps
// Space Complexity: O(1) since the size of the maps is bounded by the number of unique characters (26 for lowercase letters)
// Here the worst case is considered when comparing the maps for every window or in simple words when all characters are unique in s1 and s2 both. Example: s1 = "abc", s2 = "defghijklmnopqrstuvwxyz" so in every window of s2 we will have to compare the maps.