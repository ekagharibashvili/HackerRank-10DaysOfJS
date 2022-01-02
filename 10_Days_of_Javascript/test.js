 const fruits = [
    { apple: 3, },
    { pear: 9, },
    { apple: 13 },
    { pear: 5 },
];

function fruitsObj(arr) {
    return arr.reduce(function (a, b) {
        for (const [key, value] of Object.entries(b)) {
            if (key in a) {
                a[key] += value
            }
            else {
                a[key] = value
            }
        }
        return a;
    }, {});
}

console.log(fruitsObj(fruits));
