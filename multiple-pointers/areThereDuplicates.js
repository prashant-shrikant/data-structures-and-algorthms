const areThereDuplicates = (...args) => {
    args.sort((a ,b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    } return false;
}

const result = areThereDuplicates(1, 2, 2);
console.log(result);