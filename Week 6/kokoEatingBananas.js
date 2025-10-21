class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let result = right;

        while (left <= right) {
            const koko = Math.floor((left + right) / 2);

            let totalTime = 0;
            for (const p of piles) {
                totalTime += Math.ceil(p / koko);
            }
            if (totalTime <= h) {
                result = koko;
                right = koko - 1;
            } else {
                left = koko + 1;
            }
        }
        return result;
    }
}