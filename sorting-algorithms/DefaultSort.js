const numberCompare = (num1, num2) => {
    return num1 - num2;
}

const defaultSort = () => {
    return [1, 5, 4, 2, 7, 6].sort(numberCompare);
}

const result = defaultSort();
console.log(result);