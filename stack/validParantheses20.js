// 20. Valid Parentheses


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) { 
        let currElement = s[i];
      if (currElement === '(' || currElement === '{' || currElement === '[') {
            stack.push(currElement);
        } else {

            if (stack.length === 0) {
                return false;
            }
            
            let topElement = stack[stack.length - 1];
            if ((topElement === '(' && currElement === ')') ||
                (topElement === '{' && currElement === '}') ||
                (topElement === '[' && currElement === ']')) {
                stack.pop();
            } else {
                return false; 
            }
        }
    }
  return stack.length === 0;
}
