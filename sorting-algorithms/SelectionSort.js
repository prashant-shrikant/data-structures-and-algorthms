const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minimum = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minimum] > j) {
                minimum = j;
            }
        } if (i != minimum) {
            swap(arr, i, minimum);
        }
    } return arr;
}

const swap = (arr, i, j) => {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    return arr;
}

const result = selectionSort([1, 5, 4, 2, 7, 6, 9]);
console.log(result);

//

const selectionSortExercise = arr => {
    for (let i = 0; i < arr.length; i++) {
        let minimum = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minimum] > arr[j]) {
                minimum = j;
            } 
        }
        if (i !== minimum) {
            swap(arr, i, minimum);
        }
    } return arr;
}

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

