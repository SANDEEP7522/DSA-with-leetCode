/**
 * @param {string} 
 * @return {string}
 */
 
class Stack{
    // private properties after using # it's not excess  give out put undefined
    #arr;

    constructor(){
        this.#arr = [];
    }
    push(element){
        this.#arr.push(element);
    }
    pop(element){
        this.#arr.pop();
    }
    top(element){
        return this.#arr[this.#arr.length - 1];
    }
    isEmpty(){
        return this.#arr.length == 0;
      }

}
var removeStars = function(s) {
   let st = new Stack();
   let i = 0;
    while( i < s.length){
        if(s[i] != '*'){
            st.push(s[i]);
        }else if(s[i] == '*' && !st.isEmpty()){
            st.pop();
        }
        i++;
    }
    let result = "";
      while(!st.isEmpty()){
        let ch = st.top();
        st.pop();
        result = ch + result;

      }
      return result;
};