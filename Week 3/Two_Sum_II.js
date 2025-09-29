class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left  = 0
        let right = numbers.length-1

        while(left < right){
            let sum = numbers[left] + numbers[right]
            if(sum == target){
                return [left+1,right+1]
            }else if(sum < target){
                left++
            }else{
                right--
            }
        }
        return
    }
}
//an array that is in ascending order
//1 indexed meaning we have to add 1 to our indexes at the end of our problem
//the numbers should add up to the target and the first index must be smaller than the 2nd index
//They cannon be the same elements and there is only 1 solution. must be O(1)