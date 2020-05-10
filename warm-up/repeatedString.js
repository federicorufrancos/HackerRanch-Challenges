function repeatedString(s, n) {
    const repeatString = Math.floor(n / s.length);
    const restStrings = n % s.length;
    let totalA = s.length - s.replace(/a/g, ``).length;
    let restAs = 0;
    if (restStrings > 0) {
        const sliceS = s.slice(0, restStrings);
        restAs = sliceS.length - sliceS.replace(/a/g, ``).length;
    }
    return totalA * repeatString + restAs;
}
