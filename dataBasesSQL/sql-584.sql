#  584. Find Customer Referee

# Write your MySQL query statement below
SELECT NAME
 
 FROM CUSTOMER

 WHERE referee_id IS NULL OR referee_id != 2
     