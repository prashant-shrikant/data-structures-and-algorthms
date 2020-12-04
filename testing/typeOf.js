const checkString = (s) => {
    if (typeof s === 'string') {
        console.log('prashant')
    }

    const a = {
        prop1: 'five',
        6: 'six',
    }
    const b = a['6']
    console.log(b);

    console.log(a)
}

checkString('old');


