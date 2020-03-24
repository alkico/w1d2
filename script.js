// functions
// procedure - collection of statements that can be invoked one or more times

// function declaration gets hoisted
// greet();
// function declaration
// function greet() {
//     console.log('hello');
// }


// function expression
const greet = function () {
    let greeting = 'hello';
    return greeting;
}

const myGreeting = greet();

// console.log(myGreeting);

function oddOrEven(name) {
    if (name.length % 2 === 0) {
        return name + ' has an even number of letters';
    }
    return name + ' has an odd number of letters';
}

// console.log(oddOrEven('Marty'));

function add(a, b) {
    return a + b;
}
add(4, 5);

// arrow functions
// function triple(n) {
//     return n * 3;
// }

// const triple = n => n * 3;

// console.log(triple(8));
// const triple = n => {
//     return n * 3;
// };

// arrays
// ordered and numerically indexed list of data 

// an array can hold all kinds of values
const values = [true, 3, 'name', null];
const emptyArray = [];
const falsy = [null, false, undefined, '', 0, NaN];

// console.log(values[1]);

// add element to the end
values.push('another');

// console.log(values);
// remove element from the end
values.pop();

// console.log(values);

values.unshift('new');

// console.log(values);

values.shift();

// console.log(values);


// splice()
// names.splice(1, 1);

// names.splice(1, 0, 'Joe');

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// for (let name of names) {
//     console.log(name);
// }

// const ar = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < ar.length; i++) {
//     for (let j = 0; j < ar[i].length; j++) {
//         console.log(ar[i][j]);
//     }
// }

// console.log(ar[1][0]);

const names = ['Frank', 'Kyle', 'Peter', 'Susan'];

function log(name) {
    console.log(name);
}

names.forEach(function (name, idx, ar) {
    console.log(`element ${name} at index ${idx} from array ${ar}`);
})

// console.log(names);












