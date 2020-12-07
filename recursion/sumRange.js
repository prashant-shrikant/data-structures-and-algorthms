// Calculate the sum of all values from 1 to num

// without Recursion
const sumRange = num => {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

const result = sumRange(5);
console.log(result);

// with recursion
const sumRangerecursion = num => {
    if (num === 1) return 1;
    return num + sumRangerecursion(num - 1)
} 


const resultRecursion = sumRangerecursion(5);
console.log(resultRecursion);