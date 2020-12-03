// Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) --> 10
// maxSubarraySum([1,2,5,2,8,1,5],4) --> 17

// Naive solution
const maxSubarraySum = (arr, n) => {
    let max = 0
    for (let i = 0; i < arr.length - n + 1; i++) {
        for (let j = i+1; j < i + n; i++) {
            const sum = arr[i] + arr[j];
            if (sum > max) {
                max = sum;
            }
        }
    } return max;
}

const result = maxSubarraySum([1,2,5,2,8,1,5],2);
console.log(result);