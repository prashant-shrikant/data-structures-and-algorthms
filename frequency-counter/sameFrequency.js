const digitize = n => [...`${n}`].map(i => parseInt(i));

const sameFrequency = (num1, num2) => {

    const arr1 = digitize(num1);
    const arr2 = digitize(num2);

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(frequencyCounter2.hasOwnProperty(key) && frequencyCounter1[key] == frequencyCounter2[key])) {
            return false;
        }
    } return true;
}

const result = sameFrequency(182, 21);
console.log(result);