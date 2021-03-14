//while
let candies = 10;
while (candies > 0) {
    console.log('repeat')
    candies -= 1;
}
let i = 0;
while (i < 10) {
    console.log(i);
    i += 1;
};

//do while
let x = 0;
do {
    x += 1;
    console.log(x)
} while (x <= 5);

//for
for (let i = 0; i < 5; i += 1) {
    console.log(i)
};

//objects
const carBmw = {
    model: 'Bmw',
    country: 'germany',
    year: 2010,
    color: 'green'
};
console.log(carBmw.country);
console.log(carBmw.color);
const carReno = {
    model: 'reno',
    country: 'france',
    year: 2015,
    color: 'blue'
};
const yearBmw = carBmw.year;
const yearReno = carReno.year;
const result = yearBmw + yearReno;
console.log(result);
carReno.passengers = 8;
console.log(carReno);

//array
const color = ['blue', 'black', 'red', 'green'];
const result1 = [321, 232, 244, 325];
const answer = [true, false, true, false];
const objects = [{
        id: 2,
        name: 'ivan'
    },
    {
        id: 3,
        name: 'petr'
    }
];
console.log(color);
console.log(result);
console.log(answer);
console.log(objects);
console.log(color[0]);
color[0] = 'dark';
console.log(color);

const students = ['ivan', 'petr', 'daria', 'kolya'];
const amount = students.length;
console.log(amount);

//functions
const showMessage = () => {
    console.log('message')
}
showMessage();
const checkAge = (nameS, age) => {
    if (age > 18) {
        console.log(nameS + ' army')
    } else {
        console.log(nameS + 'no army')
    }
};
checkAge('ivan', 20);

//return
const sum = (x, y) => {
    return x + y;
}
const res = sum(25, 80);
console.log(res);