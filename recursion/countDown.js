// Counting down from n to 1.

// Without using recursion. 
const countDown = (n) => {
    for (let i = n; i > 0; i--) {
        console.log(i)
    }
}

// Using recursion
const countDownRecursion = n => {
    while ( n > 0) {
        console.log(n);
        return countDownRecursion(n-1);
    }
}

// countDown(5);
countDownRecursion(5);
