// captitalize first letter of every item in the array

const capitalizeWords = array => {
  if (array.length === 1) {
    const word = array[0];
    array[0] = word[0].toUpperCase() + word.substring(1);
    console.log(array)
    return array;
  }
  let res = capitalizeWords(array.slice(0, -1));
  const newArr = array.slice(array.length - 1);
  const newWord = newArr[0];
  res.push(newWord[0].toUpperCase() + newWord.substring(1));
  return res;
}

const result = capitalizeWords(['prashant', 'shrikant', 'pacific'])
console.log(result);