const naiveStringSearch = (str1, str2) => {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if ( str1[i] !== str2[j]) {
                break;
            } count++;
        }
    } return count;
}

const result = naiveStringSearch('omghiklshik', 'hik');
console.log(result);