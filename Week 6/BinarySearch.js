class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
       let left = 0
       let right = nums.length

       while(left < right){
        let mid = left + Math.floor((right - left) / 2)

        if(nums[mid] > target){
            right = mid
        }else{
            left = mid + 1
        }
       } 
        return left > 0 && nums[left - 1] === target ? left - 1 : -1;
    }
}
