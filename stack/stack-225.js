// 225. Implement Stack using Queues


// Define the MyStack constructor function
var MyStack = function() {
   this.q1 = [];
    this.q2 = []; 
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);   // Always push new elements
};

/**
 *  @return {number}
 */
MyStack.prototype.pop = function() {
    // Transfer all elements q1 to q2
    while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());// q1 to q2
    }
    var newEle = this.q1.shift(); // Store the top element
    this.q1 = this.q2; // Now q1 has the elements q2
    this.q2 = []; // Reset q2 to empty
    return newEle; 
};

/**
 *  @return {number} 
 */
MyStack.prototype.top = function() {
    // Transfer all elements except the last one from q1 to q2
    while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
    }
    // The last element in q1 is the top of the stack; remove it
    var newEle = this.q1.shift();
    this.q2.push(newEle); 
    // Swap q1 and q2 
    this.q1 = this.q2;
    this.q2 = []; 
    return newEle; 
};

/**
 *  @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0; // Check if q1 is empty
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack(); // Create a new instance of MyStack
 * obj.push(x);            // Adds x to the stack
 * var param_2 = obj.pop(); // Removes and returns the top element
 * var param_3 = obj.top(); // Returns the top element without removing it
 * var param_4 = obj.empty(); // Returns true if the stack is empty, false otherwise
 */
