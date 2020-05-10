function jumpingOnClouds(c) {
    const cloudsLength = c.length - 1;
    let totalJumps = 0;
    let curentCloud = 0;
    while (curentCloud < cloudsLength) {
        let jumpSize = 1;
        if (c[curentCloud + 2] < cloudsLength && c[curentCloud + 2] === 0) {
            jumpSize = 2;
        }
        curentCloud = curentCloud + jumpSize;
        totalJumps = totalJumps + 1;
    }
    return totalJumps;
}
