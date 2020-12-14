const pivot = (arr, start=0, end=arr.length- 1) => {
    let swapIndex = start;
    let pivotValue = arr[start];
    
    for (let i = start + 1; i < arr.length; i++) {
        if (pivotValue > arr[i]) {
            swapIndex++;
            arr = swap(arr, swapIndex, i);
        }
    } 
    arr = swap(arr, start, swapIndex);
    return swapIndex;
}

const swap = (arr, first, second) => {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
    return arr;
}

const quickSort = (arr, left=0, right=arr.length -1 ) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex+1, right);
    } return arr;
}

const result = quickSort([4, 8, 2, 1, 5, 7, 5, 6, 3]);
console.log(result);