
// array 

class stack{
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
let s = new stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
console.log(s.top());
s.pop() // remove 40
console.log(s.top());



 