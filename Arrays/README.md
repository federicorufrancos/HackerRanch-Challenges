## 2D Array - DS

Given a **6x6** 2D Array, **arr**:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in **A** to be a subset of values with indices falling in this pattern in **arr**'s graphical representation:

a b c
  d
e f g

There are **16** hourglasses in **arr**, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in **ar**, then print the maximum hourglass sum.

For example, given the 2D array:
-9 -9 -9 1 1 1
 0 -9  0 4 3 2
-9 -9 -9 1 2 3
 0  0  8 6 6 0
 0  0  0-2 0 0
 0  0  1 2 4 0

We calculate the following hourglass values:
-63, -34, -9, 12,
-10,   0, 28, 23,
-27, -11, -2, 10,
  9,  17, 25, 18

Our highest hourglass value is from the hourglass:
0 4 3
  1
8 6 6

### Function Description

Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.

hourglassSum has the following parameter(s):

* arr: an array of integers

### Input Format

Each of the **6** lines of inputs **arr[i]** contains **6** space-separated integers **arr[i][j]**.

[See Solution](../Arrays/hourglassSum.js)


## Left Rotation

A left rotation operation on an array of size **n** shifts each of the array's elements **1** unit to the left. For example, if **2** left rotations are performed on array **[1,2,3,4,5]**, then the array would become **[3,4,5,1,2]**.

Given an array of **n**  integers and a number, **d**, perform **d** left rotations on the array. Then print the updated array as a single line of space-separated integers.

### Input Format

The first line contains two space-separated integers denoting the respective values of **n**  (the number of integers) and **d** (the number of left rotations you must perform).
The second line contains **n** space-separated integers describing the respective elements of the array's initial state.

[See Solution](../Arrays/rotLeft.js)


## New Year Chaos

It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by **1** from **1**  at the front of the line to **n** at the back.

Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. One person can bribe at most two others. For example, if **n = 8** and **Person 5**  bribes **Person 4**, the queue will look like this: **1, 2, 3, 5, 4, 6, 7, 8**.

Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!

### Function Description

Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.

minimumBribes has the following parameter(s):

* q: an array of integers

### Input Format

The first line contains an integer **t**, the number of test cases.

Each of the next **t** pairs of lines are as follows:
- The first line contains an integer **t**, the number of people in the queue
- The second line has **n** space-separated integers describing the final state of the queue.

[See Solution](../Arrays/minimumBribes.js)

## Minimum Swaps 2

You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

For example, given the array **arr=[7, 1, 3, 2, 4, 5, 6]** we perform the following steps:

i   arr                     swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]

It took **5** swaps to sort the array.

### Function Description

Complete the function minimumSwaps in the editor below. It must return an integer representing the minimum number of swaps to sort the array.

minimumSwaps has the following parameter(s):

* arr: an unordered array of integers

### Input Format

The first line contains an integer, **n**, the size of **arr**.
The second line contains **n** space-separated integers **arr[i]**.

[See Solution](../Arrays/minimumBribes.js)

## Array Manipulation

Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in your array.

For example, the length of your array of zeros **n=10**. Your list of queries is as follows:

    a b k
    1 5 3
    4 8 7
    6 9 1

Add the values of **k** between the indices **a** and **b** inclusive:

index->	 1 2 3  4  5 6 7 8 9 10
	[0,0,0, 0, 0,0,0,0,0, 0]
	[3,3,3, 3, 3,0,0,0,0, 0]
	[3,3,3,10,10,7,7,7,0, 0]
	[3,3,3,10,10,8,8,8,1, 0]

The largest value is  after all operations are performed.

### Function Description

Complete the function arrayManipulation in the editor below. It must return an integer, the maximum value in the resulting array.

arrayManipulation has the following parameters:

* n - the number of elements in your array
* queries - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.

### Input Format

The first line contains two space-separated integers **n** and **m**, the size of the array and the number of operations.
Each of the next **m** lines contains three space-separated integers **a**, **b**  and **k**, the left index, right index and summand.

[See Solution](../Arrays/arrayManipulation.js)
