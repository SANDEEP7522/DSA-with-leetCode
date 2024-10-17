// 895. Maximum Frequency Stack

// Constructor for the FreqStack class
var FreqStack = function() {
    // Object to store the frequency of each element
    this.freqMap = {};
    // Variable to track the maximum frequency of any element in the stack
    this.maxFreq = 0;
    // Object to map frequencies to arrays of elements that have that frequency
    this.elementMap = {};
};

/** 
 * Pushes an element onto the stack, updating its frequency.
 * @param {number} val - The value to push onto the stack
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    // Check if the value is already in the frequency map
    if (!this.freqMap[val]) {
        // If not, initialize its frequency to 1
        this.freqMap[val] = 1;
    } else {
        // If it exists, increment its frequency by 1
        this.freqMap[val] += 1;
    }
    
    // Update the maximum frequency if the current frequency of val is higher
    this.maxFreq = Math.max(this.maxFreq, this.freqMap[val]);
    
    // Get the current frequency of the value
    const frequency = this.freqMap[val];
    
    // Check if there is already an array for this frequency in the element map
    if (!this.elementMap[frequency]) {
        // If not, create a new array with the value
        this.elementMap[frequency] = [val];
    } else {
        // If it exists, push the value onto the existing array
        this.elementMap[frequency].push(val);
    }
};

/**
 * Pops the most frequent element from the stack.
 * @return {number} - The most frequent element
 */
FreqStack.prototype.pop = function() {
    // Retrieve the array of elements that have the maximum frequency
    const arr = this.elementMap[this.maxFreq];
    
    // Get the last element from the array (the most recently added element with max frequency)
    const result = arr[arr.length - 1];
    
    // Remove the last element from the array
    this.elementMap[this.maxFreq].pop();
    
    // Decrement the frequency of the popped element in the frequency map
    this.freqMap[result]--;
    
    // Check if there are no more elements at the current maximum frequency
    if (this.elementMap[this.maxFreq].length == 0) {
        // If the array is empty, delete the entry for that frequency
        delete this.elementMap[this.maxFreq];
        // Decrease the max frequency since no elements are left at that frequency
        this.maxFreq -= 1;
    }
    
    // Return the popped element
    return result;
};

/** 
 * Example of how to instantiate and use the FreqStack:
 * var obj = new FreqStack(); // Create a new instance of FreqStack
 * obj.push(val); // Push a value onto the stack
 * var param_2 = obj.pop(); // Pop the most frequent element from the stack
 */
