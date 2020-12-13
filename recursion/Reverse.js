const reverse = str => {
    if(str.length == 1) {
        return str;
    } else {
        let shortString = str.substring(0, str.length - 1)
        let lastIndex = str.length - 1;
        return str.charAt(lastIndex) + reverse(shortString)
    }
}

const result = reverse("Prashant");
console.log(result);