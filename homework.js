const sumDigits = function (x) {
    x = " " + x;
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    return sum;
}

const luckyNumber = function (x) {
    x = " " + x;
    let lucky = 0;
    for (let i = 1; i < x.length; i = i + 2) {
        lucky = lucky + Number(x[i]) - Number(x[i + 1]);
    }
    return lucky === 0;
}

let res = sumDigits(1234);
console.log(`res = ${res}`);
res = luckyNumber(123871); // 1+ 3+ 7 === 2 + 8 + 1
console.log(res ? 'lucky' : 'unlucky');