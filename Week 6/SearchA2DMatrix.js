class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let row = 0; row < matrix.length; row++){
            for(let column = 0; column < matrix[row].length; column++){
                if(matrix[row][column] == target){
                    return true
                }
            }
        }
        return false
    }
}
