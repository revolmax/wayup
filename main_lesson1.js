let number = 7;
number = 14;
console.log(number);
const number2 = 50;
console.log(number2);
const name = 'Oleh',
    number3 = 3,
    colors = ['green', 'yelow', 'blue'],
    user = {
        id: 1,
        firstName: 'Oleh'
    },
    printName = () => {
        console.log('name');
    };
const firstName = 'hi ',
    two = 'world!';
let result = firstName + two;
console.log(result);
//number (infinity, NaN)
const num = 3;
let result1 = num / 0;
let result2 = 'Oleh' * num;
console.log(result1);
console.log(result2);

//BigInt > 2**53
let maxNum = Number.MAX_SAFE_INTEGER;
console.log(maxNum);
let bigIntNumber = 9007199254740991154;
console.log(bigIntNumber);

//string
let str1 = 'hi';
let str2 = 'mom "i love you"';
let myName = 'Oleh';
let lastName = 'secret'
let fullName = `${myName} ${lastName}`
console.log(fullName);

//Boolean
let variable1 = true;
let variable12 = false;

//Null
let empty = null;
console.log(empty);

//undefined
let test;
console.log(test);

//object
let userObject = {
    id: 2,
    firstN: 'first',
    age: 41
};
console.log(userObject);

//symbol
let sym = Symbol();
console.log(sym);

console.log(typeof num);
console.log(typeof maxNum);
console.log(typeof fullName);
console.log(typeof variable12);
console.log(typeof empty);
console.log(typeof test);
console.log(typeof userObject);
console.log(typeof sym);

//if
if (15 > 10) {
    console.log('hi')
}
/*
>, <, >=, <=, ==, ===, !=, !==
*/
if ('java' < 'phyton') {
    console.log('hi')
};
//if else
if (8 < 4) {
    console.log('false');
} else {
    console.log('true');
};
//if else if
if (8 < 4) {
    console.log('false');
} else if (8 == 4) {
    console.log('true');
} else {
    console.log('...')
}

//switch case
const color = 'dark'
switch (color) {
    case 'green':
        console.log('color - green');
        break;
    case 'red':
        console.log('color - red');
        break;
    default:
        console.log('color - not a color');
}