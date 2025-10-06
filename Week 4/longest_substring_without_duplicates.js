class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const letters = new Set();
        let left = 0;
        let res = 0;

        for (let right = 0; right < s.length; right++) {
            while (letters.has(s[right])) {
                letters.delete(s[left]);
                left++;
            }
            letters.add(s[right]);
            res = Math.max(res, right - left + 1);
        }
        return res;
    }
}