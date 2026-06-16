

// 1. Write a named function to print "Hello World".

function print() {

    console.log('Hello World');
}
print();


// 3.Write a named function that prints a given name.


function printname(name) {
    console.log(name);
}
printname('Alpesh');


// 6.Write a named function that returns a random number between 1 and 100.


function randomnum() {

    var randomnum = Math.floor(Math.random() * 100);
    console.log(randomnum);

    // for (let i = 0; i < randomnum; i++) {

    //     console.log(randomnum);
    // }
}
randomnum();


// 7. Write a named function that returns the sum of two numbers.


// *------- With User Input -------*


let num1 = Number(prompt("Enter the number1:"))

let num2 = Number(prompt("Enter the number2:"))

function sum(num1, num2) {

    return num1 + num2;
}

let add = sum(num1, num2);

console.log("Sum is :-", add);


// *------- Without user input -------*


// function sum(num1, num2) {

//     return num1 + num2;
// }
// console.log(sum(5, 2));


// 9. Write a named function that returns the factorial of a number.


// *------- Without user input -------*


// function factorial(num) {
//     let fact = 1;

//     for (let i = 1; i <= num; i++) {

//         fact = fact * i;

//     }
//     return fact;
// }
// console.log(factorial(5));


// *------- With User Input -------*


let num = Number(prompt("Enter the number:- "));
function factorial(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++) {

        fact = fact * i;

    }
    return fact;
}
console.log(factorial(5));