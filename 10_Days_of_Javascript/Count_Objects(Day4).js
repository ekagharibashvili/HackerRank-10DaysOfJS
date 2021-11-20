function getCount(objects) {
    let count = 0;
    objects.forEach(obj => {
        obj.x === obj.y ? count++ : count;
    });
    return count;
}
