// Write a function called frequencyCounter, which accepts two arrays. 
// The function should return true if every value in the array has it's corresponding value squared in the second array. 
// The frequency of values must be the same.


// Solution with O(n^2) time complexity
const frequencyCounter = (arr1, arr2) => {
    if ( arr1.length != arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] * arr1[i])
        if (correctIndex == -1) {
            return false;
        } arr2.splice(correctIndex, 1); // This removes the value at correctIndex from the array.
    }
    return true;
} 

const result = frequencyCounter([1, 2, 3], [2, 4, 9]);
console.log(result);

