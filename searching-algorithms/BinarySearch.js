const binarySearch = (arr, n) => {
    let first = 0;
    let last = arr.length - 1;
    let middle = Math.floor(( first + last ) / 2);

    while (arr[middle] !== n) {
        if (first > last) {
            return -1;
        }
        if (n > arr[middle]) {
            first = middle + 1;
        } else {
            last = middle - 1;
        } 
        middle = Math.floor(( first + last ) / 2);
    } 
    return middle;
}

const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6.5)
console.log(result)