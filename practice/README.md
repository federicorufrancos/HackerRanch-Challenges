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