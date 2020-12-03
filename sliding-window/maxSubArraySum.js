// Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) --> 10
// maxSubarraySum([1,2,5,2,8,1,5],4) --> 17

// Naive solution
const maxSubarraySum = (arr, n) => {
    let max = 0
    if (n > arr.length ) {
        return null;
    }
    for (let i = 0; i < arr.length - n + 1; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum = sum + arr[i + j];
        }
        if (sum > max) {
            max = sum;
        }
    } return max;
}

const result = maxSubarraySum([1,2,5,2,8,1,5],4);
console.log(result);

// optimized solution
const maxSubarraySumOptimized = (arr, n) => {
    if (n > arr.length) {
        return null;
    } 
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]
    } 
    tempSum = maxSum; 
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - n];
        maxSum = Math.max(maxSum, tempSum); 
    }
    return maxSum; 
}

const resultOptimized = maxSubarraySumOptimized([1,2,5,2,8,1,5],4);
console.log(resultOptimized)