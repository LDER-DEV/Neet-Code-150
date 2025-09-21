class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const word1 = s.split('').sort().join('')
        const word2 = t.split('').sort().join('')
        console.log(word1, word2)

        if(word1.length !== word2.length){
            return false
        }else{
            if (word1 === word2){
                return true
            }else{
                return false
            }
    }
}
}