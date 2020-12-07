// Calculate factorial for num

// Iteratively
const factorial = num => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    } return fact;
}

const result = factorial(5);
console.log(result);

// Recursively
const factorialRecursive = num => {
    if (num === 1) return 1;
    return num * factorialRecursive(num -1);
}

const resultRecursive = factorialRecursive(5);
console.log(resultRecursive);