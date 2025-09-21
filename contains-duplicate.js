class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
     const container = []

     for(let i = 0; i < nums.length; i++){
        if(!container.includes(nums[i])){
            container.push(nums[i])
        }
     }
     console.log(container)
     if(container.length < nums.length){
        return true
     }else{
        return false
     }
     }
    }

