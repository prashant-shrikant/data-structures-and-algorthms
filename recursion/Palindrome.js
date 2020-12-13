const reverse = str => {
    if (str.length == 1) {
        return str;
    }
    else {
        const lastCharacter = str.charAt(str.length - 1)
        const shortString = str.substring(0, str.length - 1)
        return lastCharacter + reverse(shortString);
    }
}

const isPalindrome = (str) => {
    const reverseStr = reverse(str);
    if (str === reverseStr) {
        return true;
    } return false;
}

const result = isPalindrome("racecar");
console.log(result);