/*
 * 322. Coin Change
 * 
     You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

     Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

     You may assume that you have an infinite number of each kind of coin.

     

     Example 1:
 
     Input: coins = [1,2,5], amount = 11
     Output: 3
     Explanation: 11 = 5 + 5 + 1
 * 
 */

import java.util.Arrays;

class Solutions {
     public static int [] c; 
     public int f(int amount, int[] dp){
          if(amount < 0) return Integer.MAX_VALUE;
          if(amount == 0 ) return 0;

          if(dp[amount] != -1) return dp[amount];

          int ans = Integer.MAX_VALUE;
          int n = c.length;

          for (int i = 0; i < n; i++) {
               if (amount >= c[i]) {
                    ans = Math.min(ans, f(amount -c[i], dp));
               }
          }
          if ( ans == Integer.MAX_VALUE) {
               return dp[amount] = Integer.MAX_VALUE;
          }
          return dp[amount] = ans + 1;
     }
     public int coinChange(int[] coins, int amount){
          c = coins;
          int[] dp = new int[amount+1];
          Arrays.fill(dp, -1);
          int ans = f(amount, dp);
          return ( ans == Integer.MAX_VALUE) ? -1 : ans;
     }
}
