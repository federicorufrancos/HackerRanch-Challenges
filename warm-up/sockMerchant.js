function sockMerchant(n, ar) {
    let totalOfPairs = 0;
    while (n > 0) {
        n = n - 1;
        const matchingColor = ar.shift();
        let position = 0;
        let totalSocksColor = 1;
        while (position < n) {
            if (ar[position] === matchingColor) {
                totalSocksColor = totalSocksColor + 1;
                ar.splice(position, 1);
                n = n - 1;
            } else {
                position = position + 1;
            }
        }
        if (totalSocksColor > 1) {
            totalOfPairs = totalOfPairs + Math.trunc(totalSocksColor / 2);
        }
    }
    return totalOfPairs;
}
