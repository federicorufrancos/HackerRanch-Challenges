function minimumSwaps(arr) {
    let minimunSwapsCounter = 0;
    let orderedNumbers = new Set();
    let position = 0;

    while (orderedNumbers.size < arr.length) {
        const actualNumber = position + 1;
        if (orderedNumbers.has(actualNumber)) {
            position += 1;
        } else {
            if (arr[position] === actualNumber) {
                orderedNumbers.add(actualNumber);
            } else {
                let nextPosition = actualNumber;
                while (
                    nextPosition < arr.length &&
                    arr[nextPosition] !== actualNumber
                ) {
                    nextPosition += 1;
                }
                if (arr[nextPosition] === actualNumber) {
                    let buffer = arr[nextPosition];
                    arr[nextPosition] = arr[position];
                    arr[position] = buffer;
                    minimunSwapsCounter += 1;
                }
            }
            position += 1;
            if (position === arr.length) {
                position = 0;
            }
        }
    }
    return minimunSwapsCounter;
}

console.log(minimumSwaps([4, 3, 1, 2]));
console.log(minimumSwaps([2, 3, 4, 1, 5]));
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));
