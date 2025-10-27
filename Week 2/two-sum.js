class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
   let map = new Map()

   for(let i = 0; i < nums.length; i++){
    let pair = target - nums[i]

    if(map.has(pair)){
        return [map.get(pair), i] 
    }
    map.set(nums[i],i)
   }
   return []
}

}