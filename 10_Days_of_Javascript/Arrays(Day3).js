function getSecondLargest(nums) {
    nums = [...new Set(nums)]; // it removes duplicates from array
    const max = Math.max(...nums);
    const index = nums.indexOf(max);
    nums.splice(index, 1);
    return nums.splice((nums.indexOf(max)), 1).join();
}