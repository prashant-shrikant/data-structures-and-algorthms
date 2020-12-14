const capitalizeFirst = arr => {
    if (arr.length === 1) {
        const word = arr[0];
        arr[0] = word[0].toUpperCase() + word.substring(1);
        return arr;
    } else {
        return capitalizeFirst(arr.slice(1))
    }
}

const result = capitalizeFirst(['prashant', 'shrikant'])
console.log(result);