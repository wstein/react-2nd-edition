console.log('utils.js is running!');

const add = (a, b) => a + b;
const square = (x) => x * x;
const subtract = (a, b) => a - b;

export {add, square, subtract as default};