function chocolateFeast(n, c, m) {
	let chocolatesGets = n / c;
	let totalEat = 0;
	let wrapLeft = 0;
	while (chocolatesGets > 0) {
		totalEat = totalEat + chocolatesGets;
		const promo = chocolatesGets / m;
		wrapLeft = wrapLeft + (chocolatesGets % m);
		if (Math.floor(promo) > 0) {
			chocolatesGets = Math.floor(promo);
		} else {
			if (wrapLeft > 0) {
				const promo2 = wrapLeft / m;
				wrapLeft = wrapLeft - promo2 * m;
				chocolatesGets = Math.floor(promo2);
			}
		}
	}
	return Math.floor(totalEat);
}

console.log(`========> total:`, chocolateFeast(10, 2, 5));
console.log(`========> total:`, chocolateFeast(12, 4, 4));
console.log(`========> total:`, chocolateFeast(6, 2, 2));
