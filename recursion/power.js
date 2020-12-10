const power = (num, pow) => {
    if (pow == 0) {
        return 1;
    } else {
        return num * power(num, pow - 1);
    }
}

const result = power(2, 2);
console.log(result);