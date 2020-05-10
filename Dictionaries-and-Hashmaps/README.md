## Two Strings

Given two strings, determine if they share a common substring. A substring may be as small as one character.

For example, the words "a", "and", "art" share the common substring . The words "be" and "cat" do not share a substring.

### Function Description

Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the strings share a common substring.

twoStrings has the following parameter(s):

-   s1, s2: two strings to analyze .

### Input Format

The first line contains a single integer **p**, the number of test cases.

The following **p** pairs of lines are as follows:

-   The first line contains string **s1**.
-   The second line contains string **s2**.

[See Solution](../Dictionaries-and-Hashmaps/checkMagazine.js)

## Hash Tables: Ransom Note

Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". The magazine has all the right words, but there's a case mismatch. The answer is **No**.

### Function Description

Complete the checkMagazine function in the editor below. It must print **Yes** if the note can be formed using the magazine, or **No**.

checkMagazine has the following parameters:

-   magazine: an array of strings, each a word in the magazine
-   note: an array of strings, each a word in the ransom note

[See Solution](../Dictionaries-and-Hashmaps/checkMagazine.js)

### Input Format

The first line contains two space-separated integers, and , the numbers of words in the and the ..
The second line contains space-separated strings, each .
The third line contains space-separated strings, each .

Constraints

[See Solution](../Dictionaries-and-Hashmaps/sherlockAndAnagrams.js)

## Sherlock and Anagrams

Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

For example **s = mom**, the list of all anagrammatic pairs is **[m, m]**, **[mo, om]** at positions **[[0], [2]], [[0, 1],[1, 2]]** respectively.

### Function Description

Complete the function sherlockAndAnagrams in the editor below. It must return an integer that represents the number of anagrammatic pairs of substrings in **s**.

sherlockAndAnagrams has the following parameter(s):

-   s: a string .

### Input Format

The first line contains an integer , the number of queries.
Each of the next lines contains a string to analyze.

[See Solution](../Dictionaries-and-Hashmaps/sherlockAndAnagrams.js)

## Frequency Queries

You are given queries **q**. Each query is of the form two integers described below:

-   **1 x** : Insert x in your data structure.
-   **2 y** : Delete one occurence of y from your data structure, if present.
-   **3 z** : Check if any integer is present whose frequency is exactly **z**. If yes, print 1 else 0.

The queries are given in the form of a 2-D array **queries** of size **q** where **queries[i][0]** contains the operation, and **queries[i][1]** contains the data element. For example, you are given array \*\*queries=[(1,1), (2,2), (3,2), (1,1), (1,1), (2,1), (3,2)]. The results of each operation are: **[0,1]**

Operation Array Output
(1,1) [1](2,2) [1](3,2) 0
(1,1) [1,1](1,1) [1,1,1](2,1) [1,1](3,2) 1
Return an array with the output: .

### Function Description

Complete the freqQuery function in the editor below. It must return an array of integers where each element is a **1** if there is at least one element value with the queried number of occurrences in the current array, or 0 if there is not.

freqQuery has the following parameter(s):

-   queries: a 2-d array of integers

### Input Format

The first line contains of an integer **q**, the number of queries.
Each of the next **q** lines contains two integers denoting the 2-d array **queries**.

[See Solution](../Dictionaries-and-Hashmaps/freqQuery.js)
