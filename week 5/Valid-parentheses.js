class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    let stack = []
    let map = {
    ']': '[',
    '}' :'{',
    ')':'(',
    }

    for (let bracket of s){
    if(bracket === '['|| bracket === '{' || bracket === '('){
        stack.push(bracket)
        console.log(bracket, s)
    }else{
        if(stack.pop() != map[bracket]){
        return false
        }
    }
}
  if(stack.length === 0){
    return true
  }else{
    return false
    }
}
}