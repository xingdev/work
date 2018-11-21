function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
var isDone = false;
var dec = 10;
var list = [1, 2, 3];
var list1 = [1, 2, 3];
console.log(getProperty(x, "a")); // okay)
