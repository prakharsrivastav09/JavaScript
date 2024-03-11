const score = 400;
console.log(score);
const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(typeof balance);

console.log(balance.toFixed(3));
const otherNumber = 23.78688;

console.log(otherNumber.toFixed());

console.log(otherNumber.toPrecision(3));

console.log(typeof otherNumber);

const hundreds = 10000000;
console.log(hundreds.toLocaleString());

//// +++++++++++++++++ Maths +++++++++++//
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.87));
console.log(Math.ceil(5.99));
console.log(Math.floor(4.9));
console.log(Math.random());
console.log(Math.floor(Math.random()*10) +1);

const min = 10;
const max = 20

console.log(Math.floor(Math.random()* (max-min +1))+min);