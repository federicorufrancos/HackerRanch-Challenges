function checkMagazine(magazine, note) {
    let hasAllWords = true;
    let position = 0;
    while (hasAllWords && position < note.length) {
        const magazineWordIndex = magazine.findIndex(
            (word) => word === note[position]
        );
        if (magazineWordIndex >= 0) {
            magazine.splice(magazineWordIndex, 1);
            position = position + 1;
        } else {
            hasAllWords = false;
        }
    }
    if (hasAllWords) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
