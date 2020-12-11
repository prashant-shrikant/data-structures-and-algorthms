const linearSearch = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    } return false;
}

const result = linearSearch([1 , 5, 2, 8, 4, 10], 10);
console.log(result);