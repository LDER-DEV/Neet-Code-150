class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s.replaceAll(/\W/g, '').toLowerCase()
        let left = 0
        let right = cleaned.length-1
        console.log(cleaned)

        while(left < right){
            if(cleaned[left] == cleaned[right]){
                left++
                right--
            }else{
                return false
            }
        }
        return true
    }
}