//let z = sub(5,3)
const sub = function (x, y) {
    return x - y;
}
let z = sub(5, 3);
let a = '10';
let b = 5;
let res = add(a);
console.log(`res = ${res}`)
res = sub(a, b);
console.log(`res = ${res}`);
console.log(typeof add)
console.log(typeof sub)
function add(x, y) {
    return x + +y;
}