function gradingStudents(grades) {
	const roundedGrades = grades.map((grade) => {
		if (grade > 37) {
			const roundFive = Math.round(grade / 5) * 5;
			console.log(`roundFive`, roundFive);
			const difference = roundFive - grade;
			console.log(`difference `, difference);
			return difference > 0 && difference < 3 ? roundFive : grade;
		}
		return grade;
	});
	return roundedGrades;
}

console.log(`results: `, gradingStudents([73, 67, 38, 33]));
