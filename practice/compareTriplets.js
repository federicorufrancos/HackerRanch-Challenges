function compareTriplets(a, b) {
	const finalPoints = [0, 0];
	a.forEach((value, index) => {
		if (value > b[index]) {
			finalPoints[0] += 1;
		} else {
			if (value < b[index]) {
				finalPoints[1] += 1;
			}
		}
	});
	return finalPoints;
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
