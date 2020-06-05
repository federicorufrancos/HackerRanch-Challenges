function isValid(s) {
    let charactersMap = {};
    for (let i = 0; i < s.length; i++) {
        const character = s.charAt(i);
        if (!charactersMap[character]) {
            charactersMap[character] = 1;
        } else {
            charactersMap[character] += 1;
        }
    }
    const charactersArray = Object.values(charactersMap);
    const maxValue = Math.max(...charactersArray);
    const minValue = Math.min(...charactersArray);
    const difference = Math.abs(maxValue - minValue);
    if (difference === 0) {
        return "YES";
    } else {
        const filterMax = charactersArray.filter((value) => value === maxValue);
        const filterMin = charactersArray.filter((value) => value === minValue);
        if (difference === 1) {
            if (filterMax.length < 2) {
                return "YES";
            } else {
                if (filterMin.length < 2) {
                    return "YES";
                }
            }
        } else {
            if (
                filterMin.length === 1 &&
                filterMax.length === charactersArray.length - 1
            ) {
                return "YES";
            }
        }
    }
    return "NO";
}

//console.log(isValid("aabbccddeefghi"));
//console.log(isValid("abcdefghhgfedecba"));
/* console.log(isValid("abc"));
console.log(isValid("abcc"));
console.log(isValid("abccc")); */
//console.log(isValid("aabbc"));

console.log(
    isValid(
        "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"
    )
);
