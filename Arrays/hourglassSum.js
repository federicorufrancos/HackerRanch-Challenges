function calculateHourglass(arr, i, j) {
    const rowOne = arr[j - 1][i] + arr[j - 1][i + 1] + arr[j - 1][i + 2];
    const rowTwo = arr[j][i + 1];
    const rowThree = arr[j + 1][i] + arr[j + 1][i + 1] + arr[j + 1][i + 2];
    return rowOne + rowTwo + rowThree;
}

function hourglassSum(arr) {
    let maxHourglass = -81;
    for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 5; j++) {
            const total = calculateHourglass(arr, i, j);
            console.log(`total`, total);
            if (maxHourglass < total) {
                maxHourglass = total;
            }
        }
    }
    return maxHourglass;
}
