function searchIn(base, source) {
    let position = 0;
    let keepSearching = true;
    let found = false;
    while (!found && keepSearching) {
        const searchingCharacter = source.charAt(position);
        found = base.includes(searchingCharacter);
        if (!found) {
            position += 1;
            keepSearching = position < source.length;
        }
    }
    return found;
}
function twoStrings(s1, s2) {
    let found = false;
    if (s1.length < s2.length) {
        found = searchIn(s2, s1);
    } else {
        found = searchIn(s1, s2);
    }
    return found ? `YES` : `NO`;
}
