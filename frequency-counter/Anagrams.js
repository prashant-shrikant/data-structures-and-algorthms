// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

const anagram = (str1, str2) => {
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    // check if length is same. If not return false;
    if (str1.length != str2.length) {
        return false;
    }
    // create frequencyCounter for str1
    for (let char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
    // create frequencyCounter for str2
    for (let char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)

    for (let key in frequencyCounter1) {
        // if char in str1 not found in str2, return false
        if (!(key in frequencyCounter2)) {
            return false;
        }
        // if char in str1 count is not the same return false
        if (frequencyCounter1[key] != frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
}

const result = anagram('a', 'ab');
console.log(result)
