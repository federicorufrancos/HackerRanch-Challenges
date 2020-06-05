function alternatingCharacters(s) {
    let total = 0;
    let i = 0;
    while (i < s.length) {
        const character = s.charAt(i);
        i += 1;
        while (i < s.length && character === s.charAt(i)) {
            i += 1;
            total += 1;
        }
    }
    return total;
}

console.log(alternatingCharacters("AAAA"));
console.log(alternatingCharacters("ABABABAB"));
console.log(alternatingCharacters("AAABBB"));
