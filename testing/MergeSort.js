const merge = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++
        } 
    } 
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++
    } 
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++
    }
    return result;
}

const mergeSort = arr => {
    let arrLength = arr.length;
    if (arrLength == 1) {
        return arr;
    }
    let midPoint = Math.floor(arrLength / 2);
    let leftArr = mergeSort(arr.slice(0, midPoint));
    let rightArr = mergeSort(arr.slice(midPoint));
    return merge(leftArr, rightArr);
} 

const result = mergeSort([9, 1, 4, 2, 7, 8, 10]);
console.log(result);