function getSecondLargest(nums) {
    nums = [...new Set(nums)]; // it removes duplicates from array
    let max = Math.max(...nums);
    const index = nums.indexOf(max);
    nums.splice(index, 1);
    return Math.max(...nums);
}
