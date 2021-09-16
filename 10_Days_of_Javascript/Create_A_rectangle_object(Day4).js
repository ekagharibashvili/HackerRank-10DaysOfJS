function Rectangle(a, b) {
    let obj = {};
    obj.length = a;
    obj.width = b;
    obj.perimeter = (a + b) * 2;
    obj.area = a * b;
    return obj;
}