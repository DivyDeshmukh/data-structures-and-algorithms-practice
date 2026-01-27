/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));

// Time:- O(n) as we traverse the prices array once.
// Space:- O(1) as we use only constant extra space.