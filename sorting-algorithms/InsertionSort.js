const InsertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j];
        } 
        arr[j+1] = currentValue;
    } 
    return arr;
}

const result = InsertionSort([5, 1, 65, 32, 90, 4]);
console.log(result);