const areThereDuplicates = (...args) => {
    const frequencyCounter = {};

    for (let val of args) {
        frequencyCounter[val] = (frequencyCounter[val] || 0 ) + 1;
    }

    for (let key in frequencyCounter) {
        if ( frequencyCounter[key] > 1) {
            return true;
        }
    } return false;
};

const result = areThereDuplicates('a', 'b', 'c', 'a');
console.log(result)