

const getDigit = (num, place) => {
    return Math.floor (Math.abs(num) / Math.pow(10, place)) % 10;
}

const digitCount = num => {
    if (num == 0) {return 0;}
    return  Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = arr => {
    let max = 0;
    arr.forEach(element => {
        const count = digitCount(element);
        if (count > max ) {
            max = count;
        };
    }); 
    return max;
}

const radixSort = arr => {
    const maxDigitCount = mostDigits(arr);
    console.log(maxDigitCount);
    for (let i = 0; i < maxDigitCount; i++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            console.log(digit)
            digitBuckets[digit].push(arr[j]);
        }
        arr = [].concat(...digitBuckets); 
    } 
    return arr;
}

const result = radixSort([1, 123091, 45678, 12, 4356]);
console.log(result);