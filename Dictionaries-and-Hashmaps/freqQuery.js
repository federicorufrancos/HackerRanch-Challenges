function freqQuery(queries) {
    let repetitions = [];
    let dataStructure = [];
    let hashNumbers = {};
    for (let value in queries) {

        const currentValue = queries[value][1];
        switch (queries[value][0]) {
            case 1:
                dataStructure.push(currentValue);
                hashNumbers[currentValue] = hashNumbers[currentValue] ? hashNumbers[currentValue] + 1 : 1;
                break;
            case 2:
                const position = dataStructure.findIndex(item => item === queries[value][1]);
                if (position > -1) {
                    dataStructure.splice(position, 1);
                    hashNumbers[currentValue] = hashNumbers[currentValue] - 1;
                }
                break;
            case 3:
                const currentTimes = Object.values(hashNumbers).find(n => n === currentValue);
                repetitions.push(currentTimes ? 1 : 0);
                break;
        }
    }
    return repetitions;
}

console.log(
    "result",
    freqQuery([
        [1, 1],
        [2, 2],
        [3, 2],
        [1, 1],
        [1, 1],
        [2, 1],
        [3, 2],
    ])
);
console.log(
    "result",
    freqQuery([
        [1, 1],
        [2, 2],
        [3, 2],
        [1, 1],
        [1, 1],
        [2, 1],
        [3, 2],
    ])
);
console.log(
    "result",
    freqQuery([
        [3, 4],
        [2, 1003],
        [1, 16],
        [3, 1],
    ])
);
console.log(
    "result",
    freqQuery([
        [1, 3],
        [2, 3],
        [3, 2],
        [1, 4],
        [1, 5],
        [1, 5],
        [1, 4],
        [3, 2],
        [2, 4],
        [3, 2],
    ])
);
