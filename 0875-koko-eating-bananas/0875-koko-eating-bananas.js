/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        let hours = 0;

        for (let pile of piles) {
            hours += Math.ceil(pile / mid);
        }

        // If Koko can finish, try smaller speed
        if (hours <= h) {
            right = mid;
        } else {
            // Need faster speed
            left = mid + 1;
        }
    }

    return left;
};