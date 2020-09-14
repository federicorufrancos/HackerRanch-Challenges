function simpleArraySum(arr) {
	return arr.reduce((total, value) => total + value);
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
