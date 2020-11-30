// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// naive solution
const sumZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] == 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

const result = sumZero([-4, -3, -2, 2, 6, 7])
console.log(result)


// Optimized solution using multiple pointers
const sumZeroMultiplePointers = arr => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] + arr[right] == 0) {
            return [arr[left], arr[right]];
        } else if (arr[left] + arr[right] > 0) {
            right--;
        } else {
            left++
        }
    }
}

const resultOptimized = sumZeroMultiplePointers([-4, -3, -2, 2, 6, 7]);
console.log(resultOptimized);

