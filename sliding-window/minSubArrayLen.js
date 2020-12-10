const minSubArrayLen = (arr, sum) => {
    let start = 0;
    let end = 0;
    let minLength = Infinity;
    let total = 0;

    while (start < arr.length) {
        if (total < sum && end < arr.length) {
            total += arr[end];
            end++;
        } else if (total >= sum) {
            minLength = Math.min(minLength, end-start);
            total -= arr[start];
            start++;
        } else {
            break;
        }
    } return minLength == Infinity ? 0 : minLength;
}

const result = minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
console.log(result);