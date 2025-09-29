class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let left  = 0
       let right = heights.length-1
       let maximum = 0
    
      
      while(left < right){
         const width = right - left
         const area = Math.min(heights[left],heights[right]) * width
         maximum = Math.max(maximum,area)
    

        if(heights[left] < heights[right]){
            left++
         }else{
            right--
        }
      }
      return maximum
    }
}
