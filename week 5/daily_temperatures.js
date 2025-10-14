class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length
        const result = new  Array(n).fill(0)

        for (let i = 0 ; i < n; i++){
            let count = 1
            let j = i + 1
            while(j < n){
                if (temperatures[j] > temperatures[i]){
                    break;
                }
                j++
                count++
            }
            count = j === n? 0 : count
            result[i] = count
        }
        return result
    }
}