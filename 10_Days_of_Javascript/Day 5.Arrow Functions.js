function modifyArray(nums) {
    let newArr = nums.map(function (x) {
        if (x % 2 === 0) {
            return x * 2;
        } else {
            return x * 3;
        }
    })
    return newArr
}