function vowelsAndConsonants(s) {
    s.split('').forEach((x) => {
        if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
            console.log(x)
        }
    }
    );

    s.split('').forEach((y) => {
        if (y !== 'a' && y !== 'e' && y !== 'i' && y !== 'o' && y !== 'u') {
            console.log(y)
        }
    }
    );
}