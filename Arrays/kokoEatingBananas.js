/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let answer = right;     // as at max it can be this not greater than this

    while (left <= right) {
        let mid = Math.floor((left+right)/2);
        let hours = 0;
        
        for (let pile of piles) {
            hours += Math.ceil(pile/mid);
        }
        
        // as if speed is at mid has less or equal number of hours than h then definitely we can find lesser than that
        if (hours <= h) {
            answer = mid;
            right = mid-1;
        } else {
            // if speed at mid do not have lesser or equal number of hours than h then definitely more lesser speed will also be wrong so moving left right side
            left = mid+1;
        }
    }

    return answer;
};

console.log(minEatingSpeed([30,11,23,4,20], 6));
