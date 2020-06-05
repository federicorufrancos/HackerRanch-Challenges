function rotLeft(a, d) {
    let rotatedArray = [];
    let size = a.length;
    a.forEach((item, index) => {
        let newPosition = index - d;
        if (newPosition < 0) {
            newPosition = newPosition + size;
        }
        rotatedArray[newPosition] = item;
    });
    return rotatedArray;
}

console.log(rotLeft([1, 2, 3], 2).join().replace(/,/g, " "));
