/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     //Code Block
//     return a + b;
// }

// let sum = addTwoNumbers(2, 6)
// console.log(sum)

// Arrow Function With Parameters
// const addTwoNumbers = (a, b) => {
//     //Code Block
//     return a + b;
// }

// let sum = addTwoNumbers(2, 6)
// console.log(sum)

// Single Line Arrow Function With Parameters
const addTwoNumbers = (a, b) => a + b;
let sum = addTwoNumbers(5, 2);
console.log(sum)

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello!')

const sayHello = () => console.log('Hello!')
sayHello()

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    <p>`
)
console.log(returnMultipleLines())
