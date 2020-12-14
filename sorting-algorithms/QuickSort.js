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



const result = quickSort([4, 8, 2, 1, 5, 7, 5, 6, 3]);
console.log(result);