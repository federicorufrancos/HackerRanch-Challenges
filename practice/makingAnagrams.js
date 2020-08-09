function makingAnagrams(s1, s2) {
	const s1Set = new Set(Array.from(s1));
	const s2Set = new Set(Array.from(s2));
	const difference = new Set([...s2Set].filter((x) => !s1Set.has(x)));
	let minDelete = 0;
	s1Set.forEach((value) => {
		const valueS1 = s1.match(new RegExp(value, "g") || []);
		const valueS2 = s2.match(new RegExp(value, "g") || []);
		const lengthCharS1 = valueS1 ? valueS1.length : 0;
		const lengthCharS2 = valueS2 ? valueS2.length : 0;
		const diff = Math.abs(lengthCharS1 - lengthCharS2);
		minDelete = minDelete + diff;
	});
	difference.forEach((value) => {
		const valueS2 = s2.match(new RegExp(value, "g") || []);
		const lengthCharS2 = valueS2 ? valueS2.length : 0;
		minDelete = minDelete + lengthCharS2;
	});
	return minDelete;
}
makingAnagrams("cde", "abc");
makingAnagrams(
	"absdjkvuahdakejfnfauhdsaavasdlkj",
	"djfladfhiawasdkjvalskufhafablsdkashlahdfa"
);
