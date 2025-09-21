class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()

        for(const element of nums){
            if(map.has(element)){
           map.set(element, map.get(element) + 1)     
            }else{
                map.set(element, 1)
            }
        }

        const maximums  = [...map.entries()].sort((a,b)=> b[1]-a[1]).slice(0,k)
        
        return maximums.map(x=> x[0])
    }
}
