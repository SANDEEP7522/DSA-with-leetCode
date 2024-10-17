// 1441. Build an Array With Stack Operations

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const ans = [];
  let i = 1;
  // Iterate over each element in the target array
  for (const idx in target) {
    // Get the current element from the target array
    const element = target[idx];

    // While the current number 'i' is less than the target element
    while (i < element) {
      // Log the current number (for debugging purposes)
      console.log(i);
      // Push the current number onto the stack (array)
      ans.push("Push");

      // Pop the number from the stack (simulating that we don't keep it)
      ans.push("Pop");

      // Move to the next number
      i++;
    }
    // Once we reach the target element, push it onto the stack
    ans.push("Push");
    // Move to the next number after pushing the target element
    i++;
  }
  return ans;
};
