console.log('Hello world!');
let x;
console.log(x);
x = 7;
console.log(x);
x = "bye";
console.log(x);
const pi = 3.1415926;
console.log(pi);
// pi = 3.14;
let y = x;
console.log(y);
y = 2.718281828;
console.log('exp = ' + y);
x = true;
console.log(x);
x = null;
console.log(x);
x = 3;
console.log('exp = ' + y + ', or ' + x);
console.log(`exp = ${y}, or ${x}`);
let res = 7 % 3;
console.log(`res = ${res}`);
x = 3 - true;
console.log(x);
x = '' + 10; //x = String(10);
console.log(x)
y = '100';
x = +y; //x = Number('100');
console.log(x)
y = '';
x = !!y//x = Boolean(' ');
console.log(x);
x = true === '1';
console.log(x)
x = '';
res = x ? 'Yes' : 'No';
console.log(res)
//let i;
for (let i = 1; i <= 5; i++) {
    console.log(i)
}
//console.log(i)
console.log(typeof res);
res = 5;
console.log(typeof(res));
res = true;
console.log(typeof res);
res = undefined;
console.log(typeof res);
res = null;
console.log(typeof(res));
res = 0/0;
console.log(res)
console.log(typeof res)
res = -1/0;
console.log(res)
console.log(typeof res)