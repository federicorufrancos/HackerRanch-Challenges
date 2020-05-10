function sherlockAndAnagrams(s) {
    const source = Array.from(s);
    console.log('---------------------------------->', s);
    let totalAnagrams = 0;
    let dictionary = {};
    for (let i = 1; i < source.length; i++) {
        dictionary[i] = new Array();
        for (let j = 0; j < source.length / i + 1; j++) {
            const newChar = source.slice(j, i + j);
            if (newChar.length === i) {
                dictionary[i].push(newChar);
            }
        }
    }
    for (let item in dictionary) {
        let stringCollection = dictionary[item];
        while (stringCollection.length > 1) {
            const char = stringCollection.shift().sort().join('');
            let keepSearching = true;
            let position = 0;
            while (position < stringCollection.length && keepSearching) {
                const checkStringSorted = stringCollection[position].sort().join('');
                position += 1;

                if (char === checkStringSorted) {
                    totalAnagrams = totalAnagrams + 1;
                }
            }
        }
    };
    return totalAnagrams;

}

//console.log(sherlockAndAnagrams('cdcd'));
//console.log(sherlockAndAnagrams('ifailuhkqq'));
console.log(sherlockAndAnagrams('kkkk'));
//console.log(sherlockAndAnagrams('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));
//console.log(sherlockAndAnagrams('dbcfibibcheigfccacfegicigcefieeeeegcghggdheichgafhdigffgifidfbeaccadabecbdcgieaffbigffcecahafcafhcdg'));
