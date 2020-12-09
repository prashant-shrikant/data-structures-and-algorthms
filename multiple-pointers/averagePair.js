const averagePair = (arr, target) => {
    let first = 0;
    let last = arr.length - 1;

    while ( first != last) {
        const result = (arr[first] + arr[last]) / 2;
        console.log(result, target)
        if ( result === target) {
            return true;
        } else if (result > target) {
            last--;
        } else { 
            first++;
        }
    } return false;
};

const result = averagePair([1, 2, 5], 2.5);
console.log(result);