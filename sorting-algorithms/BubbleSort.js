// Regular
const bubbleSort = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i -1 ; j++) {
            if (arr[j] > arr[j+1]) {
                arr = swap(arr, j, j+1);
            }
        }
    } return arr;
}

// Optimized
const bubbleSortOptimized = (arr) => {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i -1 ; j++) {
            if (arr[j] > arr[j+1]) {
                arr = swap(arr, j, j+1);
                noSwaps = false;
            }
        } if (noSwaps) break;
    } return arr;
}

const swap = (arr, first, second) => {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    return arr;
}

const result = bubbleSortOptimized([1, 5, 4, 2, 7, 6, 9]);
console.log(result);