// 1670. Design Front Middle Back Queue



var FrontMiddleBackQueue = function() {
    this.queue = []; // creat a queuw
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.queue.unshift(val); // using unshift method fush the front element
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  var middle = Math.floor((this.queue.length)/2); // find mid using math.floor() and divide teo part ur q
  this.queue.splice(middle, 0 , val); // splice push middle element
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.queue.push(val); // push methode push element
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    return (this.queue.length == 0) ? -1 : this.queue.shift(); // first check then first element shift()
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
     if(this.queue.length == 0) // check the q ur q 0 then return -1
     return -1

     let middle = Math.floor((this.queue.length - 1) / 2); 
     return this.queue.splice(middle, 1)[0];
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    return (this.queue.length == 0) ? -1 :this.queue.pop();
};

/** 
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */