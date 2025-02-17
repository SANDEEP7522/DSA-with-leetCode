/*
 * Problem statement
You are given an integer ‘N’, which denotes there are ‘N’ friends. You are supposed to form some pairs them satisfying the following conditions:

1. Each friend can be paired with some other friend or remain single.

2. Each friend can be a part of at most one pair.

You are supposed to find the total number of ways in which the pairing can be done satisfying both conditions. Since the number of ways can be quite large, you should find the answer modulo 1000000007(10^9+7).

Note:
1. Return the final answer by doing a mod with 10^9 + 7.
2. Pairs {A, B} and {B, A} are considered the same.
 */
import java.util.Arrays;


public class Solution {
     public  static long  mod = 1000000007;
     public  static long [] dp;
    public static long  f(int n) {
     if (n == 0 || n == 1 || n == 2) {
          return n;
     }

     if(dp[n] != -1) return dp[n];

     long  singleWays = f(n-1) % mod;
     long  doubleWays = ((n-1)% mod * f(n-2) % mod) % mod;
     return dp[n] = (singleWays%mod + doubleWays%mod) % mod;
   }

    public static int  numberOfWays(int n){
     dp = new long[10005];
     Arrays.fill(dp, -1);
     return (int)f(n);
    }
}