const pushAndPop = () => {
    const arr = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
    arr.push([1, 2, 3]);
    arr.pop();
    console.log(arr)
}

pushAndPop();

const shiftAndUnshift = () => {
    const arr = [1, 2, 3, 4]
    arr.unshift(0);
    console.log(arr)
}

shiftAndUnshift();