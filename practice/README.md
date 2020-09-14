## Making Anagrams

We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice is taking a cryptography class and finding anagrams to be very useful. She decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

Given two strings, **s1** and **s2**, that may not be of the same length, determine the minimum number of character deletions required to make **s1** and **s2** anagrams. Any characters can be deleted from either of the strings.

For example, **s1 = abc** and **s2 = amnop**. The only characters that match are the **a**'s so we have to remove **bc** from **s1** and **mnop** from **s2** for a total of **6**  deletions.

### Function Description

Complete the makingAnagrams function in the editor below. It should return an integer representing the minimum number of deletions needed to make the strings anagrams.

makingAnagrams has the following parameter(s):

- s1: a string
- s2: a string

### Input Format

The first line contains a single string, **s1**.
The second line contains a single string, **s2**.

It is guaranteed that  and  consist of lowercase English letters, ascii[a-z].

### Output Format

Print a single integer denoting the minimum number of characters which must be deleted to make the two strings anagrams of each other.

[See Solution](../practice/makingAnagrams.js)


##  Game of Thrones - I

Dothraki are planning an attack to usurp King Robert's throne. King Robert learns of this conspiracy from Raven and plans to lock the single door through which the enemy can enter his kingdom.

But, to lock the door he needs a key that is an anagram of a palindrome. He starts to go through his box of strings, checking to see if they can be rearranged into a palindrome.

For example, given the string [**s = [aabbccdd]**, one way it can be arranged into a palindrome is **abcddcba**.

### Function Description

Complete the gameOfThrones function below to determine whether a given string can be rearranged into a palindrome. If it is possible, return YES, otherwise return NO.

gameOfThrones has the following parameter(s):

- s: a string to analyze

### Input Format

A single line which contains **s**, the input string.

### Output Format

A single line which contains YES or NO.

[See Solution](../practice/gameOfThrones.js)


## Chocolate Feast

Little Bobby loves chocolate. He frequently goes to his favorite **5 & 10**  store, Penny Auntie, to buy them. They are having a promotion at Penny Auntie. If Bobby saves enough wrappers, he can turn them in for a free chocolate.

For example, Bobby has **n = 15** to spend on bars of chocolate that cost **c = 3**  each. He can turn in **m = 2** wrappers to receive another bar. Initially, he buys **5** bars and has **5**  wrappers after eating them. He turns in **4**  of them, leaving him with **1**, for **2** more bars. After eating those two, he has **3** wrappers, turns in **2**  leaving him with **1** wrapper and his new bar. Once he eats that one, he has **2** wrappers and turns them in for another bar. After eating that one, he only has **1** wrapper, and his feast ends. Overall, he has eaten **5 + 2 + 1 + 1 = 9** bars.

### Function Description

Complete the chocolateFeast function in the editor below. It must return the number of chocolates Bobby can eat after taking full advantage of the promotion.

chocolateFeast has the following parameter(s):

n: an integer representing Bobby's initial amount of money
c: an integer representing the cost of a chocolate bar
m: an integer representing the number of wrappers he can turn in for a free bar
Note: Little Bobby will always turn in his wrappers if he has enough to get a free chocolate.

### Input Format

The first line contains an integer, **t**, denoting the number of test cases to analyze.
Each of the next **t** lines contains three space-separated integers: **n**, **c**, and **m**. They represent money to spend, cost of a chocolate, and the number of wrappers he can turn in for a free chocolate.

### Output Format

For each trip to Penny Auntie, print the total number of chocolates Bobby eats on a new line.

[See Solution](../practice/chocolateFeast.js)


## Grading Students

HackerLand University has the following grading policy:

Every student receives a **grade**  in the inclusive range from **0**  to **100**.
Any **grade** less than **40** is a failing grade.
Sam is a professor at the university and likes to round each student's **grade** according to these rules:

If the difference between the **grade** and the next multiple of **5** is less than **3**, round **grade** up to the next multiple of **5**.
If the value of **grade** is less than **38**, no rounding occurs as the result will still be a failing grade.
For example,  will be rounded to  but  will not be rounded because the rounding would result in a number that is less than .

Given the initial value of **grade** for each of Sam's **n** students, write code to automate the rounding process.

### Function Description

Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.
gradingStudents has the following parameter(s):

* grades: an array of integers representing grades before rounding

### Input Format

The first line contains a single integer, **n**, the number of students.
Each line **i** of the **n** subsequent lines contains a single integer, **grades[i]**, denoting student **i**'s grade.

### Output Format

For each **grades[i]**, print the rounded grade on a new line.

[See Solution](../practice/gradingStudents.js)


## Simple Array Sum

Given an array of integers, find the sum of its elements.

For example, if the array **ar=[1,2,3], 1+2+3=6**, so return **6**.

### Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):

* ar: an array of integers

### Input Format

The first line contains an integer, **n**, denoting the size of the array.
The second line contains **n** space-separated integers representing the array's elements.

### Output Format

Print the sum of the array's elements as a single integer.

[See Solution](../practice/simpleArraySum.js)


## Compare the Triplets

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

### Example

a = [1, 2, 3]
b = [3, 2, 1]
For elements *0*, Bob is awarded a point because a[0] .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.
The return array is [1, 1] with Alice's score first and Bob's second.

### Function Description

Complete the function compareTriplets in the editor below.

compareTriplets has the following parameter(s):

* int a[3]: Alice's challenge rating
* int b[3]: Bob's challenge rating

### Return

* int[2]: Alice's score is in the first position, and Bob's score is in the second.

### Input Format

The first line contains 3 space-separated integers, a[0], a[1], and a[2], the respective values in triplet a.
The second line contains 3 space-separated integers, b[0], b[1], and b[2], the respective values in triplet b.

[See Solution](../practice/compareTriplets.js)


## A Very Big Sum

In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

### Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

* int ar[n]: an array of integers .

### Return

* long: the sum of all array elements

### Input Format

The first line of the input consists of an integer **n**.
The next line contains **n** space-separated integers contained in the array.

### Output Format

Return the integer sum of the elements in the array.