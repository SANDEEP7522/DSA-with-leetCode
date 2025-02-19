/**
 * 120. Triangle
Solved
Medium
Topics
Companies
Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

Example 1:

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
 */

// like recurision

let matrix;

function f(row, col){
  if (row == matrix.length -1 ) {
     return matrix[row][col];
  }
  return matrix[row][col] + Math.min(f(row + 1, col), f(row + 1, col + 1));

}
var minimumTotal = function(triangle){
     matrix = triangle;
     return f(0, 0);
 }



// like DP
let matrixDp, dp;

function f(row, col) {
    // Base Case: Agar last row pe pahuch gaye toh waha ka value return kar do
    if (row === matrixDp.length - 1) {
        return matrixDp[row][col];
    }

    // Agar value already calculated hai toh direct return kar do (Memoization)
    if (dp[row][col] !== -1) return dp[row][col];

    // Recursively neeche jaake minimum path find karenge
    return dp[row][col] = matrixDp[row][col] + Math.min(f(row + 1, col), f(row + 1, col + 1));
}

var minimumTotal = function(triangle) {
    matrixDp = triangle;
    let n = triangle.length;

    // DP array ko loop se initialize karenge
    dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(-1);
    }

    return f(0, 0);
};


