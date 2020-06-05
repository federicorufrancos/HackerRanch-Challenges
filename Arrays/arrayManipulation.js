function arrayManipulation(n, queries) {
    const finalSum = Array.from(Array(n + 1).fill(0));
    let max = 0;
    queries.forEach((query) => {
        const start = query[0] - 1;
        const end = query[1] - 1;
        const value = query[2];
        finalSum[start] += value;
        finalSum[end + 1] -= value;
        //I'm saving this time on updating each element on the array
        /* for (let i = start; i <= end; i++) {
            finalSum[i] += value;
            max = max > finalSum[i] && finalSum[i];
        } */
    });
    //Using the prefix-algorithm approach
    for (let i = 1; i < n; i++) {
        finalSum[i] += finalSum[i - 1];
        max = finalSum[i] > max ? finalSum[i] : max;
    }
    return max;
}

const array1 = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
];

console.log(arrayManipulation(5, array1));

const array2 = [
    [1400906, 9889280, 90378],
    [6581237, 9872072, 87106],
    [4386373, 9779851, 52422],
    [198648, 4373818, 52898],
    [5770793, 6783792, 71662],
    [8347130, 8855655, 73004],
    [3864995, 9096330, 24671],
    [503878, 6711964, 63592],
    [1523170, 4839982, 9906],
    [8537134, 8724078, 71133],
    [124983, 3641723, 76764],
    [848453, 9222572, 48836],
    [3608944, 4251911, 28686],
    [499113, 2920685, 43685],
    [4073583, 7282905, 14478],
    [261598, 8654911, 77959],
    [2519906, 6734602, 90640],
];

console.log(arrayManipulation(10000000, array2));
