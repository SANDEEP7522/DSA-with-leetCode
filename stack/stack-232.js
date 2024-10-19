// 232. Implement Queue using Stacks

var MyQueue = function() {
    this.inputStack = []; // pushing
    this.outputStack = []; //popping
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.outputStack.push(x); //push new elements output stack
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // If inputStack is empty, transfer all elements from outputStack to inputStack
    if (this.inputStack.length === 0) {
        while (this.outputStack.length > 0) {
            // Move elements from outputStack to inputStack
            this.inputStack.push(this.outputStack.pop());
        }
    }
   
    return this.inputStack.pop(); // Pop from inputStack 
};

/**
 *  @return {number} 
 */
MyQueue.prototype.peek = function() {
    if (this.inputStack.length === 0) {
        while (this.outputStack.length > 0) {
            this.inputStack.push(this.outputStack.pop());
        }
    }
    return this.inputStack[this.inputStack.length - 1]; // Return the last element of inputStack 
};

/**
 * @return {boolean} 
 */
MyQueue.prototype.empty = function() {
   
    return this.inputStack.length === 0 && this.outputStack.length === 0;  //empty if both 
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue();
 * obj.push(x);       // Adds x to the queue
 * var param_2 = obj.pop(); // Removes and returns the front element
 * var param_3 = obj.peek(); // Returns the front element without removing it
 * var param_4 = obj.empty(); // Returns true if the queue is empty, false otherwise
 */
