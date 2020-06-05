function makeAnagram(a, b) {
    let deletedCharacters = 0;
    const arrayA = a.split("");
    const arrayB = b.split("");
    const setA = new Set(a.split(""));
    const setB = new Set(b.split(""));
    setA.forEach((char) => {
        const timesA = arrayA.filter((look) => look === char).length;
        const timesB = arrayB.filter((look) => look === char).length;
        deletedCharacters += Math.abs(timesA - timesB);
        setB.delete(char);
    });
    setB.forEach((char) => {
        const timesB = arrayB.filter((look) => look === char).length;
        deletedCharacters += timesB;
    });
    return deletedCharacters;
}

console.log(
    makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")
);
console.log(makeAnagram("showman", "woman"));
